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
    <footer style={{ background: 'white', borderTop: '1px solid var(--rule)' }} className="px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <button
          onClick={() => onNavigate('home')}
          className="font-oswald font-bold text-sm tracking-[0.14em] uppercase text-[var(--ink)] hover:opacity-40 transition-opacity"
        >
          xKmaysh
        </button>

        <div className="flex flex-wrap gap-7 justify-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="font-golos text-xs text-[var(--ink-30)] hover:text-[var(--ink)] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="label-xs">© 2025 xKmaysh</p>
      </div>
    </footer>
  );
}
