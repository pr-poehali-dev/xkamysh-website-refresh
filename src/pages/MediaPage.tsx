import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const GALLERY_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/files/c0a9ef22-a9ea-469e-b995-16a1158d6940.jpg';
const HERO_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/files/df463440-0d84-44c9-b805-e60f6f62eb2a.jpg';

const clips = [
  { id: 1, title: 'Самый смешной момент на стриме', views: '2.4M', duration: '0:47', platform: 'TikTok', img: HERO_IMG },
  { id: 2, title: 'Реакция на страшное в Phasmophobia', views: '1.8M', duration: '1:12', platform: 'Reels', img: GALLERY_IMG },
  { id: 3, title: 'Когда донат пришёл в нужный момент', views: '3.1M', duration: '0:31', platform: 'Shorts', img: HERO_IMG },
  { id: 4, title: 'Самый сложный момент в Valorant', views: '980K', duration: '2:05', platform: 'TikTok', img: GALLERY_IMG },
  { id: 5, title: 'Unboxing аниме-фигурок с чатом', views: '1.2M', duration: '5:30', platform: 'YouTube', img: HERO_IMG },
  { id: 6, title: 'Реакция на фан-арты', views: '756K', duration: '3:45', platform: 'Reels', img: GALLERY_IMG },
];

const youtubeVideos = [
  { id: 1, title: 'Лучшее за месяц — Декабрь 2024', views: '124K', date: '2 нед. назад', thumb: HERO_IMG },
  { id: 2, title: 'Valorant: дошла до Immortal?', views: '89K', date: '1 мес. назад', thumb: GALLERY_IMG },
  { id: 3, title: 'Я купила новую риг для стримов', views: '201K', date: '2 мес. назад', thumb: HERO_IMG },
];

const galleryImages = [HERO_IMG, GALLERY_IMG, HERO_IMG, GALLERY_IMG, HERO_IMG, GALLERY_IMG];

const platformColors: Record<string, string> = {
  TikTok: '#EE1D52',
  Reels: '#E1306C',
  Shorts: '#FF0000',
  YouTube: '#FF0000',
};

export default function MediaPage() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState<'clips' | 'youtube' | 'gallery'>('clips');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="fade-up">
          <div className="tag mb-4">Медиа</div>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl text-white uppercase leading-tight">
            Лучшие<br />
            <span className="gradient-text">моменты</span>
          </h1>
          <p className="font-golos text-white/50 text-lg mt-4 max-w-xl">
            Нарезки, видео и фото — всё самое виральное в одном месте
          </p>
        </div>

        {/* Tabs */}
        <div className="fade-up fade-up-delay-1 flex gap-2 mt-10 border-b border-white/10 pb-0">
          {[
            { id: 'clips', label: 'Клипы', icon: 'Play' },
            { id: 'youtube', label: 'YouTube', icon: 'Youtube' },
            { id: 'gallery', label: 'Галерея', icon: 'Image' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'clips' | 'youtube' | 'gallery')}
              className={`flex items-center gap-2 px-6 py-3 font-oswald font-medium uppercase tracking-wide text-sm border-b-2 -mb-px transition-all ${
                activeTab === tab.id
                  ? 'border-[var(--brand-purple)] text-[var(--brand-purple)]'
                  : 'border-transparent text-white/40 hover:text-white/70'
              }`}
            >
              <Icon name={tab.icon as "Play"} fallback="Circle" size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Clips */}
        {activeTab === 'clips' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clips.map((clip, i) => (
              <div
                key={clip.id}
                className={`fade-up fade-up-delay-${(i % 3) + 1} clip-card group cursor-pointer`}
                onClick={() => window.open('https://tiktok.com/@xkmaysh', '_blank')}
              >
                <div className="relative aspect-[9/16] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={clip.img} alt={clip.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Platform badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-oswald text-xs font-bold px-2 py-1 rounded-full text-white"
                      style={{ background: platformColors[clip.platform] || '#9146FF' }}>
                      {clip.platform}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-3 right-3">
                    <span className="glass font-golos text-xs px-2 py-1 rounded-md text-white">{clip.duration}</span>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[var(--brand-purple)] flex items-center justify-center glow-purple transform group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-golos font-medium text-white text-sm leading-tight mb-2">{clip.title}</h3>
                    <div className="flex items-center gap-1 text-white/50">
                      <Icon name="Eye" size={14} />
                      <span className="font-golos text-xs">{clip.views} просмотров</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* YouTube */}
        {activeTab === 'youtube' && (
          <div className="space-y-6">
            {/* Embed placeholder */}
            <div className="fade-up gradient-border rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-[var(--brand-card)] flex items-center justify-center">
                <img src={HERO_IMG} alt="Latest video" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center glow-fuchsia">
                    <Icon name="Play" size={32} className="text-white ml-2" />
                  </div>
                  <span className="font-oswald text-white text-xl uppercase tracking-wide">Последнее видео</span>
                  <a href="https://youtube.com/@xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Смотреть на YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {youtubeVideos.map((video, i) => (
                <div key={video.id} className={`fade-up fade-up-delay-${i + 1} card-hover glass-light rounded-2xl overflow-hidden group cursor-pointer`}
                  onClick={() => window.open('https://youtube.com/@xkmaysh', '_blank')}>
                  <div className="relative aspect-video overflow-hidden">
                    <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                        <Icon name="Play" size={20} className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-golos font-medium text-white text-sm leading-tight mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-white/40 text-xs">
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={12} />
                        <span>{video.views}</span>
                      </div>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {activeTab === 'gallery' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${(i % 3) + 1} aspect-square rounded-2xl overflow-hidden cursor-pointer group relative`}
                  onClick={() => setLightboxImg(img)}
                >
                  <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <Icon name="ZoomIn" size={24} className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox */}
            {lightboxImg && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setLightboxImg(null)}
              >
                <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
                  <Icon name="X" size={32} />
                </button>
                <img src={lightboxImg} alt="Preview" className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
