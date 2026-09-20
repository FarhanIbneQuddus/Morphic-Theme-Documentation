import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sectionsDir = path.join(__dirname, '..', 'sections');
const outputFile = path.join(__dirname, 'src', 'sectionsData.json');

function parseLiquidFiles() {
  const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.liquid'));
  const sectionsData = [];

  for (const file of files) {
    const filePath = path.join(sectionsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const schemaMatch = content.match(/{%\s*schema\s*%}([\s\S]*?){%\s*endschema\s*%}/);
    if (schemaMatch && schemaMatch[1]) {
      try {
        const schemaString = schemaMatch[1].trim();
        // Sometimes schemas have trailing commas or comments which make JSON.parse fail. 
        // We'll try to parse it safely. 
        // For a robust approach we can use a slightly loose JSON parser or just regex.
        // Let's use a loose parsing by removing comments (if any)
        const cleanString = schemaString.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
        
        // This is a naive parse, it will work for valid JSON.
        const schema = JSON.parse(cleanString);
        
        const sectionInfo = {
          fileName: file,
          name: schema.name || file,
          settings: [],
          blocks: []
        };

        if (schema.settings) {
          sectionInfo.settings = schema.settings.map(s => ({
            id: s.id,
            type: s.type,
            label: s.label || s.id,
            info: s.info || null
          })).filter(s => s.type !== 'header' && s.type !== 'paragraph');
        }

        if (schema.blocks) {
          sectionInfo.blocks = schema.blocks.map(b => ({
            type: b.type,
            name: b.name || b.type
          }));
        }

        sectionsData.push(sectionInfo);
      } catch (err) {
        console.error(`Error parsing schema in ${file}:`, err.message);
      }
    }
  }

  // Sort by name
  sectionsData.sort((a, b) => {
    const nameA = typeof a.name === 'object' ? a.name.en || Object.values(a.name)[0] : a.name;
    const nameB = typeof b.name === 'object' ? b.name.en || Object.values(b.name)[0] : b.name;
    return (nameA || '').localeCompare(nameB || '');
  });

  // Clean names (handle Shopify's t: translation keys if present, though usually it's plain text in custom themes)
  sectionsData.forEach(s => {
    if (typeof s.name === 'object') {
      s.name = s.name.en || Object.values(s.name)[0];
    }
    if (s.name && s.name.startsWith('t:')) {
       s.name = s.name.split('.').pop().replace(/_/g, ' '); // rough fallback
    }
    
    s.settings.forEach(set => {
      if (typeof set.label === 'object') set.label = set.label.en || Object.values(set.label)[0];
      if (set.label && set.label.startsWith('t:')) set.label = set.label.split('.').pop().replace(/_/g, ' ');
    });
  });

  fs.writeFileSync(outputFile, JSON.stringify(sectionsData, null, 2));
  console.log(`Successfully generated docs for ${sectionsData.length} sections! Saved to ${outputFile}`);
}

parseLiquidFiles();
