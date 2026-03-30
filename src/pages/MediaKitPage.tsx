import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '109K', label: 'Фолловеров Twitch' },
  { value: '1M+',  label: 'Охват / месяц' },
  { value: '1K+',  label: 'Средний онлайн' },
  { value: '24ч',  label: 'Стримов в неделю' },
  { value: '4.2%', label: 'Engagement Rate' },
  { value: '85%',  label: 'Возврат аудитории' },
];

const geo = [
  { label: 'Россия',     value: 68 },
  { label: 'Украина',    value: 12 },
  { label: 'Беларусь',   value: 8  },
  { label: 'Другие СНГ', value: 7  },
  { label: 'Другие',     value: 5  },
];

const ages = [
  { label: '13–17', value: 18 },
  { label: '18–24', value: 42 },
  { label: '25–34', value: 28 },
  { label: '35+',   value: 12 },
];

const prices = [
  { name: 'Упоминание в стриме',   duration: '3–5 мин',  price: 'от 30 000 ₽', reach: '~1K зрителей' },
  { name: 'Рекламный блок',         duration: '5–10 мин', price: 'от 60 000 ₽', reach: '~1K зрителей' },
  { name: 'TikTok / Reels',         duration: '15–60 сек',price: 'от 40 000 ₽', reach: '500K–3M просмотров' },
  { name: 'Полное сопровождение',   duration: '1 месяц',  price: 'от 200 000 ₽',reach: '3M+ совокупно' },
];

const cases = [
  { company: 'GameShop',    result: '+340% переходов в первый день', type: 'Интернет-магазин' },
  { company: 'AnimeMerch',  result: '2 000 заказов за 48 часов',     type: 'Аниме-мерч' },
  { company: 'VPN сервис',  result: '870 новых подписок',            type: 'SaaS' },
  { company: 'Energy Drink',result: '1.2M охват в TikTok',           type: 'FMCG' },
];

export default function MediaKitPage() {
  useScrollReveal();

  return (
    <div style={{ background: 'var(--paper)' }} className="min-h-screen pt-14">
      <div style={{ background: 'white', borderBottom: '1px solid var(--rule)' }} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <span className="label-xs block mb-5">Media Kit 2025</span>
          <h1 className="font-oswald font-bold uppercase leading-none text-[var(--ink)]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            Для<br />рекламодателей
          </h1>
          <p className="font-golos text-[var(--ink-60)] text-base mt-5 max-w-lg">
            xKmaysh — виртуальная стримерша с живой аудиторией и высоким вовлечением.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Stats */}
        <section className="fade-up">
          <span className="label-xs block mb-6">Цифры</span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--rule)]">
            {stats.map(s => (
              <div key={s.label} className="bg-white p-8">
                <div className="stat-num">{s.value}</div>
                <div className="label-xs mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Demographics */}
        <section className="grid md:grid-cols-2 gap-16">
          <div className="fade-up">
            <span className="label-xs block mb-6">География аудитории</span>
            <div className="space-y-5">
              {geo.map(g => (
                <div key={g.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-golos text-sm text-[var(--ink)]">{g.label}</span>
                    <span className="font-oswald font-bold text-sm text-[var(--ink)]">{g.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${g.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up fade-up-delay-2">
            <span className="label-xs block mb-6">Возраст & пол</span>
            <div className="space-y-5">
              {ages.map(a => (
                <div key={a.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-golos text-sm text-[var(--ink)]">{a.label} лет</span>
                    <span className="font-oswald font-bold text-sm text-[var(--ink)]">{a.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${a.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--rule)] pt-6 mt-6 flex gap-10">
              <div>
                <div className="font-oswald font-bold text-3xl text-[var(--ink)]">68%</div>
                <div className="label-xs mt-1">Женщины</div>
              </div>
              <div>
                <div className="font-oswald font-bold text-3xl text-[var(--ink-30)]">32%</div>
                <div className="label-xs mt-1">Мужчины</div>
              </div>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section className="fade-up">
          <span className="label-xs block mb-6">Прайс-лист</span>
          <div className="border border-[var(--rule)]">
            {prices.map((p, i) => (
              <div key={p.name}
                className={`grid md:grid-cols-4 gap-6 px-6 py-6 items-center ${i < prices.length - 1 ? 'border-b border-[var(--rule)]' : ''} hover:bg-[var(--paper-2)] transition-colors`}
              >
                <div className="md:col-span-1">
                  <div className="font-oswald font-medium uppercase text-[var(--ink)] tracking-wide text-base">{p.name}</div>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--ink-60)]">
                  <Icon name="Clock" size={13} />
                  <span className="font-golos text-sm">{p.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--ink-60)]">
                  <Icon name="Eye" size={13} />
                  <span className="font-golos text-sm">{p.reach}</span>
                </div>
                <div className="font-oswald font-bold text-xl text-[var(--ink)] text-right">{p.price}</div>
              </div>
            ))}
          </div>
          <p className="label-xs mt-4">* Итоговая стоимость зависит от сложности. Возможен бартер.</p>
        </section>

        {/* Cases */}
        <section className="fade-up">
          <span className="label-xs block mb-6">Кейсы</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)]">
            {cases.map(c => (
              <div key={c.company} className="bg-white p-8">
                <div className="label-xs mb-4">{c.type}</div>
                <div className="font-oswald font-bold text-2xl text-[var(--ink)] uppercase mb-3">{c.company}</div>
                <div className="font-golos text-base text-[var(--ink-60)]">{c.result}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="fade-up">
          <div style={{ background: 'var(--ink)' }} className="p-12 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="label-xs block mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Сотрудничество</span>
              <h2 className="font-oswald font-bold uppercase text-white leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Хочешь<br />интеграцию?
              </h2>
              <p className="font-golos text-sm mt-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Ответим в течение 24 часов и обсудим условия.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:manager@xkmaysh.ru" className="btn-amber self-start">
                <Icon name="Mail" size={15} />
                manager@xkmaysh.ru
              </a>
              <a href="https://t.me/xkmaysh_manager" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-oswald font-medium text-xs uppercase tracking-[0.08em] text-white border border-white/20 px-7 py-3 hover:border-white/50 transition-colors self-start">
                Telegram менеджер
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
