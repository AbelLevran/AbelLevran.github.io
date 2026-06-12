import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(255, 215, 0, 0.2)' }}
      className="glass"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 20px',
        borderRadius: '30px',
        cursor: 'default',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ color: 'var(--accent-primary)', fontSize: '20px', display: 'flex' }}>
        <Icon />
      </div>
      <span style={{ fontWeight: '500', fontSize: '15px' }}>{skill.name}</span>
    </motion.div>
  );
};

export default SkillBadge;
