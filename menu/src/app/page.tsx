import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const RestaurantMenu: React.FC = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Restaurant Menu</h1>
      {menuData.map((category) => (
        <div key={category.id} className="mb-5">
          <h3 className="mb-4">{category.title}</h3>
          <div className="row">
            {category.items.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image || 'images/images.png'}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                      {item.name} <span className="text-primary fw-bold">{item.price}</span>
                    </h5>
                    {item.description && <p className="card-text">{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
