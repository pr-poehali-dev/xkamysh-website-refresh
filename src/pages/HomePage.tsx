import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const MODEL_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/bucket/6edddfa9-ebe9-4a11-9d69-c2dcebcffa62.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const socials = [
  { name: 'Twitch', stat: '109K фолловеров', href: 'https://twitch.tv/xkmaysh' },
  { name: 'TikTok', stat: '500K+ подписчиков', href: 'https://tiktok.com/@xkmaysh' },
  { name: 'YouTube', stat: '80K подписчиков', href: 'https://youtube.com/@xkmaysh' },
  { name: 'Telegram', stat: '45K участников', href: 'https://t.me/xkmaysh' },
  { name: 'Instagram', stat: '120K подписчиков', href: 'https://instagram.com/xkmaysh' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  useScrollReveal();

  const isLive = false;
  const nextStream = 'Вторник, 22:00 МСК';

  return (
    <div style={{ background: 'var(--paper)' }}>

      {/* ── HERO ── */}
      <section className="pt-14 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto px-6 flex-1 grid md:grid-cols-2 gap-0 items-end pb-0">

          {/* Left */}
          <div className="py-20 md:py-24 flex flex-col justify-center gap-10">

            {/* Status */}
            <div className="animate-fade-in flex items-center gap-3">
              {isLive ? (
                <>
                  <span className="live-dot" />
                  <span className="label-xs" style={{ color: '#16A34A' }}>В эфире</span>
                  <span className="mx-2 text-[var(--rule)]">|</span>
                  <a href="https://twitch.tv/xkmaysh" target="_blank" rel="noopener noreferrer"
                    className="label-xs hover:text-[var(--ink)] transition-colors">
                    Смотреть →
                  </a>
                </>
              ) : (
                <>
                  <span className="offline-dot" />
                  <span className="label-xs">Следующий стрим — {nextStream}</span>
                </>
              )}
            </div>

            {/* Headline */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1
                className="font-oswald font-bold uppercase leading-none tracking-tight text-[var(--ink)]"
                style={{ fontSize: 'clamp(4.5rem, 10vw, 9.5rem)' }}
              >
                xKmaysh
              </h1>
              <p className="font-golos text-base text-[var(--ink-60)] mt-4 max-w-sm leading-relaxed">
                Виртуальная стримерша. Котогёрл.<br />
                1 000 000+ человек уже в моём мире.
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-in flex gap-3 flex-wrap" style={{ animationDelay: '0.2s' }}>
              <a href="https://twitch.tv/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-fill">
                Смотреть стримы
              </a>
              <a href="https://www.donationalerts.com/r/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Поддержать
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in border-t border-[var(--rule)] pt-8 grid grid-cols-3 gap-6" style={{ animationDelay: '0.3s' }}>
              {[
                { num: '109K', label: 'Twitch' },
                { num: '1M+', label: 'Охват / мес.' },
                { num: '1K+', label: 'Онлайн' },
              ].map(s => (
                <div key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="label-xs mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Model, anchored to bottom */}
          <div className="relative flex items-end justify-center md:justify-end h-full min-h-[480px]">
            {/* Subtle tinted bg shape */}
            <div
              className="absolute bottom-0 right-0 w-72 h-[70%] md:w-96 md:h-[80%]"
              style={{ background: 'var(--paper-2)' }}
            />
            <img
              src={MODEL_IMG}
              alt="xKmaysh"
              className="animate-fade-in relative z-10 h-[480px] md:h-[600px] object-contain"
              style={{ animationDelay: '0.15s' }}
            />
          </div>
        </div>

        {/* Bottom rule */}
        <div className="rule" />
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-start">
          <div className="fade-up">
            <span className="label-xs block mb-6">О модели</span>
            <h2
              className="font-oswald font-bold uppercase leading-none text-[var(--ink)]"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
            >
              Виртуальная.<br />Настоящая.
            </h2>
          </div>

          <div className="fade-up fade-up-delay-2 flex flex-col gap-6">
            <p className="font-golos text-[var(--ink-60)] leading-relaxed text-base">
              Меня зовут xKmaysh, мне 24 года. Моя виртуальная модель — это способ быть собой без границ.
              Стримлю <span className="text-[var(--ink)] font-medium">Valorant, Genshin Impact, Just Chatting</span>.
            </p>
            <p className="font-golos text-[var(--ink-60)] leading-relaxed text-base">
              За несколько лет сформировала аудиторию в <span className="text-[var(--ink)] font-medium">1 млн+ человек</span> — через искренность и настоящие эмоции, даже за виртуальной маской.
            </p>
            <div className="border-t border-[var(--rule)] pt-6 grid grid-cols-2 gap-y-5 gap-x-8">
              {[
                { label: 'Возраст', val: '24 года' },
                { label: 'Страна', val: 'Россия' },
                { label: 'Платформа', val: 'Twitch' },
                { label: 'График', val: 'Вт–Вс, 21:00 МСК' },
              ].map(row => (
                <div key={row.label}>
                  <div className="label-xs mb-1">{row.label}</div>
                  <div className="font-golos font-medium text-[var(--ink)] text-sm">{row.val}</div>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate('schedule')} className="btn-ghost self-start mt-2">
              Расписание стримов →
            </button>
          </div>
        </div>
        <div className="rule" />
      </section>

      {/* ── SOCIALS ── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="fade-up flex items-end justify-between mb-12">
            <div>
              <span className="label-xs block mb-4">Платформы</span>
              <h2
                className="font-oswald font-bold uppercase leading-none text-[var(--ink)]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Найди меня везде
              </h2>
            </div>
          </div>

          <div className="fade-up fade-up-delay-1">
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-row-item group"
                style={{ borderTop: i === 0 ? '1px solid var(--rule)' : undefined }}
              >
                <div className="flex items-center gap-6">
                  <span className="label-xs w-6 text-right">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-oswald font-bold uppercase text-2xl text-[var(--ink)] tracking-wide">{s.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-golos text-sm text-[var(--ink-60)] hidden md:block">{s.stat}</span>
                  <Icon name="ArrowUpRight" size={18} className="social-arrow text-[var(--ink-30)]" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="rule" />
      </section>

      {/* ── DONATE ── */}
      <section style={{ background: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-6 py-24 fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-xs block mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>Поддержка</span>
              <h2
                className="font-oswald font-bold uppercase leading-none text-white"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Поддержи<br />стримы
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Каждый донат делает стримы длиннее и лучше. Спасибо, что вы есть.
              </p>
              <div className="flex gap-3 flex-wrap pt-4">
                <a href="https://www.donationalerts.com/r/xkmaysh" target="_blank" rel="noopener noreferrer"
                  className="btn-amber">
                  DonationAlerts
                </a>
                <a href="https://boosty.to/xkmaysh" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-oswald font-medium text-xs uppercase tracking-[0.08em] text-white border border-white/20 px-7 py-3 hover:border-white/50 transition-colors">
                  Boosty
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
