import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '109K', label: 'Фолловеров Twitch', icon: 'Users', bg: '#F5F3FF', accent: '#7C3AED' },
  { value: '1M+', label: 'Ежемесячный охват', icon: 'TrendingUp', bg: '#FEF9C3', accent: '#CA8A04' },
  { value: '1K+', label: 'Средний онлайн', icon: 'Tv', bg: '#FCE7F3', accent: '#DB2777' },
  { value: '24ч', label: 'В неделю', icon: 'Clock', bg: '#ECFDF5', accent: '#059669' },
  { value: '4.2%', label: 'Engagement Rate', icon: 'BarChart2', bg: '#EFF6FF', accent: '#2563EB' },
  { value: '85%', label: 'Возврат аудитории', icon: 'RefreshCw', bg: '#FFF7ED', accent: '#EA580C' },
];

const geo = [
  { label: 'Россия', value: 68 },
  { label: 'Украина', value: 12 },
  { label: 'Беларусь', value: 8 },
  { label: 'Другие СНГ', value: 7 },
  { label: 'Другие', value: 5 },
];

const ages = [
  { label: '13–17', value: 18 },
  { label: '18–24', value: 42 },
  { label: '25–34', value: 28 },
  { label: '35+', value: 12 },
];

const prices = [
  { name: 'Упоминание в стриме', duration: '3–5 мин', price: 'от 30 000 ₽', reach: '~1K зрителей', badge: 'Популярно', badgeBg: '#A3E635', badgeColor: '#111' },
  { name: 'Рекламный блок', duration: '5–10 мин', price: 'от 60 000 ₽', reach: '~1K зрителей', badge: 'Лучший ROI', badgeBg: '#F59E0B', badgeColor: '#fff' },
  { name: 'TikTok / Reels', duration: '15–60 сек', price: 'от 40 000 ₽', reach: '500K–3M просмотров', badge: 'Вирусно', badgeBg: '#111', badgeColor: '#fff' },
  { name: 'Полное сопровождение', duration: '1 месяц', price: 'от 200 000 ₽', reach: '3M+ совокупно', badge: 'Топ', badgeBg: '#EF4444', badgeColor: '#fff' },
];

const cases = [
  { company: 'GameShop', result: '+340% переходов', emoji: '🎮', type: 'Магазин игр' },
  { company: 'AnimeMerch', result: '2 000 заказов за 48ч', emoji: '🎌', type: 'Аниме-мерч' },
  { company: 'VPN сервис', result: '870 подписок', emoji: '🔐', type: 'Кибербезопасность' },
  { company: 'Energy Drink', result: '1.2M охват', emoji: '⚡', type: 'Напитки' },
];

export default function MediaKitPage() {
  useScrollReveal();

  return (
    <div style={{ background: 'var(--soft-bg)' }} className="min-h-screen pt-16">
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-clr)' }} className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Media Kit 2025</span>
          <h1 className="font-oswald font-bold uppercase mt-3 leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Для<br /><span style={{ color: 'var(--amber)' }}>рекламодателей</span>
          </h1>
          <p className="font-golos text-[var(--muted-text)] text-lg mt-4 max-w-xl">
            xKmaysh — виртуальная стримерша с живой аудиторией и высоким вовлечением. Ваш бренд — в нужных руках.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Stats */}
        <section>
          <h2 className="fade-up font-oswald font-bold uppercase text-[var(--charcoal)] text-3xl mb-6">Цифры</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`fade-up fade-up-delay-${i + 1} card-white p-6`}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: s.bg }}>
                  <Icon name={s.icon as "Users"} fallback="Circle" size={20} style={{ color: s.accent }} />
                </div>
                <div className="font-oswald font-bold text-4xl text-[var(--charcoal)]">{s.value}</div>
                <div className="font-golos text-sm text-[var(--muted-text)] mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Demographics */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="fade-up">
            <h2 className="font-oswald font-bold uppercase text-[var(--charcoal)] text-2xl mb-5">География</h2>
            <div className="card-white p-6 space-y-4">
              {geo.map((g) => (
                <div key={g.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-golos text-sm text-[var(--charcoal)]">{g.label}</span>
                    <span className="font-oswald font-bold text-sm text-[var(--amber)]">{g.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill amber" style={{ width: `${g.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up fade-up-delay-2">
            <h2 className="font-oswald font-bold uppercase text-[var(--charcoal)] text-2xl mb-5">Возраст</h2>
            <div className="card-white p-6 space-y-4">
              {ages.map((a) => (
                <div key={a.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-golos text-sm text-[var(--charcoal)]">{a.label} лет</span>
                    <span className="font-oswald font-bold text-sm text-[var(--charcoal)]">{a.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${a.value}%` }} />
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-[var(--border-clr)] flex gap-8">
                <div>
                  <div className="font-oswald font-bold text-2xl text-[var(--amber)]">68%</div>
                  <div className="font-golos text-xs text-[var(--muted-text)] mt-0.5">Женщины</div>
                </div>
                <div>
                  <div className="font-oswald font-bold text-2xl text-[var(--charcoal)]">32%</div>
                  <div className="font-golos text-xs text-[var(--muted-text)] mt-0.5">Мужчины</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section>
          <h2 className="fade-up font-oswald font-bold uppercase text-[var(--charcoal)] text-3xl mb-6">Прайс-лист интеграций</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {prices.map((p, i) => (
              <div key={p.name} className={`fade-up fade-up-delay-${i + 1} card-white p-6 relative overflow-hidden`}>
                <div className="absolute top-4 right-4">
                  <span className="font-oswald font-bold text-xs px-3 py-1 rounded-full" style={{ background: p.badgeBg, color: p.badgeColor }}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-oswald font-bold text-xl text-[var(--charcoal)] uppercase pr-20">{p.name}</h3>
                <div className="flex flex-wrap gap-4 mt-3 mb-4">
                  <div className="flex items-center gap-1.5 text-[var(--muted-text)]">
                    <Icon name="Clock" size={14} />
                    <span className="font-golos text-sm">{p.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--muted-text)]">
                    <Icon name="Eye" size={14} />
                    <span className="font-golos text-sm">{p.reach}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-[var(--border-clr)]">
                  <span className="font-oswald font-bold text-2xl text-[var(--charcoal)]">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="fade-up font-golos text-xs text-[var(--muted-text)] mt-4">
            * Итоговая стоимость зависит от сложности. Возможен бартер.
          </p>
        </section>

        {/* Cases */}
        <section>
          <h2 className="fade-up font-oswald font-bold uppercase text-[var(--charcoal)] text-3xl mb-6">Успешные кейсы</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cases.map((c, i) => (
              <div key={c.company} className={`fade-up fade-up-delay-${i + 1} card-white p-5 text-center`}>
                <div className="text-4xl mb-3">{c.emoji}</div>
                <div className="font-golos text-xs text-[var(--muted-text)] uppercase tracking-wider mb-1">{c.type}</div>
                <div className="font-oswald font-bold text-lg text-[var(--charcoal)] mb-1">{c.company}</div>
                <div className="font-golos text-sm font-semibold" style={{ color: 'var(--amber)' }}>{c.result}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="fade-up">
          <div className="card-dark p-12 text-center space-y-5">
            <h2 className="font-oswald font-bold uppercase text-white text-4xl md:text-5xl">
              Хочешь интеграцию?
            </h2>
            <p className="font-golos text-white/50 text-lg max-w-md mx-auto">
              Напишите — ответим в течение 24 часов и обсудим условия
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:manager@xkmaysh.ru" className="btn-amber">
                <Icon name="Mail" size={18} />
                manager@xkmaysh.ru
              </a>
              <a href="https://t.me/xkmaysh_manager" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-oswald font-medium text-sm uppercase tracking-wide px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram менеджер
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
