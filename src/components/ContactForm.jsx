import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── Credentials dibaca dari .env (tidak masuk GitHub) ─────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ─────────────────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValid = {
    name: formData.name.trim().length > 2,
    email: validateEmail(formData.email),
    message: formData.message.trim().length > 9,
  };

  const allValid = Object.values(isValid).every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const getFieldStyle = (field) => {
    const base = {
      width: '100%',
      padding: '14px 16px',
      background: 'rgba(255,255,255,0.05)',
      border: '1.5px solid',
      borderRadius: '10px',
      color: 'var(--text-primary)',
      fontSize: '15px',
      outline: 'none',
      transition: 'border-color 0.25s, box-shadow 0.25s',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
    };
    if (!touched[field]) return { ...base, borderColor: 'var(--glass-border)' };
    return isValid[field]
      ? { ...base, borderColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.15)' }
      : { ...base, borderColor: '#ef4444', boxShadow: '0 0 0 3px rgba(239,68,68,0.15)' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!allValid) return;

    setStatus('loading');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      noValidate
      className="glass"
      style={{
        padding: '40px',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h3 style={{ fontSize: '22px', marginBottom: '28px', textAlign: 'center' }}>
        Send a <span style={{ color: 'var(--accent-primary)' }}>Message</span>
      </h3>

      {/* Name */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', fontWeight: '500' }}>
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="contact-name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Name"
          required
          style={getFieldStyle('name')}
        />
        {touched.name && !isValid.name && (
          <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '5px' }}>
            Name must be at least 3 characters.
          </p>
        )}
      </div>

      {/* Email */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', fontWeight: '500' }}>
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="contact-email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="your@email.com"
          required
          style={getFieldStyle('email')}
        />
        {touched.email && !isValid.email && (
          <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '5px' }}>
            Please enter a valid email address.
          </p>
        )}
      </div>

      {/* Message */}
      <div style={{ marginBottom: '28px' }}>
        <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px', fontWeight: '500' }}>
          Your Message
        </label>
        <textarea
          name="message"
          id="contact-message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Hello, I'd like to..."
          rows="5"
          required
          style={{ ...getFieldStyle('message'), resize: 'vertical', minHeight: '120px' }}
        />
        {touched.message && !isValid.message && (
          <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '5px' }}>
            Message must be at least 10 characters.
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        whileHover={status === 'idle' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        style={{
          width: '100%',
          height: '52px',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: status === 'loading' || status === 'success' ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          transition: 'background 0.3s, opacity 0.3s',
          background: status === 'success'
            ? 'linear-gradient(135deg, #22c55e, #16a34a)'
            : status === 'error'
              ? 'linear-gradient(135deg, #ef4444, #dc2626)'
              : 'linear-gradient(135deg, var(--accent-primary), #b8860b)',
          color: '#000',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        <AnimatePresence mode="wait">
          {status === 'loading' && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div style={{
                width: '20px', height: '20px',
                border: '2px solid rgba(0,0,0,0.3)',
                borderTop: '2px solid #000',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }} />
            </motion.div>
          )}
          {status === 'success' && (
            <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              ✓ Message Sent Successfully!
            </motion.span>
          )}
          {status === 'error' && (
            <motion.span key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ color: '#fff' }}>
              ✗ Failed to send. Try again.
            </motion.span>
          )}
          {status === 'idle' && (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Send Message →
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </motion.form>
  );
};

export default ContactForm;
