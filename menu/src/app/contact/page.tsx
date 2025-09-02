import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactPage: React.FC = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: 'var(--primary)', color: 'var(--highlight)', minHeight: '100vh' }}
    >
      <div className="container">
        <h1 className="text-center mb-5 fw-bold" style={{ color: 'var(--highlight)', fontSize: '3rem' }}>
          Contact Us
        </h1>

        {/* Row with Social Media and Map */}
        <div className="row justify-content-center mb-5">
          {/* Social Media */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h3 className="mb-4 text-center fw-bold" style={{ color: 'var(--secondary)' }}>
              Reach us on Social Media
            </h3>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://t.me/apsarafusion" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--highlight)' }}>
                <i className="bi bi-telegram" style={{ fontSize: '60px' }}></i>
              </a>
              <a href="https://wa.me/93660401" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--success)' }}>
                <i className="bi bi-whatsapp" style={{ fontSize: '60px' }}></i>
              </a>
              <a href="https://www.facebook.com/people/Apsara-Fusion-Kebab-House/61575988597688/#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--highlight)' }}>
                <i className="bi bi-facebook" style={{ fontSize: '60px' }}></i>
              </a>
              <a href="https://instagram.com/apsara_fusion" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>
                <i className="bi bi-instagram" style={{ fontSize: '60px' }}></i>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h3 className="mb-3 text-center fw-bold" style={{ color: 'var(--secondary)' }}>
              Our Location
            </h3>
            <div className="ratio ratio-16x9 shadow-sm rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.1774980472496!2d104.9169448!3d11.539121699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ca8607f9ed%3A0x8336dadfeb89d222!2sApsara%20Fusion%20Kebab%20House!5e0!3m2!1sen!2skh!4v1756792924598!5m2!1sen!2skh"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-5 text-center">
          <h5 style={{ color: 'var(--highlight)' }}>Phone: +855 93 660 401</h5>
          <h5 style={{ color: 'var(--highlight)' }}>Street 135 btw st 456&454, TTP 1, Phnom Penh, Cambodia</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
