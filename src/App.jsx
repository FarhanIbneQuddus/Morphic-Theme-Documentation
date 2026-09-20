import React, { useState } from 'react';
import { Book, Settings, Layout, Search, Droplets, Type, ShoppingCart, Info, Download, Box, PlayCircle, List, ChevronRight } from 'lucide-react';
import './index.css';
import sectionsData from './sectionsData.json';

const mainSections = [
  { id: 'introduction', title: 'Introduction', icon: <Info size={18} /> },
  { id: 'getting-started', title: 'Getting Started', icon: <Download size={18} /> },
  { id: 'theme-settings', title: 'Theme Settings', icon: <Settings size={18} /> },
  { id: 'sections-guide', title: 'Sections Guide', icon: <Layout size={18} /> },
  { id: 'all-sections', title: 'All Sections Reference', icon: <List size={18} /> },
];

function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThemeSection, setSelectedThemeSection] = useState(null);

  const filteredData = sectionsData.filter(section => 
    section.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    section.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <>
            <h1 className="section-title">Welcome to Morphic</h1>
            <p className="section-subtitle">The premium Neumorphic Shopify Theme by Ceejay's Studio</p>
            
            <div className="neu-card">
              <h2>About Morphic</h2>
              <p>
                Morphic introduces a stunning "soft UI" aesthetic to your Shopify store. By combining subtle shadows, beautiful typography, and a cohesive design system, it provides a premium shopping experience that stands out.
              </p>
              <br />
              <p>
                Version: <strong>1.0.0</strong><br />
                Author: <strong>Ceejay's Studio</strong><br />
                Support: <a href="mailto:1.fahimcoc@gmail.com">1.fahimcoc@gmail.com</a>
              </p>
            </div>

            <div className="neu-card">
              <h2>Key Features</h2>
              <ul>
                <li><strong>Neumorphic Design System:</strong> Beautiful, soft UI shadows applied globally.</li>
                <li><strong>Dynamic Color Schemes:</strong> Easily switch between light and dark variants.</li>
                <li><strong>Flexible Sections:</strong> Over 40 customizable sections including hero sliders, timelines, and testimonials.</li>
                <li><strong>Advanced Product Cards:</strong> Built-in quick view, variant swatches, and animated badges.</li>
                <li><strong>Drawer Cart:</strong> Seamless shopping experience with free shipping thresholds.</li>
              </ul>
              <br/>
              <button className="neu-button">
                <PlayCircle size={18} /> View Demo
              </button>
            </div>
          </>
        );
      
      case 'getting-started':
        return (
          <>
            <h1 className="section-title">Getting Started</h1>
            <p className="section-subtitle">How to install and set up your new theme</p>

            <div className="neu-card">
              <h2>1. Uploading the Theme</h2>
              <p>Follow these steps to upload the Morphic theme to your Shopify store:</p>
              <ul>
                <li>From your Shopify admin, go to <strong>Online Store &gt; Themes</strong>.</li>
                <li>In the <strong>Theme library</strong> section, click <strong>Add theme &gt; Upload zip file</strong>.</li>
                <li>Click <strong>Choose File</strong> to select the <code>morphic-theme-v1.0.0.zip</code> file you downloaded.</li>
                <li>Click <strong>Upload</strong>.</li>
              </ul>
            </div>

            <div className="neu-card">
              <h2>2. Publishing</h2>
              <p>Once uploaded, you can customize the theme before publishing, or publish it immediately:</p>
              <div className="neu-code">
                # To publish immediately:
                1. Find Morphic in your Theme library
                2. Click 'Actions'
                3. Click 'Publish'
              </div>
            </div>
          </>
        );

      case 'theme-settings':
        return (
          <>
            <h1 className="section-title">Theme Settings</h1>
            <p className="section-subtitle">Configure global styles and layout</p>

            <div className="neu-card">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Droplets size={24} /> Colors</h2>
              <p>Morphic relies heavily on its color scheme to generate the correct neumorphic shadows.</p>
              <ul>
                <li><strong>Surface background:</strong> The main background color (Default: #e6e9ee).</li>
                <li><strong>Shadow light:</strong> The highlight color for the inset and outset shadows (Default: #ffffff).</li>
                <li><strong>Shadow dark:</strong> The dark shadow color (Default: #4f4e4e / #a3b1c6).</li>
                <li><strong>Accent:</strong> Primary color used for buttons, links, and badges (Default: #7d3fbf).</li>
              </ul>
            </div>

            <div className="neu-card">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Type size={24} /> Typography</h2>
              <p>Morphic uses <strong>Assistant</strong> as its primary font family by default.</p>
              <p>You can customize heading weights (100-900), capitalization, letter spacing, and line height to match your brand identity perfectly.</p>
            </div>

            <div className="neu-card">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShoppingCart size={24} /> Cart & Checkout</h2>
              <ul>
                <li><strong>Cart Type:</strong> Choose between a Slide-out Drawer or a standard Cart Page.</li>
                <li><strong>Free Shipping Bar:</strong> Encourage upsells by setting a free shipping threshold (e.g., $75).</li>
                <li><strong>Terms & Conditions:</strong> Require users to agree to terms before proceeding to checkout.</li>
              </ul>
            </div>
          </>
        );

      case 'sections-guide':
        return (
          <>
            <h1 className="section-title">Sections Guide</h1>
            <p className="section-subtitle">A deep dive into Morphic's dynamic sections</p>

            <div className="neu-card">
              <h2>Overview</h2>
              <p>Morphic includes a massive library of flexible sections designed with Neumorphic principles. You can view the complete configuration reference in the "All Sections Reference" tab.</p>
              <br/>
              <ul>
                <li><strong>Hero Slider & Banners:</strong> Make a bold first impression with image or video backgrounds.</li>
                <li><strong>Product Recommendations:</strong> Dynamically suggest complementary products.</li>
                <li><strong>Timelines & Testimonials:</strong> Build trust and tell your brand's story.</li>
                <li><strong>Countdown Timer:</strong> Create urgency for sales and product launches.</li>
                <li><strong>Marquee:</strong> Animated scrolling text for announcements.</li>
              </ul>
            </div>

            <div className="neu-card">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Box size={24} /> Product Cards</h2>
              <span className="badge">Premium Feature</span>
              <p>Our product cards are highly customizable directly from the Theme Settings:</p>
              <ul>
                <li><strong>Badges:</strong> Automated "New" and "Sale" badges with custom colors.</li>
                <li><strong>Quick Buy:</strong> Allow customers to add to cart without leaving the page.</li>
                <li><strong>Variant Swatches:</strong> Show color and size options visually on hover.</li>
              </ul>
            </div>
          </>
        );

      case 'all-sections':
        if (selectedThemeSection) {
          return (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '1rem', color: 'var(--neu-accent)', fontWeight: 'bold' }} onClick={() => setSelectedThemeSection(null)}>
                 &larr; Back to Sections List
              </div>
              <h1 className="section-title">{selectedThemeSection.name}</h1>
              <p className="section-subtitle">File: <code>{selectedThemeSection.fileName}</code></p>
              
              <div className="neu-card">
                <h2>Settings ({selectedThemeSection.settings?.length || 0})</h2>
                {selectedThemeSection.settings && selectedThemeSection.settings.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    {selectedThemeSection.settings.map((setting, idx) => (
                      <div key={idx} style={{ padding: '1rem', borderLeft: '4px solid var(--neu-accent)', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                        <strong>{setting.label}</strong> (<code>{setting.id}</code>) - <span style={{ color: 'var(--neu-text-muted)', fontSize: '0.9rem' }}>Type: {setting.type}</span>
                        {setting.info && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}><em>{setting.info}</em></p>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>This section has no global settings.</p>
                )}
              </div>

              <div className="neu-card">
                <h2>Blocks ({selectedThemeSection.blocks?.length || 0})</h2>
                {selectedThemeSection.blocks && selectedThemeSection.blocks.length > 0 ? (
                  <ul style={{ marginTop: '1rem' }}>
                    {selectedThemeSection.blocks.map((block, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <strong>{block.name}</strong> (Type: <code>{block.type}</code>)
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>This section has no internal blocks.</p>
                )}
              </div>
            </>
          )
        }
        return (
          <>
            <h1 className="section-title">All Sections Reference</h1>
            <p className="section-subtitle">Complete configuration guide for all {sectionsData.length} sections.</p>
            
            <input 
              type="text" 
              className="neu-input" 
              placeholder="Search sections by name or filename..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {filteredData.map((section, index) => (
                <div 
                  key={index} 
                  className="neu-card" 
                  style={{ padding: '1.5rem', marginBottom: '0', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  onClick={() => setSelectedThemeSection(section)}
                >
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {section.name || section.fileName} <ChevronRight size={18} color="var(--neu-accent)" />
                    </h3>
                    <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}><code>{section.fileName}</code></p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '0.8rem', color: 'var(--neu-accent)', fontWeight: 'bold' }}>
                    <span>{section.settings?.length || 0} Settings</span>
                    <span>{section.blocks?.length || 0} Blocks</span>
                  </div>
                </div>
              ))}
            </div>
            {filteredData.length === 0 && (
              <p style={{ textAlign: 'center', marginTop: '2rem' }}>No sections match your search query.</p>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <Book size={28} />
          Morphic Docs
        </div>

        <nav className="sidebar-nav">
          <ul>
            {mainSections.map((section) => (
              <li key={section.id}>
                <a 
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={() => {
                    setActiveSection(section.id);
                    if (section.id === 'all-sections') {
                      setSelectedThemeSection(null);
                      setSearchQuery('');
                    }
                  }}
                >
                  {section.icon}
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
