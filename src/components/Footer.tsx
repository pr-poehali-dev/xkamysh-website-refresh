interface FooterProps {
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'media', label: 'Медиа' },
  { id: 'schedule', label: 'Расписание' },
  { id: 'merch', label: 'Мерч' },
  { id: 'mediakit', label: 'Media Kit' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer style={{ background: 'white', borderTop: '1px solid var(--border-clr)' }} className="py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <button
          onClick={() => onNavigate('home')}
          className="font-oswald font-bold text-xl tracking-wider uppercase text-[var(--charcoal)] hover:opacity-60 transition-opacity"
        >
          xKmaysh
        </button>

        <div className="flex flex-wrap gap-5 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="font-golos text-sm text-[var(--muted-text)] hover:text-[var(--charcoal)] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="font-golos text-xs text-[var(--muted-text)]">
          © 2025 xKmaysh. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
