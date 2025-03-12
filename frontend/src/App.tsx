import Header from './components/Header';
import MenuSection from './components/MenuSection';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <MenuSection />
        <ChatBot />
      </main>
    </div>
  );
}

export default App;