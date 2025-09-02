import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
}

interface MenuCategory {
  id: number;
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 1,
    title: 'Chicken Kebabs',
    items: [
      { id: 'C1', name: 'Single Chicken Kebab', description: '', price: '$2.50', image: null },
      { id: 'C2', name: 'Double Chicken Kebab', description: '', price: '$3.50', image: null },
      { id: 'C3', name: 'Single Chicken Kebab Set', description: '(Chicken Kebab + Rice + French Fries + Coke)', price: '$4.50', image: null },
      { id: 'C4', name: 'Double Chicken Kebab Set', description: '(Double Chicken Kebab + Rice + French Fries + Coke)', price: '$5.50', image: null },
      { id: 'C5', name: 'Chicken Kebab Plate', description: '(Chicken Kebab + Rice + French Fries + Salad)', price: '$4.50', image: null }
    ]
  },
  {
    id: 2,
    title: 'Beef Kebabs',
    items: [
      { id: 'B1', name: 'Single Beef Kebab', description: '', price: '$4.00', image: null },
      { id: 'B2', name: 'Double Beef Kebab', description: '', price: '$5.50', image: null },
      { id: 'B3', name: 'Single Beef Kebab Set', description: '(Single Beef Kebab + Rice + French Fries + Coke)', price: '$6.00', image: null },
      { id: 'B4', name: 'Double Beef Kebab Set', description: '(Double Beef Kebab + Rice + French Fries + Coke)', price: '$7.50', image: null },
      { id: 'B5', name: 'Beef Kebab Plate', description: '(Beef Kebab + Rice + French Fries)', price: '$6.00', image: null }
    ]
  },
  {
    id: 3,
    title: 'Burgers',
    items: [
      { id: 'B1', name: 'Chicken Kebab Burger', description: '', price: '$2.50', image: null },
      { id: 'B2', name: 'Chicken Kebab Burger Set', description: '(Beef Burger + French Fries + Coke)', price: '$5.50', image: null },
      { id: 'B3', name: 'Beef Kebab Burger', description: '', price: '$5.50', image: null },
      { id: 'B4', name: 'Beef Kebab Burger Set', description: '(Double Beef Burger + French Fries + Coke)', price: '$7.50', image: null }
    ]
  },
  {
    id: 4,
    title: 'Specials',
    items: [
      { id: 'S1', name: 'Chicken Steak 250g', description: '(Served with rice and bean salad)', price: '$4.75', image: null },
      { id: 'S2', name: 'Beef Steak 180g', description: '(Served with rice and bean salad)', price: '$5.75', image: null },
      { id: 'S4', name: 'Hotdog', description: '', price: '$3.00', image: null },
      { id: 'S5', name: 'Hotdog Set', description: '(Hotdog + French Fries + Coke)', price: '$5.00', image: null },
      { id: 'S6', name: 'Apsara Special', description: '(Croissant + Beef Kebab Mix)', price: '$4.00', image: null },
      { id: 'S7', name: 'Piyaz with Tahini', description: '(Bean salad)', price: '$2.50', image: null }
    ]
  },
  {
    id: 5,
    title: 'Drinks',
    items: [
      { id: 'D1', name: 'Water', description: '', price: '$0.50', image: null },
      { id: 'D2', name: 'Ayran', description: '(Made by yoghurt)', price: '$1.25', image: null },
      { id: 'D3', name: 'Soft Drink', description: '(Coke, Coke Light, Coke Zero, Fanta, Sprite, Soda Water)', price: '$1.75', image: null }
    ]
  },
  {
    id: 6,
    title: 'PROMO',
    items: [
      { id: 'P1', name: '5 Single Chicken Kebabs + 1 FREE', description: '', price: '$12.50', image: null },
      { id: 'P2', name: '5 Single Beef Kebabs + 1 FREE', description: '', price: '$20.00', image: null }
    ]
  }
];
// Replace these with your restaurant's Telegram username and WhatsApp number
const TELEGRAM_USERNAME = 'apsarafusion';
const WHATSAPP_NUMBER = '93660401';

const RestaurantMenu: React.FC = () => {
  const encodeMessage = (itemName: string) =>
    encodeURIComponent(
      `Hello Apsara Fusion! I’m interested in ordering this menu item: "${itemName}". Could you please help me with this?`
    );

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: 'var(--primary)', color: 'var(--highlight)', minHeight: '100vh' }}
    >
      <div className="container">
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: 'var(--highlight)', fontSize: '3rem' }}
        >
          Restaurant Menu
        </h1>

        {menuData.map((category) => (
          <div key={category.id} className="mb-5">
            <h3
              className="mb-4 fw-bold"
              style={{
                color: 'var(--secondary)',
                borderBottom: '2px solid var(--secondary)',
                paddingBottom: '5px'
              }}
            >
              {category.title}
            </h3>

            <div className="row">
              {category.items.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 px-4">
                  <div
                    className="card h-100 shadow-sm"
                    style={{
                      borderColor: 'var(--highlight)',
                      backgroundColor: 'var(--foreground)'
                    }}
                  >
                    <img
                      src={item.image || 'images/images.png'}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: '200px', objectFit: 'cover' }}
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

                      {/* Telegram & WhatsApp buttons */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
