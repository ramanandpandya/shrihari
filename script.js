const { useState, useEffect } = React;

/* ==========================================================================
   Company Information & Business Verticals
   ========================================================================== */
const COMPANY_INFO = {
  name: 'Shri Hari',
  tagline: 'Multi-Enterprise Business Group',
  domain: 'shriharinvs.com',
  address: '101-102, Shanti Complex, Opp. Lokrakshak Healthcare, Vijalpore, Navsari, Gujarat - 396445',
  phone: '+91 9737375173',
  secondaryPhone: '+91 9537086153',
  email: 'info@shriharinvs.com',
  businessHours: 'Mon - Sat: 9:00 AM - 8:30 PM | Sunday: By Appointment',
  socials: {
    whatsapp: 'https://wa.me/919737375173?text=Hello%20Shri%20Hari%20Group',
    facebook: 'https://facebook.com/shriharinvs',
    instagram: 'https://instagram.com/shriharinvs',
    linkedin: 'https://linkedin.com/company/shriharinvs',
  },
};

const VERTICALS = [
  {
    id: 'travels',
    name: 'Shri Hari Travels',
    subdomain: 'travels.shriharinvs.com',
    tagline: 'Luxury Tourism, Corporate Transit & Sacred Pilgrimages',
    description: 'Specialized bus rentals, custom holiday itineraries, Chardham Yatras, flight bookings, and complete corporate fleet transportation across Gujarat and pan-India.',
    badge: 'Tourism & Transit',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'classes',
    name: 'Shri Hari Computer Classes',
    subdomain: 'classes.shriharinvs.com',
    tagline: 'Certified IT, TallyPrime, Web Development & AI Skills',
    description: 'Government certified computer literacy, CCC, Tally Prime + GST accounting, web development, and digital marketing programs with practical 1-on-1 labs in Navsari.',
    badge: 'Education & IT',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'ads',
    name: 'Shri Hari Advertising',
    subdomain: 'ads.shriharinvs.com',
    tagline: 'High-Impact Outdoor Hoardings & Digital Brand Campaigns',
    description: 'Prime highway billboards, LED gantries, bus stop branding, print media, and social advertising solutions engineered to give local and national brands maximum visibility.',
    badge: 'Media & Branding',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 'events',
    name: 'Shri Hari Events',
    subdomain: 'events.shriharinvs.com',
    tagline: 'Grand Weddings, Cultural Galas & Corporate Exhibitions',
    description: 'Full-service event production, theme wedding decor, royal catering, sound & light stages, and corporate event management delivering memorable experiences.',
    badge: 'Celebrations & Galas',
    color: 'from-amber-400 to-orange-500',
  },
];

/* ==========================================================================
   Authentic Shri Hari Logo Component (SVG Vector)
   ========================================================================== */
const ShriHariLogo = ({ size = 48, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-3 cursor-pointer group">
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="rounded-full ring-2 ring-orange-500/40 shadow-[0_0_20px_rgba(255,110,0,0.5)] transition-transform duration-300 group-hover:scale-105"
      >
        <circle cx="100" cy="100" r="95" fill="#18181b" stroke="#ff6e00" strokeWidth="6" />
        <circle cx="100" cy="100" r="82" fill="#ff6e00" />
        {/* Tilak Plume / Peacock Crown */}
        <path d="M100 25 C92 45, 82 55, 100 80 C118 55, 108 45, 100 25 Z" fill="#ffffff" />
        <circle cx="100" cy="50" r="6" fill="#18181b" />
        {/* Lord Shrinathji "શ્રીહરિ" Calligraphy Representation */}
        <text
          x="100"
          y="125"
          textAnchor="middle"
          fill="#18181b"
          fontSize="42"
          fontWeight="900"
          fontFamily="Rubik, sans-serif"
        >
          શ્રીહરિ
        </text>
        <path d="M50 148 Q100 175 150 148" stroke="#ffffff" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
      <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
      </span>
    </div>
    <div>
      <div className="flex items-center gap-2">
        <span className="font-heading text-xl font-black tracking-tight text-white group-hover:text-orange-400 transition-colors">
          SHRI HARI
        </span>
        <span className="text-[10px] font-extrabold tracking-widest text-orange-300 px-1.5 py-0.5 rounded bg-orange-950/80 border border-orange-500/40">
          NVS
        </span>
      </div>
      <p className="text-[11px] font-medium text-stone-400">
        shriharinvs.com <span className="text-orange-500 font-semibold">• Navsari</span>
      </p>
    </div>
  </div>
);

/* ==========================================================================
   Navbar Component (Clean Website - No Admin Button)
   ========================================================================== */
const Navbar = ({ activePage, setActivePage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0c0a09]/95 backdrop-blur-md border-b border-orange-500/20">
      {/* Top Phone Micro-Bar */}
      <div className="bg-[#141210] border-b border-stone-800/80 text-xs text-stone-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-stone-400">
            <span className="text-orange-400 font-medium">📍 Vijalpore, Navsari, Gujarat</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="text-stone-200 hover:text-orange-400 font-semibold transition-colors"
            >
              📞 <span className="text-orange-400">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s+/g, '')}`}
              className="text-stone-200 hover:text-orange-400 font-semibold transition-colors"
            >
              📞 <span className="text-orange-300">{COMPANY_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <ShriHariLogo onClick={() => setActivePage('home')} />

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {['home', 'about', 'services', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${
                activePage === page
                  ? 'text-orange-400 bg-orange-500/15 border border-orange-500/30 shadow-[0_0_12px_rgba(255,110,0,0.25)]'
                  : 'text-stone-200 hover:text-orange-400 hover:bg-stone-900/60'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setActivePage('contact')}
            className="px-5 py-2.5 rounded-xl text-xs font-black tracking-wide uppercase bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-stone-950 shadow-[0_0_16px_rgba(255,110,0,0.35)] hover:shadow-[0_0_24px_rgba(255,110,0,0.55)] transition-all hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-stone-200 hover:text-orange-400"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0c0a09] border-b border-orange-500/30 px-4 py-4 space-y-2">
          {['home', 'about', 'services', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setActivePage(page);
                setMobileOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold capitalize text-stone-200 hover:bg-stone-900 hover:text-orange-400"
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

/* ==========================================================================
   Home Page Section
   ========================================================================== */
const HomePage = ({ setActivePage }) => (
  <main className="min-h-screen">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-14 pb-24 md:pt-24 md:pb-32 text-center px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-b from-orange-600/20 via-amber-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-orange-500/40 text-xs text-orange-300 font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>Welcome to Shri Hari • Navsari, Gujarat</span>
          <span className="text-stone-600">|</span>
          <span className="text-orange-400 font-mono">shriharinvs.com</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-stone-100 max-w-4xl mx-auto leading-tight">
          Excellence Across{' '}
          <span className="text-orange-gradient">Four Pillars</span> of Business & Growth
        </h1>

        <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Empowering Navsari and South Gujarat with turnkey luxury travel, certified computer education, high-impact outdoor advertising, and grand royal celebrations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setActivePage('services')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-stone-950 font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(255,110,0,0.4)] hover:scale-105 transition-transform"
          >
            Explore 4 Verticals →
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-orange-500/40 text-sm font-semibold tracking-wide transition-all"
          >
            Visit Vijalpore Office
          </button>
        </div>
      </div>
    </section>

    {/* 4 Core Verticals Grid */}
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white">Our Core Business Verticals</h2>
        <p className="text-stone-400 mt-2 text-sm">Specialized excellence under one trusted brand banner</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VERTICALS.map((vert) => (
          <div
            key={vert.id}
            className="rounded-2xl bg-stone-900/80 border border-orange-500/20 p-6 flex flex-col justify-between hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(255,110,0,0.25)] transition-all group"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 px-2.5 py-1 rounded-md border border-orange-500/30">
                {vert.badge}
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-4 group-hover:text-orange-400 transition-colors">
                {vert.name}
              </h3>
              <p className="text-xs font-mono text-orange-300/80 mt-1">{vert.subdomain}</p>
              <p className="text-xs text-stone-300 mt-3 leading-relaxed">{vert.description}</p>
            </div>
            <a
              href={`https://${vert.subdomain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-between text-xs font-bold text-orange-400 hover:text-orange-300 pt-3 border-t border-stone-800"
            >
              <span>Visit Subdomain</span>
              <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  </main>
);

/* ==========================================================================
   Footer Component with Updated Direct Phone Numbers
   ========================================================================== */
const Footer = ({ setActivePage }) => (
  <footer className="bg-[#080706] text-stone-300 border-t border-orange-500/20 pt-16 pb-8 px-4 sm:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
      <div>
        <ShriHariLogo onClick={() => setActivePage('home')} />
        <p className="text-xs text-stone-400 leading-relaxed mt-4">
          Shri Hari is Navsari's premier multi-enterprise group, delivering high-impact solutions across travel, education, advertising, and celebrations.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">Core Verticals</h4>
        <ul className="space-y-2 text-xs">
          {VERTICALS.map((v) => (
            <li key={v.id}>
              <a href={`https://${v.subdomain}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex justify-between">
                <span>{v.name}</span>
                <span className="font-mono text-stone-500 text-[10px]">{v.subdomain}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">Navsari Head Office</h4>
        <p className="text-xs text-stone-400 leading-relaxed">{COMPANY_INFO.address}</p>
        <p className="text-xs text-stone-400 mt-2 font-mono">{COMPANY_INFO.businessHours}</p>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">Direct Contact</h4>
        <div className="space-y-2 text-xs">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-stone-200 hover:text-orange-400 font-semibold"
          >
            <span>Primary:</span>
            <span className="text-orange-400 font-bold">{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-stone-200 hover:text-orange-400 font-semibold"
          >
            <span>Alternate:</span>
            <span className="text-orange-300 font-bold">{COMPANY_INFO.secondaryPhone}</span>
          </a>
          <p className="text-stone-400 pt-1">
            Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-stone-200 hover:text-orange-400">{COMPANY_INFO.email}</a>
          </p>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
      <p>© {new Date().getFullYear()} Shri Hari Group. All rights reserved.</p>
      <p className="font-mono text-stone-600">Navsari • Gujarat • India</p>
    </div>
  </footer>
);

/* ==========================================================================
   Root Application
   ========================================================================== */
const App = () => {
  const [activePage, setActivePage] = useState('home');

  // Listen for #admin or Ctrl+Shift+A for Admin CMS shortcut
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin') {
        setActivePage('admin');
      }
    };
    const handleKey = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setActivePage('admin');
      }
    };
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('keydown', handleKey);
    handleHash();
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0a09] flex flex-col justify-between">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
      {activePage === 'about' && (
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Shri Hari Group</h1>
          <p className="text-stone-300 leading-relaxed max-w-3xl mx-auto">{COMPANY_INFO.address}</p>
        </div>
      )}
      {activePage === 'services' && (
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our 4 Core Verticals</h1>
          <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">Travels, Computer Classes, Advertising, and Events.</p>
        </div>
      )}
      {activePage === 'contact' && (
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Shri Hari</h1>
          <p className="text-orange-400 font-bold text-lg mb-2">{COMPANY_INFO.phone} / {COMPANY_INFO.secondaryPhone}</p>
          <p className="text-stone-400 text-sm">{COMPANY_INFO.address}</p>
        </div>
      )}
      {activePage === 'admin' && (
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-orange-400 mb-4">Shri Hari Admin CMS</h1>
          <p className="text-stone-300 mb-6">Secure Portal for Blog, Gallery, and Inquiries.</p>
          <button onClick={() => setActivePage('home')} className="px-4 py-2 bg-stone-800 rounded-lg text-sm text-stone-200">
            ← Return to Main Site
          </button>
        </div>
      )}
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);