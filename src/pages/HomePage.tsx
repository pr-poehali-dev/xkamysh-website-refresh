import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const MODEL_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/bucket/6edddfa9-ebe9-4a11-9d69-c2dcebcffa62.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const socials = [
  {
    name: 'Twitch', href: 'https://twitch.tv/xkmaysh',
    bg: '#9146FF', color: '#fff',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>,
    stat: '109K',
  },
  {
    name: 'TikTok', href: 'https://tiktok.com/@xkmaysh',
    bg: '#111', color: '#fff',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
    stat: '500K+',
  },
  {
    name: 'YouTube', href: 'https://youtube.com/@xkmaysh',
    bg: '#FF0000', color: '#fff',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
    stat: '80K',
  },
  {
    name: 'Telegram', href: 'https://t.me/xkmaysh',
    bg: '#26A5E4', color: '#fff',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    stat: '45K',
  },
  {
    name: 'Instagram', href: 'https://instagram.com/xkmaysh',
    bg: '#E1306C', color: '#fff',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
    stat: '120K',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  useScrollReveal();

  const isLive = false;
  const nextStream = 'Вторник, 22:00 МСК';

  return (
    <div style={{ background: 'var(--soft-bg)' }}>
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 min-h-[calc(100vh-64px)] items-center">

          {/* Left */}
          <div className="py-16 md:py-0 space-y-6 z-10 relative">
            {/* Live status */}
            <div className="animate-fade-in">
              {isLive ? (
                <div className="inline-flex items-center gap-2 bg-[#DCFCE7] rounded-full px-4 py-2 border border-[#BBF7D0]">
                  <span className="live-dot" />
                  <span className="font-golos font-semibold text-sm text-[#166534]">В эфире сейчас</span>
                  <a href="https://twitch.tv/xkmaysh" target="_blank" rel="noopener noreferrer"
                    className="bg-[#22C55E] text-white font-golos font-bold text-xs px-3 py-1 rounded-full hover:opacity-90 transition-opacity ml-1">
                    Смотреть →
                  </a>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-[#F3F4F6] rounded-full px-4 py-2 border border-[var(--border-clr)]">
                  <span className="offline-dot" />
                  <span className="font-golos text-sm text-[var(--muted-text)]">Следующий стрим:</span>
                  <span className="font-golos font-semibold text-sm text-[var(--charcoal)]">{nextStream}</span>
                </div>
              )}
            </div>

            {/* Headline */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="font-oswald font-bold leading-[0.95] uppercase tracking-tight" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}>
                Virtual<br />
                <span style={{ color: 'var(--amber)' }}>Streamer</span>
                <br />
                <span style={{ color: 'var(--charcoal)' }}>xKmaysh</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="animate-fade-in font-golos text-lg text-[var(--muted-text)] max-w-md leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Котогёрл с янтарными глазами. <br />
              <span className="text-[var(--charcoal)] font-medium">1 000 000+ человек уже в моём мире.</span>
            </p>

            {/* CTAs */}
            <div className="animate-fade-in flex flex-wrap gap-3" style={{ animationDelay: '0.3s' }}>
              <a href="https://twitch.tv/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
                Twitch
              </a>
              <a href="https://www.donationalerts.com/r/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-amber">
                <Icon name="Heart" size={16} />
                Поддержать
              </a>
              <button onClick={() => onNavigate('mediakit')} className="btn-outline-dark">
                Media Kit
              </button>
            </div>

            {/* Stats row */}
            <div className="animate-fade-in flex gap-8 pt-4 border-t border-[var(--border-clr)]" style={{ animationDelay: '0.4s' }}>
              {[
                { num: '109K', label: 'Twitch' },
                { num: '1M+', label: 'Охват' },
                { num: '1K+', label: 'Онлайн' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-oswald font-bold text-3xl text-[var(--charcoal)]">{s.num}</div>
                  <div className="font-golos text-xs text-[var(--muted-text)] uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Model */}
          <div className="relative flex items-end justify-center md:justify-end h-full min-h-[400px] md:min-h-0">
            {/* Amber blob behind */}
            <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full opacity-20 blur-3xl"
              style={{ background: 'var(--amber)' }} />
            {/* Lime accent square — decorative */}
            <div className="absolute top-16 right-4 w-16 h-16 rounded-2xl rotate-12 opacity-80"
              style={{ background: 'var(--lime)' }} />
            {/* Stat floating card */}
            <div className="absolute top-24 left-0 md:left-8 card-white px-5 py-4 shadow-lg float-anim z-20">
              <div className="font-oswald font-bold text-2xl text-[var(--charcoal)]">1M+</div>
              <div className="font-golos text-xs text-[var(--muted-text)] mt-0.5">Ежемес. охват</div>
            </div>
            {/* Model image */}
            <img
              src={MODEL_IMG}
              alt="xKmaysh"
              className="animate-fade-in-right relative z-10 h-[400px] md:h-[600px] object-contain drop-shadow-2xl"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-up space-y-5">
              <span className="section-label">Обо мне</span>
              <h2 className="font-oswald font-bold uppercase leading-tight" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>
                Виртуальная.<br />
                <span style={{ color: 'var(--amber)' }}>Настоящая.</span>
              </h2>
              <p className="font-golos text-[var(--muted-text)] text-lg leading-relaxed">
                Привет, я <span className="font-semibold text-[var(--charcoal)]">xKmaysh</span> — котогёрл-стримерша, 24 года. 
                Моя виртуальная модель — способ быть собой без границ. 
                Стримлю <span className="font-semibold text-[var(--charcoal)]">Valorant, Genshin Impact, Just Chatting</span> и многое другое.
              </p>
              <p className="font-golos text-[var(--muted-text)] text-lg leading-relaxed">
                Сформировала аудиторию в <span className="font-semibold text-[var(--charcoal)]">1 млн+ человек</span> через искренность, 
                юмор и настоящие эмоции — даже за виртуальной маской.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Valorant', 'Genshin Impact', 'Just Chatting', 'Аниме', 'Косплей', 'Музыка'].map(t => (
                  <span key={t} className="tag-sm">{t}</span>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="fade-up fade-up-delay-2 grid grid-cols-2 gap-4">
              {[
                { emoji: '🎮', title: 'Игры', value: 'Valorant, Genshin, CS2' },
                { emoji: '📅', title: 'Расписание', value: 'Вт–Вс с 21:00 МСК' },
                { emoji: '📍', title: 'Откуда', value: 'Россия' },
                { emoji: '👥', title: 'Аудитория', value: '109K + 1M охват' },
              ].map((item) => (
                <div key={item.title} className="card-white p-5">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <div className="font-golos text-xs text-[var(--muted-text)] uppercase tracking-wider">{item.title}</div>
                  <div className="font-oswald font-semibold text-lg text-[var(--charcoal)] mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="py-24 px-6" style={{ background: 'var(--soft-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <span className="section-label">Соцсети</span>
            <h2 className="font-oswald font-bold uppercase mt-3" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              Найди меня везде
            </h2>
            <p className="font-golos text-[var(--muted-text)] mt-3">Подписывайся, чтобы не пропустить ни одного момента</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`fade-up fade-up-delay-${i + 1} card-white p-5 flex flex-col items-center gap-3 group hover:border-transparent transition-all duration-300`}
                style={{ ['--hover-shadow' as string]: `0 16px 40px ${s.bg}22` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: s.bg, color: s.color }}>
                  {s.icon}
                </div>
                <div className="text-center">
                  <div className="font-oswald font-bold text-sm text-[var(--charcoal)] uppercase">{s.name}</div>
                  <div className="font-golos text-xs text-[var(--muted-text)] mt-0.5">{s.stat}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="py-24 px-6" style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-4xl mx-auto fade-up text-center space-y-6">
          <div className="text-5xl">💜</div>
          <h2 className="font-oswald font-bold uppercase text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}>
            Поддержи стримы
          </h2>
          <p className="font-golos text-white/50 text-lg max-w-md mx-auto">
            Каждый донат делает стримы лучше и длиннее. Спасибо, что вы есть ❤️
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.donationalerts.com/r/xkmaysh" target="_blank" rel="noopener noreferrer"
              className="btn-amber">
              <Icon name="Heart" size={18} />
              DonationAlerts
            </a>
            <a href="https://boosty.to/xkmaysh" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-oswald font-medium text-sm uppercase tracking-wide px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors">
              <Icon name="Star" size={18} />
              Boosty
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
