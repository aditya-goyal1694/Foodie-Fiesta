import { UtensilsCrossed } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Foodie Fiesta</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#menu" className="hover:text-orange-200">Menu</a></li>
              <li><a href="#about" className="hover:text-orange-200">About</a></li>
              <li><a href="#contact" className="hover:text-orange-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}