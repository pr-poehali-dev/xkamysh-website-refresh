import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '109K', label: 'Фолловеров Twitch', icon: 'Users', color: '#9146FF' },
  { value: '1M+', label: 'Ежемесячный охват', icon: 'TrendingUp', color: '#e879f9' },
  { value: '1K+', label: 'Средний онлайн', icon: 'Tv', color: '#f472b6' },
  { value: '24', label: 'Часов в неделю', icon: 'Clock', color: '#a855f7' },
  { value: '4.2%', label: 'Engagement Rate', icon: 'BarChart2', color: '#c084fc' },
  { value: '85%', label: 'Возврат аудитории', icon: 'RefreshCw', color: '#e879f9' },
];

const demographics = [
  { label: 'Россия', value: 68, color: '#a855f7' },
  { label: 'Украина', value: 12, color: '#e879f9' },
  { label: 'Беларусь', value: 8, color: '#f472b6' },
  { label: 'Другие СНГ', value: 7, color: '#c084fc' },
  { label: 'Другие', value: 5, color: '#7c3aed' },
];

const ageGroups = [
  { label: '13–17', value: 18 },
  { label: '18–24', value: 42 },
  { label: '25–34', value: 28 },
  { label: '35+', value: 12 },
];

const integrationTypes = [
  {
    name: 'Упоминание в стриме',
    duration: '3–5 мин',
    price: 'от 30 000 ₽',
    desc: 'Органичное упоминание вашего продукта в прямом эфире с демонстрацией',
    reach: '~1 000 зрителей',
    tag: 'Популярно',
  },
  {
    name: 'Отдельный рекламный блок',
    duration: '5–10 мин',
    price: 'от 60 000 ₽',
    desc: 'Выделенный блок с подробным обзором и демонстрацией продукта',
    reach: '~1 000 зрителей',
    tag: 'Лучший ROI',
  },
  {
    name: 'Интеграция в TikTok / Reels',
    duration: '15–60 сек',
    price: 'от 40 000 ₽',
    desc: 'Вирусный короткий ролик с вашим продуктом для TikTok, Reels или Shorts',
    reach: '500K – 3M просмотров',
    tag: 'Вирусно',
  },
  {
    name: 'Пакет "Полное сопровождение"',
    duration: 'Месяц',
    price: 'от 200 000 ₽',
    desc: 'Стрим-интеграция + 3 клипа в TikTok + упоминания в Telegram + баннер',
    reach: '3M+ совокупный охват',
    tag: 'Топ',
  },
];

const cases = [
  { company: 'GameShop', result: '+340% переходов в первый день', type: 'Интернет-магазин игр', emoji: '🎮' },
  { company: 'AnimeMerch', result: '2 000 заказов за 48 часов', type: 'Аниме-мерч', emoji: '🎌' },
  { company: 'VPN-сервис', result: '870 новых подписок за стрим', type: 'Кибербезопасность', emoji: '🔐' },
  { company: 'Energy Drink', result: '1.2M охват в TikTok', type: 'Напитки', emoji: '⚡' },
];

export default function MediaKitPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-up mb-16">
          <div className="tag mb-4">Media Kit 2025</div>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl text-white uppercase leading-tight">
            Для<br />
            <span className="gradient-text">рекламодателей</span>
          </h1>
          <p className="font-golos text-white/50 text-lg mt-4 max-w-xl">
            xKmaysh — виртуальная стримерша с живой аудиторией и высоким engagement. 
            Ваш бренд — в нужных руках.
          </p>
        </div>

        {/* Stats grid */}
        <section className="mb-20">
          <h2 className="fade-up font-oswald font-bold text-3xl text-white uppercase mb-8">Цифры</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`fade-up fade-up-delay-${i + 1} glass-light rounded-2xl p-6 text-center card-hover`}>
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}30` }}>
                  <Icon name={stat.icon as "Users"} fallback="Circle" size={22} style={{ color: stat.color }} />
                </div>
                <div className="font-oswald font-bold text-4xl" style={{ color: stat.color }}>{stat.value}</div>
                <div className="font-golos text-sm text-white/40 mt-2 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Demographics */}
        <section className="mb-20 grid md:grid-cols-2 gap-8">
          {/* Geography */}
          <div className="fade-up">
            <h2 className="font-oswald font-bold text-3xl text-white uppercase mb-6">География</h2>
            <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
              {demographics.map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-golos text-white/70 text-sm">{d.label}</span>
                    <span className="font-oswald font-bold text-sm" style={{ color: d.color }}>{d.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${d.value}%`, background: d.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age */}
          <div className="fade-up fade-up-delay-2">
            <h2 className="font-oswald font-bold text-3xl text-white uppercase mb-6">Возраст</h2>
            <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
              {ageGroups.map((g) => (
                <div key={g.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-golos text-white/70 text-sm">{g.label} лет</span>
                    <span className="font-oswald font-bold text-sm gradient-text">{g.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${g.value}%`, background: 'linear-gradient(90deg, #a855f7, #e879f9)' }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-white/5 flex gap-6">
                <div className="text-center">
                  <div className="font-oswald font-bold text-2xl gradient-text">68%</div>
                  <div className="font-golos text-xs text-white/40 mt-1">Женщины</div>
                </div>
                <div className="text-center">
                  <div className="font-oswald font-bold text-2xl text-white/60">32%</div>
                  <div className="font-golos text-xs text-white/40 mt-1">Мужчины</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price list */}
        <section className="mb-20">
          <h2 className="fade-up font-oswald font-bold text-3xl text-white uppercase mb-8">Прайс-лист интеграций</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {integrationTypes.map((item, i) => (
              <div key={item.name} className={`fade-up fade-up-delay-${i + 1} gradient-border rounded-2xl p-6 card-hover relative overflow-hidden`}>
                {item.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-fuchsia)] text-white font-oswald font-bold text-xs px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                )}
                <div className="space-y-3">
                  <h3 className="font-oswald font-bold text-xl text-white uppercase pr-16">{item.name}</h3>
                  <p className="font-golos text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="flex items-center gap-2 text-white/40">
                      <Icon name="Clock" size={14} />
                      <span className="font-golos text-xs">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <Icon name="Eye" size={14} />
                      <span className="font-golos text-xs">{item.reach}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="font-oswald font-bold text-2xl gradient-text">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="fade-up font-golos text-xs text-white/30 mt-4">* Итоговая стоимость зависит от сложности интеграции. Возможен бартер.</p>
        </section>

        {/* Cases */}
        <section className="mb-20">
          <h2 className="fade-up font-oswald font-bold text-3xl text-white uppercase mb-8">Успешные кейсы</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cases.map((c, i) => (
              <div key={c.company} className={`fade-up fade-up-delay-${i + 1} glass-light rounded-2xl p-5 text-center card-hover border border-white/5`}>
                <div className="text-4xl mb-3">{c.emoji}</div>
                <div className="font-golos text-xs text-white/30 uppercase tracking-wide mb-2">{c.type}</div>
                <div className="font-oswald font-bold text-lg text-white mb-2">{c.company}</div>
                <div className="font-golos text-sm text-[var(--brand-fuchsia)] font-medium">{c.result}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="fade-up">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-purple)]/15 to-[var(--brand-fuchsia)]/10" />
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="relative glass p-10 md:p-14 text-center space-y-6 border border-[var(--brand-purple)]/20">
              <div className="tag mx-auto">Контакты</div>
              <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white uppercase">Хочешь интеграцию?</h2>
              <p className="font-golos text-white/50 text-lg max-w-lg mx-auto">
                Напишите нам — ответим в течение 24 часов и обсудим условия сотрудничества
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:manager@xkmaysh.ru"
                  className="btn-primary text-base"
                >
                  <Icon name="Mail" size={18} />
                  manager@xkmaysh.ru
                </a>
                <a
                  href="https://t.me/xkmaysh_manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-base"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram менеджер
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
