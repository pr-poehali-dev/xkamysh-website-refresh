import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const MODEL_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/bucket/6edddfa9-ebe9-4a11-9d69-c2dcebcffa62.png';
const BG_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/files/17697598-b144-4860-8141-3f7a9882b6af.jpg';

const clips = [
  { id: 1, title: 'Самый смешной момент на стриме', views: '2.4M', duration: '0:47', platform: 'TikTok', color: '#111' },
  { id: 2, title: 'Реакция на страшное в Phasmophobia', views: '1.8M', duration: '1:12', platform: 'Reels', color: '#E1306C' },
  { id: 3, title: 'Когда донат пришёл в нужный момент', views: '3.1M', duration: '0:31', platform: 'Shorts', color: '#FF0000' },
  { id: 4, title: 'Самый сложный момент в Valorant', views: '980K', duration: '2:05', platform: 'TikTok', color: '#111' },
  { id: 5, title: 'Unboxing аниме-фигурок с чатом', views: '1.2M', duration: '5:30', platform: 'YouTube', color: '#FF0000' },
  { id: 6, title: 'Реакция на фан-арты', views: '756K', duration: '3:45', platform: 'Reels', color: '#E1306C' },
];

const youtubeVideos = [
  { id: 1, title: 'Лучшее за месяц — Декабрь 2024', views: '124K', date: '2 нед. назад' },
  { id: 2, title: 'Valorant: дошла до Immortal?', views: '89K', date: '1 мес. назад' },
  { id: 3, title: 'Я купила новую риг для стримов', views: '201K', date: '2 мес. назад' },
];

export default function MediaPage() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState<'clips' | 'youtube' | 'gallery'>('clips');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const galleryItems = [MODEL_IMG, BG_IMG, MODEL_IMG, BG_IMG, MODEL_IMG, BG_IMG];

  return (
    <div style={{ background: 'var(--soft-bg)' }} className="min-h-screen pt-16">
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-clr)' }} className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Медиа</span>
          <h1 className="font-oswald font-bold uppercase mt-3 leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Лучшие<br /><span style={{ color: 'var(--amber)' }}>моменты</span>
          </h1>
          <p className="font-golos text-[var(--muted-text)] text-lg mt-4 max-w-xl">
            Нарезки, видео и фото — всё самое виральное в одном месте
          </p>
          <div className="flex gap-2 mt-8">
            {[
              { id: 'clips', label: '▶ Клипы' },
              { id: 'youtube', label: '▷ YouTube' },
              { id: 'gallery', label: '◻ Галерея' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'clips' | 'youtube' | 'gallery')}
                className={`font-golos font-medium text-sm px-5 py-2.5 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-[var(--charcoal)] text-white'
                    : 'bg-[#F0F0EE] text-[#555] hover:bg-[#E5E5E3]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'clips' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clips.map((clip, i) => (
              <div
                key={clip.id}
                className={`fade-up fade-up-delay-${(i % 3) + 1} clip-card group`}
                onClick={() => window.open('https://tiktok.com/@xkmaysh', '_blank')}
              >
                <div className="aspect-video relative overflow-hidden flex items-center justify-center"
                  style={{ background: '#F8F8F6' }}>
                  <img src={MODEL_IMG} alt={clip.title} className="h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="font-golos font-bold text-xs text-white px-2.5 py-1 rounded-full" style={{ background: clip.color }}>
                      {clip.platform}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white font-golos text-xs px-2 py-0.5 rounded-md">
                    {clip.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <Icon name="Play" size={22} className="ml-1" style={{ color: 'var(--charcoal)' }} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-golos font-semibold text-[var(--charcoal)] text-sm leading-tight mb-2">{clip.title}</h3>
                  <div className="flex items-center gap-1.5 text-[var(--muted-text)]">
                    <Icon name="Eye" size={13} />
                    <span className="font-golos text-xs">{clip.views} просмотров</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'youtube' && (
          <div className="space-y-6">
            <div className="card-white overflow-hidden">
              <div className="relative aspect-video bg-[#F8F8F6] flex items-center justify-center group cursor-pointer"
                onClick={() => window.open('https://youtube.com/@xkmaysh', '_blank')}>
                <img src={MODEL_IMG} alt="Latest" className="h-full object-contain opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={30} className="text-white ml-2" />
                  </div>
                  <span className="font-oswald text-[var(--charcoal)] text-xl font-bold uppercase">Последнее видео</span>
                  <span className="font-golos text-[var(--muted-text)] text-sm">Открыть на YouTube →</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {youtubeVideos.map((v, i) => (
                <div key={v.id}
                  className={`fade-up fade-up-delay-${i + 1} clip-card group cursor-pointer`}
                  onClick={() => window.open('https://youtube.com/@xkmaysh', '_blank')}>
                  <div className="aspect-video bg-[#FFF8F8] flex items-center justify-center relative overflow-hidden">
                    <img src={MODEL_IMG} alt={v.title} className="h-full object-contain opacity-70 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-[#FF0000] flex items-center justify-center">
                        <Icon name="Play" size={18} className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-golos font-semibold text-[var(--charcoal)] text-sm leading-tight mb-2">{v.title}</h3>
                    <div className="flex items-center justify-between text-[var(--muted-text)] text-xs font-golos">
                      <div className="flex items-center gap-1"><Icon name="Eye" size={12} />{v.views}</div>
                      <span>{v.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map((img, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${(i % 3) + 1} aspect-square rounded-2xl overflow-hidden cursor-pointer group relative bg-white border border-[var(--border-clr)]`}
                  onClick={() => setLightbox(img)}
                >
                  <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                      <Icon name="ZoomIn" size={20} style={{ color: 'var(--charcoal)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {lightbox && (
              <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
                onClick={() => setLightbox(null)}>
                <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Icon name="X" size={20} />
                </button>
                <img src={lightbox} alt="Preview" className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
