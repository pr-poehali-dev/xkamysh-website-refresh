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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[var(--border-clr)] shadow-sm'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="font-oswald font-bold text-xl tracking-wider uppercase text-[var(--charcoal)] hover:opacity-70 transition-opacity"
        >
          xKmaysh
        </button>

        <nav className="hidden md:flex items-center gap-7">
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

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#FEF3C7] rounded-full px-3 py-1.5">
            <span className="offline-dot" />
            <span className="font-golos text-xs font-medium text-[#92400E]">Офлайн</span>
          </div>
          <button
            onClick={() => window.open('https://twitch.tv/xkmaysh', '_blank')}
            className="btn-dark text-sm py-2.5 px-5"
          >
            Смотреть стримы
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 rounded-xl bg-[#F0F0EE] flex items-center justify-center text-[var(--charcoal)] hover:bg-[#E5E5E3] transition-colors"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={18} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border-clr)] mobile-menu">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`text-left px-3 py-2.5 rounded-xl font-golos font-medium text-sm transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#F0F0EE] text-[var(--charcoal)]'
                    : 'text-[#555] hover:bg-[#F5F5F3] hover:text-[var(--charcoal)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[var(--border-clr)] mt-2">
              <button
                onClick={() => { window.open('https://twitch.tv/xkmaysh', '_blank'); setMenuOpen(false); }}
                className="btn-dark w-full justify-center text-sm py-3"
              >
                Смотреть стримы
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
