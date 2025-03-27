import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-full">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold font-serif">Foodie Fiesta</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#about" className="hover:text-orange-200 transition-colors font-medium">About</a></li>
              <li><a href="#contact" className="hover:text-orange-200 transition-colors font-medium">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}