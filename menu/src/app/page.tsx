import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import './globals.css'; // Make sure your :root colors are in globals.css

const WelcomePage: React.FC = () => {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero Section */}
      <div
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: '100vh',
          backgroundColor: 'var(--primary)',
          color: 'var(--highlight)',
        }}
      >
        <h1 className="display-3 mb-3 fw-bold">Welcome to Apsara Fusion</h1>
        <p className="lead mb-4">Delicious kebabs, great vibes, unforgettable experience.</p>
        <div>
          <Link
            href="/contact"
            className="btn btn-light btn-lg me-3"
            style={{ backgroundColor: 'var(--highlight)', color: 'var(--primary)', borderColor: 'var(--primary)' }}
          >
            Contact Us
          </Link>
          <Link
            href="/menu"
            className="btn btn-outline-light btn-lg"
            style={{
              color: 'var(--highlight)',
              borderColor: 'var(--highlight)',
            }}
          >
            See Menu
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-geo-alt-fill display-3 mb-3" style={{ color: 'var(--secondary)' }}></i>
            <h4>Our Location</h4>
            <p>Street 135 btw st 456&454, TTP 1, Phnom Penh, Cambodia</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-clock-fill display-3 mb-3" style={{ color: 'var(--secondary)' }}></i>
            <h4>Opening Hours</h4>
            <p>Open Daily: 10:00 AM - 10:00 PM</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-chat-dots-fill display-3 mb-3" style={{ color: 'var(--secondary)' }}></i>
            <h4>Connect with Us</h4>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://t.me/apsarafusion" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                <i className="bi bi-telegram" style={{ fontSize: '40px' }}></i>
              </a>
              <a href="https://wa.me/93660401" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--success)' }}>
                <i className="bi bi-whatsapp" style={{ fontSize: '40px' }}></i>
              </a>
              <a href="https://instagram.com/apsara_fusion" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>
                <i className="bi bi-instagram" style={{ fontSize: '40px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
