import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'media', label: 'Медиа' },
  { id: 'schedule', label: 'Расписание' },
  { id: 'merch', label: 'Мерч' },
  { id: 'mediakit', label: 'Media Kit' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--paper)]/96 backdrop-blur-md border-b border-[var(--rule)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="font-oswald font-bold text-base tracking-[0.12em] uppercase text-[var(--ink)] hover:opacity-50 transition-opacity"
        >
          xKmaysh
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="offline-dot" />
            <span className="font-golos text-xs text-[var(--ink-30)] tracking-wider">офлайн</span>
          </div>
          <button
            onClick={() => window.open('https://twitch.tv/xkmaysh', '_blank')}
            className="btn-fill text-xs py-2.5 px-5"
          >
            Twitch
          </button>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--ink)] hover:opacity-50 transition-opacity"
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--paper)] border-t border-[var(--rule)] mobile-menu">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`text-left font-oswald font-medium text-lg uppercase tracking-wide transition-opacity ${
                  currentPage === item.id ? 'text-[var(--ink)]' : 'text-[var(--ink-60)] hover:text-[var(--ink)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[var(--rule)]">
              <button
                onClick={() => { window.open('https://twitch.tv/xkmaysh', '_blank'); setMenuOpen(false); }}
                className="btn-fill w-full justify-center"
              >
                Смотреть на Twitch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
