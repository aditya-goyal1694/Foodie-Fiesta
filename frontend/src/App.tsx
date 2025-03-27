import React from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import ChatBot from './components/ChatBot';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <p className="text-2xl italic text-orange-800 font-serif">"Food is not just eating energy. It's an experience."</p>
          <p className="text-orange-600 mt-2">- Guy Fieri</p>
        </div>
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl text-orange-900 mb-4">🌟 Welcome to Foodie Fiesta! 🌟</h2>
            <p className="text-gray-700">Experience the convenience of our Chat-à-la-Carte feature. Simply open the chat in the bottom right corner to place your order, modify your order and track your order!</p>
          </div>
        </div>
      </div>
      <main>
        <MenuSection />
        
        <section id="about" className="py-16 bg-white/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-orange-900 text-center mb-8">About Foodie Fiesta</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-4">
                Welcome to Foodie Fiesta, where culinary excellence meets convenience. Our restaurant brings together the finest flavors from Italian, North Indian, and South Indian cuisines, along with delightful street bites that capture the essence of authentic street food culture.
              </p>
              <p className="mb-4">
                What sets us apart is our innovative Chat-à-la-Carte system, a revolutionary way to order and interact with our menu. This AI-powered chat assistant helps you discover dishes, place orders, and even provides personalized recommendations based on your preferences.
              </p>
              <p>
                At Foodie Fiesta, we believe that great food should be accessible to everyone. Our diverse menu caters to all palates, from those craving authentic Indian delicacies to those seeking international flavors. Every dish is crafted with passion, using the finest ingredients to ensure an unforgettable dining experience.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-orange-900 text-center mb-8">Contact Us</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-orange-800 mb-2">Aditya Goyal</h3>
                <p className="text-gray-600">Full Stack Developer & Creator of Foodie Fiesta</p>
              </div>
              
              <div className="flex flex-col gap-4 items-center justify-center">
                <a href="mailto:adityamr.1694@gmail.com" 
                   className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  adityamr.1694@gmail.com
                </a>
                
                <a href="https://github.com/aditya-goyal1694" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                  <Github className="w-5 h-5" />
                  github.com/aditya-goyal1694
                </a>
                
                <a href="https://www.linkedin.com/in/aditya-goyal18/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  linkedin.com/in/aditya-goyal18
                </a>
              </div>
            </div>
          </div>
        </section>

        <ChatBot />
      </main>
    </div>
  );
}

export default App;