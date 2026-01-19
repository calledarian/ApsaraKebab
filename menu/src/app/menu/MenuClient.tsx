'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
  category: string;
}

interface MenuClientProps {
  initialItems: MenuItem[];
}

const MenuClient = ({ initialItems }: MenuClientProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(initialItems.map((item) => item.category))];

  const filteredItems =
    activeCategory === 'All'
      ? initialItems
      : initialItems.filter((item) => item.category === activeCategory);

  const TELEGRAM_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME;
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const encodeMessage = (itemName: string) =>
    encodeURIComponent(
      `Hello Apsara Fusion! I’m interested in ordering this menu item: "${itemName}".`
    );

  return (
    <>
      <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn rounded-pill px-4 ${
              activeCategory === cat ? 'btn-highlight' : 'btn-outline-highlight'
            }`}
            style={
              activeCategory === cat
                ? { backgroundColor: 'var(--highlight)', color: 'var(--primary)' }
                : {}
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 px-4">
            <div
              className="card h-100 shadow-sm position-relative"
              style={{
                borderColor: 'var(--highlight)',
                backgroundColor: 'var(--foreground)',
              }}
            >
              <div
                className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded shadow-sm"
                style={{
                  backgroundColor: 'var(--highlight)',
                  color: 'var(--primary)',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  zIndex: 10,
                }}
              >
                {item.category}
              </div>
              <Image
                src={item.image || '/placeholder-image.png'}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  <span style={{ color: 'var(--primary)' }}>{item.name}</span>
                  <span className="fw-bold" style={{ color: 'var(--highlight)' }}>
                    {item.price}
                  </span>
                </h5>
                {item.description && (
                  <p className="card-text" style={{ color: 'var(--primary)' }}>
                    {item.description}
                  </p>
                )}

                <div className="mt-3 d-flex gap-3">
                  <a
                    href={`https://t.me/${TELEGRAM_USERNAME}?text=${encodeMessage(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-50 d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-telegram me-2"></i>Telegram
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-50 d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-whatsapp me-2"></i>WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center w-100 mt-5">
            <h3 style={{ color: 'var(--highlight)' }}>No items found.</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuClient;
