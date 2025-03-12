import { menuItems } from '../data/menu';

export default function MenuSection() {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
      
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-orange-600">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <span className="text-orange-600 font-semibold">₹{item.price}</span>
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