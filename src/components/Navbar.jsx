import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy logic
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // offset for fixed navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        padding: scrolled ? '15px 0' : '25px 0'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'Syne, sans-serif' }}
        >
          Portfolio<span style={{ color: 'var(--accent-primary)' }}>Website</span>.
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '25px' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                    style={{
                      fontWeight: '500',
                      position: 'relative',
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: 0,
                          width: '100%',
                          height: '2px',
                          backgroundColor: 'var(--accent-primary)',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div style={{ display: 'none', alignItems: 'center', gap: '15px' }} className="mobile-menu-btn">
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '20px'
            }}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '24px'
            }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--glass-border)',
              overflow: 'hidden'
            }}
          >
            <ul style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                      style={{
                        display: 'block',
                        padding: '10px 0',
                        fontWeight: '500',
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
