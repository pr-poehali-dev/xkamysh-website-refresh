import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const partners = [
  {
    category: 'Периферия',
    items: [
      { name: 'Игровая мышь Logitech G Pro X', price: '8 990 ₽', off: '-15%', emoji: '🖱️', desc: 'Та самая мышь, с которой я катаю Valorant', href: '#' },
      { name: 'Механическая клавиатура HyperX', price: '12 490 ₽', off: '-20%', emoji: '⌨️', desc: 'Красные свичи для длинных стримов', href: '#' },
      { name: 'Микрофон Blue Yeti X', price: '18 900 ₽', off: '-10%', emoji: '🎙️', desc: 'Именно этот слышите на стримах', href: '#' },
    ]
  },
  {
    category: 'Игры',
    items: [
      { name: 'Valorant Points 3650VP', price: '2 490 ₽', off: '-5%', emoji: '🎮', desc: 'Официальные VP для пополнения', href: '#' },
      { name: 'Genshin Impact Crystal', price: '1 990 ₽', off: '-8%', emoji: '💎', desc: 'Кристаллы для гача — удача рядом', href: '#' },
      { name: 'Steam Gift Card 1000₽', price: '1 000 ₽', off: '-3%', emoji: '🃏', desc: 'Универсальный подарок геймеру', href: '#' },
    ]
  },
  {
    category: 'Стриминг',
    items: [
      { name: 'Elgato Stream Deck MK.2', price: '21 990 ₽', off: '-12%', emoji: '🎛️', desc: 'Управление стримом одним нажатием', href: '#' },
      { name: 'Кольцевая LED лампа 26см', price: '3 490 ₽', off: '-25%', emoji: '💡', desc: 'Идеальный свет для VTuber-сетапа', href: '#' },
      { name: 'Logitech StreamCam', price: '15 990 ₽', off: '-18%', emoji: '📷', desc: 'Лучший старт для начинающего стримера', href: '#' },
    ]
  },
];

export default function MerchPage() {
  useScrollReveal();

  return (
    <div style={{ background: 'var(--soft-bg)' }} className="min-h-screen pt-16">
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-clr)' }} className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Мерч & Партнёры</span>
          <h1 className="font-oswald font-bold uppercase mt-3 leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Мой<br /><span style={{ color: 'var(--amber)' }}>сетап</span>
          </h1>
          <p className="font-golos text-[var(--muted-text)] text-lg mt-4 max-w-xl">
            Железо и игры, которыми пользуюсь сама. Партнёрские ссылки — покупай со скидкой!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Merch coming soon */}
        <div className="fade-up card-white overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="p-10 flex flex-col justify-center space-y-5">
              <span className="tag-sm self-start">Скоро</span>
              <h2 className="font-oswald font-bold uppercase text-[var(--charcoal)] leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Официальный мерч
              </h2>
              <p className="font-golos text-[var(--muted-text)] leading-relaxed">
                Худи, футболки и аксессуары с логотипом xKmaysh — в разработке. 
                Подпишись, чтобы узнать первым!
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://t.me/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-dark">
                  Уведомить меня
                </a>
              </div>
            </div>
            {/* Right decorative */}
            <div className="flex items-center justify-center p-12" style={{ background: '#FEF3C7' }}>
              <div className="text-8xl float-anim">👕</div>
            </div>
          </div>
        </div>

        {/* Partner links */}
        {partners.map((cat, ci) => (
          <div key={cat.category}>
            <div className={`fade-up fade-up-delay-${ci + 1} flex items-center gap-4 mb-5`}>
              <h2 className="font-oswald font-bold text-2xl text-[var(--charcoal)] uppercase">{cat.category}</h2>
              <div className="flex-1 h-px" style={{ background: 'var(--border-clr)' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cat.items.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fade-up fade-up-delay-${i + 1} product-card group block`}
                >
                  <div className="aspect-square flex items-center justify-center relative" style={{ background: '#FAFAF8' }}>
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                    <div className="absolute top-3 right-3 font-oswald font-bold text-sm text-white px-3 py-1 rounded-full"
                      style={{ background: 'var(--amber)' }}>
                      {item.off}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-golos font-semibold text-[var(--charcoal)] text-sm leading-tight mb-1">{item.name}</h3>
                    <p className="font-golos text-[var(--muted-text)] text-xs mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-oswald font-bold text-xl text-[var(--charcoal)]">{item.price}</span>
                      <div className="w-9 h-9 rounded-xl bg-[#F0F0EE] flex items-center justify-center group-hover:bg-[var(--charcoal)] transition-colors">
                        <Icon name="ExternalLink" size={15} className="group-hover:text-white transition-colors" style={{ color: 'var(--charcoal)' }} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="fade-up text-center">
          <p className="font-golos text-xs text-[var(--muted-text)]">
            * Партнёрские ссылки. При покупке через них я получаю небольшую комиссию — это помогает развивать канал.
          </p>
        </div>
      </div>
    </div>
  );
}
