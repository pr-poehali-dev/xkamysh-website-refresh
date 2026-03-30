interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onNavigate('home')}
            className="font-oswald font-bold text-2xl tracking-widest uppercase gradient-text hover:opacity-80 transition-opacity"
          >
            xKmaysh
          </button>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'media', label: 'Медиа' },
              { id: 'schedule', label: 'Расписание' },
              { id: 'merch', label: 'Мерч' },
              { id: 'mediakit', label: 'Media Kit' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="font-golos text-sm text-white/40 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="font-golos text-xs text-white/20">
            © 2025 xKmaysh. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
