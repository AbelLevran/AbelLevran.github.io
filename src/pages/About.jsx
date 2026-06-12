import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';
import mePhoto from '../assets/me.jpeg';

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container"
      style={{ paddingTop: '120px' }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '60px', fontSize: '3rem' }}
      >
        About <span style={{ color: 'var(--accent-primary)' }}>Me</span>
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '50px',
        marginBottom: '80px',
        alignItems: 'center'
      }}>
        {/* Left Column - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '100%',
            height: '100%',
            border: '2px solid var(--accent-primary)',
            borderRadius: '20px',
            zIndex: -1
          }}></div>
          <img
            src={mePhoto}
            alt="About Me"
            style={{
              width: '100%',
              borderRadius: '20px',
              objectFit: 'cover',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          />
        </motion.div>

        {/* Right Column - Text & Timeline */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
            Transforming Data into <span style={{ color: 'var(--accent-primary)' }}>Decisions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
            Hello! I am an Informatics Engineering graduate specializing in Data Mining, Data Analytics, and Data Science. My passion lies in uncovering hidden patterns and building predictive models that solve real-world problems.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px', marginBottom: '40px' }}>
            With a strong foundation in Python and its powerful libraries, I enjoy the entire data lifecycle — from cleaning messy datasets to developing interactive visualizations and deploying machine learning solutions.
          </p>

          <h3 style={{ fontSize: '22px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
            Education & Experience
          </h3>
          <ul style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid var(--glass-border)' }}>
            <li style={{ marginBottom: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-26px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
              <h4 style={{ fontSize: '18px', color: 'var(--accent-primary)' }}>Informatics</h4>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>University Negeri Padang • 2021 - 2025</span>
              <p style={{ fontSize: '14px', marginTop: '5px', color: 'var(--text-secondary)' }}>Focused on Data Science and Machine Learning. Graduated with Honors.</p>
            </li>
            <li style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-26px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
              <h4 style={{ fontSize: '18px', color: 'var(--accent-primary)' }}>Intern</h4>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>PT PLN Persero(UIW SUMBAR) • 2024</span>
              <p style={{ fontSize: '14px', marginTop: '5px', color: 'var(--text-secondary)' }}>Develop mobile responsive applications using Google AppSheet with an integrated photo upload
                system. Build analytics dashboards for real time monitoring of meter damage status and
                trends.</p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          My <span style={{ color: 'var(--accent-primary)' }}>Skills</span>
        </h2>

        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '20px',
              marginBottom: '20px',
              color: 'var(--text-secondary)',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '10px'
            }}>
              {category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {skillList.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
