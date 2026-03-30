import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const partners = [
  {
    cat: 'Периферия',
    items: [
      { name: 'Logitech G Pro X', sub: 'Игровая мышь', price: '8 990 ₽', off: '−15%', href: '#' },
      { name: 'HyperX Alloy Origins', sub: 'Механическая клавиатура', price: '12 490 ₽', off: '−20%', href: '#' },
      { name: 'Blue Yeti X', sub: 'Микрофон', price: '18 900 ₽', off: '−10%', href: '#' },
    ],
  },
  {
    cat: 'Игры',
    items: [
      { name: 'Valorant Points 3650VP', sub: 'Официальное пополнение', price: '2 490 ₽', off: '−5%', href: '#' },
      { name: 'Genshin Genesis Crystals', sub: 'Внутриигровая валюта', price: '1 990 ₽', off: '−8%', href: '#' },
      { name: 'Steam Gift Card 1 000 ₽', sub: 'Подарочная карта', price: '1 000 ₽', off: '−3%', href: '#' },
    ],
  },
  {
    cat: 'Стриминг',
    items: [
      { name: 'Elgato Stream Deck MK.2', sub: 'Контроллер стриминга', price: '21 990 ₽', off: '−12%', href: '#' },
      { name: 'Кольцевая лампа 26 см', sub: 'Освещение', price: '3 490 ₽', off: '−25%', href: '#' },
      { name: 'Logitech StreamCam', sub: 'Веб-камера', price: '15 990 ₽', off: '−18%', href: '#' },
    ],
  },
];

export default function MerchPage() {
  useScrollReveal();

  return (
    <div style={{ background: 'var(--paper)' }} className="min-h-screen pt-14">
      <div style={{ background: 'white', borderBottom: '1px solid var(--rule)' }} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <span className="label-xs block mb-5">Мерч & Партнёры</span>
          <h1 className="font-oswald font-bold uppercase leading-none text-[var(--ink)]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            Мой<br />сетап
          </h1>
          <p className="font-golos text-[var(--ink-60)] text-base mt-5 max-w-lg">
            Железо и игры, которыми пользуюсь сама. Партнёрские ссылки — со скидкой.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Merch coming soon */}
        <div className="fade-up border border-[var(--rule)] bg-white overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center gap-5">
              <span className="label-xs">Скоро</span>
              <h2 className="font-oswald font-bold uppercase leading-tight text-[var(--ink)]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Официальный мерч
              </h2>
              <p className="font-golos text-[var(--ink-60)] text-sm leading-relaxed max-w-sm">
                Худи, футболки и аксессуары с лого xKmaysh — в разработке. Подпишись, чтобы узнать первым.
              </p>
              <a href="https://t.me/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-fill self-start mt-2">
                Уведомить меня
              </a>
            </div>
            <div className="flex items-center justify-center p-16" style={{ background: 'var(--paper-2)' }}>
              <span className="text-7xl opacity-40 float-anim select-none">👕</span>
            </div>
          </div>
        </div>

        {/* Partner tables */}
        {partners.map((cat, ci) => (
          <div key={cat.cat} className={`fade-up fade-up-delay-${ci + 1}`}>
            <div className="flex items-center gap-4 mb-0">
              <span className="label-xs">{cat.cat}</span>
              <div className="flex-1 h-px bg-[var(--rule)]" />
            </div>
            <div className="border border-[var(--rule)] mt-4">
              {cat.items.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-6 py-5 group hover:bg-[var(--paper-2)] transition-colors ${i < cat.items.length - 1 ? 'border-b border-[var(--rule)]' : ''}`}
                >
                  <div>
                    <div className="font-golos font-medium text-[var(--ink)] text-sm">{item.name}</div>
                    <div className="label-xs mt-1">{item.sub}</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-oswald font-medium text-xs text-[var(--amber)] tracking-wide">{item.off}</span>
                    <span className="font-oswald font-bold text-lg text-[var(--ink)]">{item.price}</span>
                    <Icon name="ArrowUpRight" size={16} className="text-[var(--ink-30)] group-hover:text-[var(--ink)] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <p className="fade-up label-xs pb-4">
          * Партнёрские ссылки. Цены могут отличаться.
        </p>
      </div>
    </div>
  );
}
