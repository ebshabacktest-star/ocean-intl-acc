import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const productImages = {
  buttons:
    'https://images.pexels.com/photos/28141462/pexels-photo-28141462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  zippers:
    'https://images.pexels.com/photos/15391106/pexels-photo-15391106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  textile:
    'https://images.pexels.com/photos/7012543/pexels-photo-7012543.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  belts:
    'https://images.pexels.com/photos/65280/belts-belt-skin-colors-65280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  quality:
    'https://images.pexels.com/photos/31212947/pexels-photo-31212947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const products = [
  { name: 'Metal trims', detail: 'Precision-finished hardware', image: productImages.buttons },
  { name: 'Zippers & pullers', detail: 'Reliable closure systems', image: productImages.zippers },
  { name: 'Tapes & elastics', detail: 'Performance textile components', image: productImages.textile },
  { name: 'Buttons', detail: 'Corozo, shell, coconut & horn', image: productImages.buttons },
  { name: 'Ropes & cords', detail: 'Colour-led finishing details', image: productImages.textile },
  { name: 'Braided belts', detail: 'Structured finishing details', image: productImages.belts },
];

const services = [
  {
    number: '01',
    title: 'Follow-up',
    description:
      'From our Hong Kong headquarters, we consolidate orders, plan production, coordinate development and arrange shipments for dependable delivery.',
  },
  {
    number: '02',
    title: 'Quality control',
    description:
      'Our QC team evaluates production partners against client requirements and standards, helping every program maintain its requested quality level.',
  },
  {
    number: '03',
    title: 'On-time delivery',
    description:
      'Careful production planning, supply coordination and practical factory support keep every order moving toward its scheduled arrival.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark"><span>OI</span></span>
          <span className="brand-name">Ocean International <strong>Accessories</strong></span>
        </a>
        <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#company" onClick={closeMenu}>Company</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Connect with us <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="hero-content">
            <p className="eyebrow light-eyebrow"><span /> Ocean International Accessories</p>
            <h1>Details that move<br /><em>fashion forward.</em></h1>
            <p className="hero-copy">A trusted garment accessories partner connecting Hong Kong expertise with our India office, thoughtful design, responsible production and reliable delivery across the global apparel industry.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#products">Explore products <ChevronRight size={17} /></a>
              <a className="text-link light-link" href="#contact">Start a conversation <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-frame"><img src={productImages.zippers} alt="Close-up of a denim zipper and garment details" /></div>
            <div className="hero-stamp"><span>Since</span><strong>2024</strong><span>Hong Kong</span></div>
          </div>
          <div className="hero-bottom-line"><span>HONG KONG</span><span>INDIA</span><span>GLOBAL SUPPLY</span></div>
        </section>

        <section className="intro-section section-pad" id="company">
          <div className="section-kicker">01 <span /> Our story</div>
          <div className="intro-grid">
            <div>
              <h2>Built around the <span>small details</span> that make a difference.</h2>
            </div>
            <div className="intro-copy">
              <p>Ocean International Accessories HK Limited is a Hong Kong-based garment accessories supplier with more than 18 years of industry experience behind our team.</p>
              <p>With our Hong Kong headquarters and Ocean International Accessories — India office in Tirupur, we bring together reliable sourcing, product development and a responsive service model for apparel brands across the US, Europe and beyond.</p>
              <a className="text-link dark-link" href="#mission">Discover our approach <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="stat-row">
            <div><strong>18+</strong><span>Years of experience</span></div>
            <div><strong>HK + IN</strong><span>Connected locations</span></div>
            <div><strong>360°</strong><span>Product development</span></div>
            <div><strong>01</strong><span>Reliable partner</span></div>
          </div>
        </section>

        <section className="mission-section" id="mission">
          <div className="mission-image"><img src={productImages.quality} alt="Textile professional reviewing quality in a factory" /></div>
          <div className="mission-content">
            <div className="section-kicker light-eyebrow">02 <span /> Our mission</div>
            <h2>Responsible by nature.<br /><em>Precise by design.</em></h2>
            <div className="mission-points">
              <div><ShieldCheck size={25} /><span><strong>Customer first</strong>Long-term, responsive relationships guide every order.</span></div>
              <div><Sparkles size={25} /><span><strong>Environment aware</strong>We seek materials and processes that meet meaningful standards.</span></div>
              <div><Check size={25} /><span><strong>Quality assured</strong>From raw materials to finished products, detail is never an afterthought.</span></div>
            </div>
          </div>
        </section>

        <section className="products-section section-pad" id="products">
          <div className="section-heading">
            <div><div className="section-kicker">03 <span /> Product range</div><h2>Made for the <span>whole garment.</span></h2></div>
            <p>From the functional to the finishing touch, our range is designed to help products perform, feel and look their best.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image"><img src={product.image} alt={product.name} /><span>0{index + 1}</span></div>
                <div className="product-card-copy"><h3>{product.name}</h3><p>{product.detail}</p><ArrowUpRight size={18} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-intro section-pad"><div className="section-kicker light-eyebrow">04 <span /> What we do</div><h2>More than a supplier.<br /><em>A partner in progress.</em></h2><p>Good accessories are only part of the story. Our hands-on support makes complex supply chains feel clear, considered and under control.</p></div>
          <div className="services-list">
            {services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight size={21} /></article>)}
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-heading"><div className="section-kicker">05 <span /> Contact</div><h2>Let’s make the<br /><span>next detail count.</span></h2><p>Tell us what you’re working on. We’re ready to help turn your product idea into a considered, well-supported program.</p></div>
          <div className="contact-details">
            <div className="contact-location"><div className="contact-icon"><MapPin size={19} /></div><div><p className="contact-label">Hong Kong headquarters</p><p>Flat 46, 14/F Block F, Wah Lok Ind. Ctr.<br />31–35 Shan Mei St, Fotan,<br />Shatin Hong Kong.</p><a href="tel:+85235652266"><Phone size={16} /> +852 3565 2266</a></div></div>
            <div className="contact-location"><div className="contact-icon"><Globe2 size={19} /></div><div><p className="contact-label">Ocean International Accessories — India</p><p>#/30, 2nd Floor, Mannarai,<br />Uthukuli Main Road,<br />Tirupur – 641 607.</p><a href="tel:+919840291629"><Phone size={16} /> 9840 291 629</a><a href="tel:+919962473407"><Phone size={16} /> 9962 473 407</a></div></div>
            <div className="contact-email"><Mail size={18} /><div><a href="mailto:balajiraman@oceanintlacc.com">balajiraman@oceanintlacc.com</a><a href="mailto:natarajan@oceanintlacc.com">natarajan@oceanintlacc.com</a></div></div>
            <a className="website-link" href="https://www.oceanintlacc.com" target="_blank" rel="noreferrer">www.oceanintlacc.com <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>
      <footer><a className="brand" href="#top"><span className="brand-mark"><span>OI</span></span><span className="brand-name">Ocean International <strong>Accessories</strong></span></a><span>Garment accessories, thoughtfully connected.</span><span>© {new Date().getFullYear()} OIA HK Limited</span></footer>
    </div>
  );
}

export default App;
