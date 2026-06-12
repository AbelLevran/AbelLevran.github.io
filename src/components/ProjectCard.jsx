import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass hover-glow"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        group: 'true'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
        <img 
          src={project.image} 
          alt={project.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        />
        <div 
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(10, 10, 10, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            backdropFilter: 'blur(4px)'
          }}
        >
          <motion.a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--accent-primary)',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href={project.liveDemoUrl} 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--bg-secondary)',
              color: 'var(--accent-primary)',
              border: '2px solid var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        </div>
      </div>

      <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
          {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, i) => (
            <span
              key={i}
              style={{
                fontSize: '11px',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '600',
                padding: '2px 8px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '10px',
                background: 'rgba(255, 215, 0, 0.06)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
          {project.description}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.techStack.map((tech, i) => (
            <span 
              key={i}
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                background: 'rgba(255, 215, 0, 0.1)',
                color: 'var(--accent-primary)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 215, 0, 0.2)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .hover-glow:hover img {
          transform: scale(1.1);
        }
        .hover-glow:hover .overlay {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
