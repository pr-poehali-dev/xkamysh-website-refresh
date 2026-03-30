import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const partnerLinks = [
  {
    category: 'Периферия',
    items: [
      { name: 'Игровая мышь Logitech G Pro X', price: '8 990 ₽', discount: '-15%', img: '🖱️', href: '#', desc: 'Та самая мышь, с которой я катаю Valorant' },
      { name: 'Механическая клавиатура HyperX', price: '12 490 ₽', discount: '-20%', img: '⌨️', href: '#', desc: 'Красные свичи — мой выбор для длинных стримов' },
      { name: 'Микрофон Blue Yeti X', price: '18 900 ₽', discount: '-10%', img: '🎙️', href: '#', desc: 'Именно этот микрофон вы слышите на стримах' },
    ]
  },
  {
    category: 'Игры',
    items: [
      { name: 'Valorant Points 3650VP', price: '2 490 ₽', discount: '-5%', img: '🎮', href: '#', desc: 'Официальные VP для пополнения' },
      { name: 'Genshin Impact — Genesis Crystals', price: '1 990 ₽', discount: '-8%', img: '💎', href: '#', desc: 'Кристаллы для гача — удача на твоей стороне' },
      { name: 'Steam Gift Card 1000₽', price: '1 000 ₽', discount: '-3%', img: '🃏', href: '#', desc: 'Универсальный подарок для любого геймера' },
    ]
  },
  {
    category: 'Стриминг',
    items: [
      { name: 'Эльгато Stream Deck MK.2', price: '21 990 ₽', discount: '-12%', img: '🎛️', href: '#', desc: 'Управление стримом одним нажатием' },
      { name: 'Кольцевая LED лампа 26см', price: '3 490 ₽', discount: '-25%', img: '💡', href: '#', desc: 'Идеальный свет для VTuber-сетапа' },
      { name: 'Веб-камера Logitech StreamCam', price: '15 990 ₽', discount: '-18%', img: '📷', href: '#', desc: 'Если хочешь стримить — это лучший старт' },
    ]
  },
];

export default function MerchPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-up mb-16">
          <div className="tag mb-4">Мерч & Партнёры</div>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl text-white uppercase leading-tight">
            Мой<br />
            <span className="gradient-text">сетап</span>
          </h1>
          <p className="font-golos text-white/50 text-lg mt-4 max-w-xl">
            Железо и игры, которыми я пользуюсь сама. Партнёрские ссылки — покупай со скидкой!
          </p>
        </div>

        {/* Coming soon merch banner */}
        <div className="fade-up mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-[var(--brand-purple)]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-purple)]/10 via-transparent to-[var(--brand-fuchsia)]/10" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative glass p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
              <div className="text-8xl">👕</div>
              <div className="flex-1 text-center md:text-left">
                <div className="tag mb-3">Скоро</div>
                <h2 className="font-oswald font-bold text-4xl text-white uppercase">Официальный мерч</h2>
                <p className="font-golos text-white/50 mt-3 max-w-md">
                  Худи, футболки и аксессуары с логотипом xKmaysh — в разработке. 
                  Подпишись, чтобы узнать первым о запуске!
                </p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  <a href="https://t.me/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Уведомить меня
                  </a>
                  <button className="btn-outline opacity-60 cursor-not-allowed">
                    Магазин закрыт
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner links */}
        {partnerLinks.map((category, ci) => (
          <div key={category.category} className="mb-12">
            <div className={`fade-up fade-up-delay-${ci + 1} flex items-center gap-4 mb-6`}>
              <h2 className="font-oswald font-bold text-2xl text-white uppercase">{category.category}</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {category.items.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fade-up fade-up-delay-${i + 1} product-card group block`}
                >
                  {/* Image/emoji area */}
                  <div className="relative aspect-square bg-gradient-to-br from-[var(--brand-purple)]/10 to-[var(--brand-fuchsia)]/5 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{item.img}</span>
                    {/* Discount badge */}
                    <div className="absolute top-3 right-3 bg-[var(--brand-fuchsia)] text-white font-oswald font-bold text-sm px-3 py-1 rounded-full">
                      {item.discount}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-golos font-medium text-white text-sm leading-tight mb-2">{item.name}</h3>
                    <p className="font-golos text-white/40 text-xs mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-oswald font-bold text-xl gradient-text">{item.price}</span>
                      <div className="w-9 h-9 rounded-lg bg-[var(--brand-purple)]/10 border border-[var(--brand-purple)]/20 flex items-center justify-center group-hover:bg-[var(--brand-purple)] transition-colors">
                        <Icon name="ExternalLink" size={16} className="text-[var(--brand-purple)] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Disclaimer */}
        <div className="fade-up mt-8 p-4 rounded-xl border border-white/5 glass-light">
          <p className="font-golos text-xs text-white/30 text-center">
            * Партнёрские ссылки. При покупке через них я получаю небольшую комиссию — это помогает развивать канал. Цены могут отличаться.
          </p>
        </div>
      </div>
    </div>
  );
}
