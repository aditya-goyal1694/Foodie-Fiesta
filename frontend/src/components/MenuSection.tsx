import React from 'react';
import { menuItems } from '../data/menu';

export default function MenuSection() {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-orange-900 font-serif">Our Menu</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our carefully curated selection of dishes, crafted with love and tradition.
        Use our Chat-à-la-Carte feature to place your order or get recommendations!
      </p>
      
      {categories.map(category => (
        <div key={category} className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-orange-200 w-24"></div>
            <h3 className="text-2xl font-serif text-orange-800 px-6">{category}</h3>
            <div className="h-px bg-orange-200 w-24"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <div key={item.id} 
                     className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-orange-900 group-hover:text-orange-600 transition-colors">{item.name}</h4>
                      <span className="text-orange-600 font-bold">₹{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}