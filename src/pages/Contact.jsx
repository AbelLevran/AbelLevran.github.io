import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <motion.div
      id="contact"
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
        style={{ textAlign: 'center', marginBottom: '20px', fontSize: '3rem' }}
      >
        Get In <span style={{ color: 'var(--accent-primary)' }}>Touch</span>
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}
      >
        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '50px',
        alignItems: 'start'
      }}>
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 215, 0, 0.1)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              <FaEnvelope />
            </div>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Email</h4>
              <p style={{ color: 'var(--text-secondary)' }}>abellevrann@gmail.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 215, 0, 0.1)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              <FaPhoneAlt />
            </div>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Phone</h4>
              <p style={{ color: 'var(--text-secondary)' }}>+62 813 78927443</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 215, 0, 0.1)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Location</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Banten, Indonesia</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
