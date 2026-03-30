import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const MODEL_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/bucket/6edddfa9-ebe9-4a11-9d69-c2dcebcffa62.png';
const BG_IMG = 'https://cdn.poehali.dev/projects/2537d1e7-5be3-4587-a8a3-7b33e4250df3/files/17697598-b144-4860-8141-3f7a9882b6af.jpg';

const clips = [
  { id: 1, title: 'Самый смешной момент на стриме', views: '2.4M', duration: '0:47', platform: 'TikTok' },
  { id: 2, title: 'Реакция на страшное в Phasmophobia', views: '1.8M', duration: '1:12', platform: 'Reels' },
  { id: 3, title: 'Когда донат пришёл в нужный момент', views: '3.1M', duration: '0:31', platform: 'Shorts' },
  { id: 4, title: 'Самый сложный момент в Valorant', views: '980K', duration: '2:05', platform: 'TikTok' },
  { id: 5, title: 'Unboxing аниме-фигурок с чатом', views: '1.2M', duration: '5:30', platform: 'YouTube' },
  { id: 6, title: 'Реакция на фан-арты', views: '756K', duration: '3:45', platform: 'Reels' },
];

const videos = [
  { id: 1, title: 'Лучшее за месяц — Декабрь 2024', views: '124K', date: '2 нед. назад' },
  { id: 2, title: 'Valorant: дошла до Immortal?', views: '89K', date: '1 мес. назад' },
  { id: 3, title: 'Я купила новую риг для стримов', views: '201K', date: '2 мес. назад' },
];

const gallery = [MODEL_IMG, BG_IMG, MODEL_IMG, BG_IMG, MODEL_IMG, BG_IMG];

type Tab = 'clips' | 'youtube' | 'gallery';

export default function MediaPage() {
  useScrollReveal();
  const [tab, setTab] = useState<Tab>('clips');
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div style={{ background: 'var(--paper)' }} className="min-h-screen pt-14">
      <div style={{ background: 'white', borderBottom: '1px solid var(--rule)' }} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <span className="label-xs block mb-5">Медиа</span>
          <h1 className="font-oswald font-bold uppercase leading-none text-[var(--ink)]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            Клипы &<br />Видео
          </h1>
          <div className="flex gap-0 mt-10 border-b border-[var(--rule)]">
            {([['clips','Клипы'],['youtube','YouTube'],['gallery','Галерея']] as [Tab, string][]).map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)}
                className={`font-oswald uppercase tracking-wide text-sm px-6 py-3 border-b-2 -mb-px transition-colors ${
                  tab === id ? 'border-[var(--ink)] text-[var(--ink)]' : 'border-transparent text-[var(--ink-30)] hover:text-[var(--ink-60)]'
                }`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {tab === 'clips' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)]">
            {clips.map((clip, i) => (
              <div key={clip.id}
                className={`fade-up fade-up-delay-${(i % 3) + 1} clip-card group bg-white`}
                style={{ border: 'none' }}
                onClick={() => window.open('https://tiktok.com/@xkmaysh', '_blank')}>
                <div className="aspect-video relative overflow-hidden bg-[var(--paper-2)] flex items-center justify-center">
                  <img src={MODEL_IMG} alt={clip.title} className="h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/10 transition-colors flex items-center justify-center">
                    <Icon name="Play" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="absolute top-3 left-3 label-xs text-[var(--ink-60)] bg-white px-2 py-1">{clip.platform}</span>
                  <span className="absolute top-3 right-3 label-xs text-[var(--ink-60)] bg-white px-2 py-1">{clip.duration}</span>
                </div>
                <div className="p-5">
                  <p className="font-golos font-medium text-[var(--ink)] text-sm leading-snug mb-3">{clip.title}</p>
                  <div className="flex items-center gap-1.5 text-[var(--ink-30)]">
                    <Icon name="Eye" size={12} />
                    <span className="label-xs">{clip.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'youtube' && (
          <div className="space-y-px bg-[var(--rule)]">
            <div className="card bg-white cursor-pointer group" style={{ border: 'none' }}
              onClick={() => window.open('https://youtube.com/@xkmaysh', '_blank')}>
              <div className="aspect-video relative bg-[var(--paper-2)] flex items-center justify-center overflow-hidden">
                <img src={MODEL_IMG} alt="Latest" className="h-full object-contain opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 bg-[var(--ink)] flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <Icon name="Play" size={22} className="text-white ml-1" />
                  </div>
                  <span className="label-xs">Открыть на YouTube</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
              {videos.map((v, i) => (
                <div key={v.id}
                  className={`fade-up fade-up-delay-${i + 1} clip-card group bg-white`}
                  style={{ border: 'none' }}
                  onClick={() => window.open('https://youtube.com/@xkmaysh', '_blank')}>
                  <div className="aspect-video bg-[var(--paper-2)] relative flex items-center justify-center overflow-hidden">
                    <img src={MODEL_IMG} alt={v.title} className="h-full object-contain opacity-60 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-[var(--ink)] flex items-center justify-center">
                        <Icon name="Play" size={16} className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-golos font-medium text-[var(--ink)] text-sm leading-snug mb-2">{v.title}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5 text-[var(--ink-30)]"><Icon name="Eye" size={12} /><span className="label-xs">{v.views}</span></div>
                      <span className="label-xs">{v.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'gallery' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--rule)]">
              {gallery.map((img, i) => (
                <div key={i}
                  className={`fade-up fade-up-delay-${(i % 3) + 1} aspect-square overflow-hidden cursor-pointer group relative bg-white`}
                  onClick={() => setLightbox(img)}>
                  <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/25 transition-colors flex items-center justify-center">
                    <Icon name="ZoomIn" size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
            {lightbox && (
              <div className="fixed inset-0 z-50 bg-[var(--ink)]/90 flex items-center justify-center p-6"
                onClick={() => setLightbox(null)}>
                <button className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors">
                  <Icon name="X" size={22} />
                </button>
                <img src={lightbox} alt="Preview" className="max-w-full max-h-[90vh] object-contain" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
