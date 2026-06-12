import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const HeroSection = () => {
  const titles = ["Data Analyst", "Data Scientist", "Data Enthusiast"];

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }} className="section-container">

      {/* Floating particles background */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1,
        width: '100%',
        maxWidth: '800px'
      }}>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{
            position: 'relative',
            marginBottom: '40px'
          }}
        >
          {/* Hexagonal shape with glowing ring */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            background: 'var(--accent-primary)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            filter: 'blur(15px)',
            opacity: 0.6,
            animation: 'float 6s infinite ease-in-out'
          }}></div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '24px', fontWeight: '500', marginBottom: '10px' }}
        >
          Hi, I'm <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>Abel Levran</span>
        </motion.h2>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            marginBottom: '30px',
            height: '1.2em'
          }}
        >
          I'm a <AnimatedText texts={titles} />
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', fontSize: '18px', lineHeight: '1.6' }}
        >
          Specializing in Data Mining, Analytics, and Data Science. Transforming raw data into actionable insights and robust machine learning models.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="/CV_ATS_Abel Levran_2026.pdf" download className="btn-outline">
            <FaDownload /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{ display: 'flex', gap: '25px', fontSize: '24px' }}
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/AbelLevran" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abel-levran-3b9437281" },
            { icon: <FaEnvelope />, link: "mailto:abellevrann@gmail.com" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, color: 'var(--accent-primary)' }}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        className="scroll-indicator"
      >
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid var(--text-secondary)',
          borderRadius: '15px',
          position: 'relative'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            backgroundColor: 'var(--text-secondary)',
            borderRadius: '2px',
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
