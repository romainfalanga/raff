import React, { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { useRouter } from './hooks/useRouter';
import { Home } from './pages/Home/Home';
import { Alarme } from './pages/Alarme/Alarme';
import { VideoProtection } from './pages/VideoProtection/VideoProtection';
import { Telesurveillance } from './pages/Telesurveillance/Telesurveillance';
import { About } from './pages/About/About';

function App() {
  const { currentPath, navigate } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} onOpenModal={openModal} />;
      case '/alarme':
        return <Alarme onOpenModal={openModal} />;
      case '/videoprotection':
        return <VideoProtection onOpenModal={openModal} />;
      case '/telesurveillance':
        return <Telesurveillance onOpenModal={openModal} />;
      case '/about':
        return <About onOpenModal={openModal} />;
      default:
        return <Home onNavigate={navigate} onOpenModal={openModal} />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;