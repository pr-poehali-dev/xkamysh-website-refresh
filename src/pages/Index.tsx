import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import MediaPage from '@/pages/MediaPage';
import SchedulePage from '@/pages/SchedulePage';
import MerchPage from '@/pages/MerchPage';
import MediaKitPage from '@/pages/MediaKitPage';

type Page = 'home' | 'media' | 'schedule' | 'merch' | 'mediakit';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = ({
      home: 'xKmaysh — Virtual Streamer',
      media: 'Медиа — xKmaysh',
      schedule: 'Расписание — xKmaysh',
      merch: 'Мерч — xKmaysh',
      mediakit: 'Media Kit — xKmaysh',
    } as Record<Page, string>)[currentPage] || 'xKmaysh';
  }, [currentPage]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--brand-dark)' }}>
      <Header currentPage={currentPage} onNavigate={navigate} />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'media' && <MediaPage />}
        {currentPage === 'schedule' && <SchedulePage />}
        {currentPage === 'merch' && <MerchPage />}
        {currentPage === 'mediakit' && <MediaKitPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
