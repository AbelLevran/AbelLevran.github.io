import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '40px 20px',
      marginTop: 'auto',
      background: 'var(--bg-secondary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'Syne, sans-serif' }}>
          <span style={{ color: 'var(--accent-primary)' }}>Portfolio</span>.
        </div>

        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontStyle: 'italic' }}>
          "Data will talk to you if you're willing to listen." - Jim Bergeson
        </p>

        <div style={{ display: 'flex', gap: '20px', fontSize: '20px' }}>
          {[
            { icon: <FaGithub />, link: "https://github.com/AbelLevran" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abel-levran-3b9437281" },
            { icon: <FaEnvelope />, link: "mailto:abellevrann@gmail.com" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div style={{ color: 'var(--text-secondary)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          &copy; {new Date().getFullYear()} Created with <FaHeart style={{ color: 'var(--accent-primary)' }} /> by Abel Levran
        </div>
      </div>
    </footer>
  );
};

export default Footer;
