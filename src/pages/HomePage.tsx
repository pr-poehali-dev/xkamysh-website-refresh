import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/files/df463440-0d84-44c9-b805-e60f6f62eb2a.jpg';
const BG_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/files/17697598-b144-4860-8141-3f7a9882b6af.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const socialLinks = [
  { name: 'Twitch', color: '#9146FF', bg: 'rgba(145,70,255,0.1)', border: 'rgba(145,70,255,0.3)', href: 'https://twitch.tv/xkmaysh', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
    </svg>
  )},
  { name: 'TikTok', color: '#EE1D52', bg: 'rgba(238,29,82,0.1)', border: 'rgba(238,29,82,0.3)', href: 'https://tiktok.com/@xkmaysh', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )},
  { name: 'YouTube', color: '#FF0000', bg: 'rgba(255,0,0,0.1)', border: 'rgba(255,0,0,0.3)', href: 'https://youtube.com/@xkmaysh', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )},
  { name: 'Telegram', color: '#26A5E4', bg: 'rgba(38,165,228,0.1)', border: 'rgba(38,165,228,0.3)', href: 'https://t.me/xkmaysh', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )},
  { name: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.1)', border: 'rgba(225,48,108,0.3)', href: 'https://instagram.com/xkmaysh', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )},
  { name: 'Donation', color: '#FF6B35', bg: 'rgba(255,107,53,0.1)', border: 'rgba(255,107,53,0.3)', href: 'https://www.donationalerts.com/r/xkmaysh', icon: <Icon name="Heart" size={22} /> },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  useScrollReveal();

  const isLive = false;
  const nextStream = 'Вторник, 22:00 МСК';

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={BG_IMG} alt="bg" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--brand-dark)_100%)]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--brand-purple)] rounded-full opacity-5 blur-3xl float-anim" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--brand-fuchsia)] rounded-full opacity-5 blur-3xl float-anim" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Live status */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {isLive ? (
                <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full glow-purple">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--live-green)] live-dot" />
                  <span className="font-oswald font-medium text-sm uppercase tracking-widest text-white">В эфире сейчас</span>
                  <a href="https://twitch.tv/xkmaysh" target="_blank" rel="noopener noreferrer"
                    className="bg-[var(--live-green)] text-black text-xs font-oswald font-bold px-3 py-1 rounded-full uppercase tracking-wide hover:opacity-90 transition-opacity">
                    Смотреть
                  </a>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="font-golos text-sm text-white/50">Следующий стрим:</span>
                  <span className="font-oswald font-medium text-sm text-white">{nextStream}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="font-oswald font-bold leading-none">
                <span className="block text-7xl md:text-8xl lg:text-9xl gradient-text text-glow">xKmaysh</span>
                <span className="block text-2xl md:text-3xl text-white/40 font-light tracking-[0.3em] uppercase mt-2">Virtual Streamer</span>
              </h1>
            </div>

            {/* Slogan */}
            <p className="animate-fade-in font-golos text-lg md:text-xl text-white/60 max-w-lg leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Виртуальная модель. Реальные эмоции. 
              <br />
              <span className="text-white/80">1 000 000+ человек уже в моём мире</span>
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in flex flex-wrap gap-4" style={{ animationDelay: '0.4s' }}>
              <a href="https://twitch.tv/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
                </svg>
                Смотреть на Twitch
              </a>
              <a href="https://www.donationalerts.com/r/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Icon name="Heart" size={18} />
                Поддержать
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in flex gap-8 pt-2" style={{ animationDelay: '0.5s' }}>
              {[
                { num: '109K', label: 'Фолловеров' },
                { num: '1M+', label: 'Охват' },
                { num: '1K', label: 'Онлайн' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-oswald font-bold text-3xl gradient-text">{s.num}</div>
                  <div className="font-golos text-xs text-white/40 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative float-anim">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-fuchsia)] rounded-2xl opacity-20 blur-2xl" />
              <div className="gradient-border rounded-2xl overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="xKmaysh"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)] via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border border-[var(--brand-purple)]/20 rounded-full animate-spin-slow" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-[var(--brand-fuchsia)]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="font-golos text-xs text-white/30 uppercase tracking-widest">Листай</span>
          <Icon name="ChevronDown" size={20} className="text-white/30 animate-bounce" />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up space-y-6">
            <div className="tag">Обо мне</div>
            <h2 className="font-oswald font-bold text-5xl md:text-6xl text-white uppercase leading-tight">
              Виртуальная.<br/>
              <span className="gradient-text">Настоящая.</span>
            </h2>
            <div className="space-y-4 font-golos text-white/60 text-lg leading-relaxed">
              <p>
                Привет, я <span className="text-white font-medium">xKmaysh</span> — виртуальная стримерша из России, 24 года. 
                Моя виртуальная модель — это способ выразить себя так, как я хочу.
              </p>
              <p>
                Стримлю <span className="text-[var(--brand-purple)]">Just Chatting, Valorant, Genshin Impact</span> и другие игры. 
                Люблю уютные стримы, аниме, чай с лимоном и ваши донаты с голосами.
              </p>
              <p>
                Сформировала аудиторию в <span className="text-white font-medium">1 млн+ человек</span> через искренность, 
                юмор и настоящие эмоции — даже за виртуальной маской.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Valorant', 'Genshin Impact', 'Just Chatting', 'Аниме', 'Косплей', 'Музыка'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="fade-up fade-up-delay-2 space-y-4">
            {[
              { icon: 'Gamepad2', label: 'Игры', value: 'Valorant, Genshin, CS2, Minecraft' },
              { icon: 'Clock', label: 'Стримлю', value: 'Вторник — Воскресенье, с 21:00 МСК' },
              { icon: 'MapPin', label: 'Откуда', value: 'Россия' },
              { icon: 'Users', label: 'Аудитория', value: '109K Twitch + 1M+ охват' },
            ].map((item) => (
              <div key={item.label} className="glass-light rounded-xl p-5 flex items-center gap-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-purple)]/20 to-[var(--brand-fuchsia)]/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Circle" size={20} className="text-[var(--brand-purple)]" />
                </div>
                <div>
                  <div className="font-golos text-xs text-white/40 uppercase tracking-widest">{item.label}</div>
                  <div className="font-golos text-white font-medium mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL LINKS ─── */}
      <section className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white uppercase">
              Найди меня везде
            </h2>
            <p className="font-golos text-white/40 mt-4">Подписывайся, чтобы не пропустить ни одного момента</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`fade-up fade-up-delay-${i + 1} glass-light rounded-2xl p-6 flex flex-col items-center gap-3 card-hover group`}
                style={{ borderColor: link.border, border: `1px solid ${link.border}` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: link.bg, color: link.color }}>
                  {link.icon}
                </div>
                <span className="font-oswald font-medium text-lg text-white uppercase tracking-wide">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA DONATE ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-purple)]/20 via-transparent to-[var(--brand-fuchsia)]/20" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative glass rounded-3xl p-12 text-center space-y-6 border border-[var(--brand-purple)]/20">
              <div className="text-5xl">💜</div>
              <h2 className="font-oswald font-bold text-4xl text-white uppercase">Поддержи стримы</h2>
              <p className="font-golos text-white/50 text-lg max-w-md mx-auto">
                Каждый донат делает стримы лучше и дольше. Спасибо, что вы есть ❤️
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://www.donationalerts.com/r/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                  <Icon name="Heart" size={18} />
                  DonationAlerts
                </a>
                <a href="https://boosty.to/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
                  <Icon name="Star" size={18} />
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