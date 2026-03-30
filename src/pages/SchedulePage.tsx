import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const STREAM_DAYS = [2, 5, 7, 12, 14, 16, 19, 21, 23, 26, 28];
const MONTH_NAMES = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const DAY_NAMES = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

const schedule = [
  { day: 'Вторник',     time: '21:00', game: 'Valorant' },
  { day: 'Среда',       time: '22:00', game: 'Just Chatting' },
  { day: 'Пятница',     time: '20:00', game: 'Genshin Impact' },
  { day: 'Суббота',     time: '19:00', game: 'Разное' },
  { day: 'Воскресенье', time: '21:00', game: 'Just Chatting + Q&A' },
];

export default function SchedulePage() {
  useScrollReveal();

  const now  = new Date();
  const tz   = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [month, setMonth] = useState(now.getMonth());
  const [year,  setYear]  = useState(now.getFullYear());

  const firstDay = new Date(year, month, 1).getDay();
  const offset   = firstDay === 0 ? 6 : firstDay - 1;
  const days     = new Date(year, month + 1, 0).getDate();
  const isCurrent = month === now.getMonth() && year === now.getFullYear();

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  return (
    <div style={{ background: 'var(--paper)' }} className="min-h-screen pt-14">
      <div style={{ background: 'white', borderBottom: '1px solid var(--rule)' }} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <span className="label-xs block mb-5">Расписание</span>
          <h1 className="font-oswald font-bold uppercase leading-none text-[var(--ink)]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            Когда<br />стримим?
          </h1>
          <div className="flex items-center gap-2 mt-5">
            <Icon name="Globe" size={14} className="text-[var(--ink-30)]" />
            <span className="label-xs">Ваш часовой пояс: {tz}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* Calendar */}
        <div className="fade-up">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-8">
              <button onClick={prev} className="w-8 h-8 flex items-center justify-center text-[var(--ink-30)] hover:text-[var(--ink)] transition-colors">
                <Icon name="ChevronLeft" size={18} />
              </button>
              <span className="font-oswald font-medium uppercase text-base tracking-wider text-[var(--ink)]">
                {MONTH_NAMES[month]} {year}
              </span>
              <button onClick={next} className="w-8 h-8 flex items-center justify-center text-[var(--ink-30)] hover:text-[var(--ink)] transition-colors">
                <Icon name="ChevronRight" size={18} />
              </button>
            </div>
            <div className="grid grid-cols-7 mb-2">
              {DAY_NAMES.map(d => <div key={d} className="cal-day label-xs cursor-default">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-0.5">
              {Array.from({ length: offset }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: days }).map((_, i) => {
                const d = i + 1;
                const isStream = STREAM_DAYS.includes(d);
                const isToday  = isCurrent && d === now.getDate() && !isStream;
                return <div key={d} className={`cal-day ${isStream ? 'stream' : ''} ${isToday ? 'today' : ''}`}>{d}</div>;
              })}
            </div>
            <div className="flex items-center gap-6 mt-6 pt-5 border-t border-[var(--rule)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[var(--ink)]" />
                <span className="label-xs">День стрима</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 outline outline-1" style={{ outlineColor: 'var(--amber)' }} />
                <span className="label-xs">Сегодня</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly schedule */}
        <div className="fade-up fade-up-delay-2">
          <span className="label-xs block mb-6">График недели</span>
          {schedule.map((s, i) => (
            <div key={s.day}
              className={`flex items-center justify-between py-5 border-b border-[var(--rule)] ${i === 0 ? 'border-t border-[var(--rule)]' : ''}`}
            >
              <div>
                <div className="font-oswald font-medium uppercase text-lg text-[var(--ink)] tracking-wide">{s.day}</div>
                <div className="font-golos text-sm text-[var(--ink-60)] mt-0.5">{s.game}</div>
              </div>
              <div className="text-right">
                <div className="font-oswald font-bold text-2xl text-[var(--ink)]">{s.time}</div>
                <div className="label-xs mt-1">МСК</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telegram CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="fade-up border border-[var(--rule)] p-8 flex flex-col md:flex-row items-start md:items-center gap-6 bg-white">
          <div className="flex-1">
            <span className="label-xs block mb-3">Уведомления</span>
            <h3 className="font-oswald font-bold uppercase text-2xl text-[var(--ink)]">Не пропусти старт</h3>
            <p className="font-golos text-sm text-[var(--ink-60)] mt-2">
              Уведомление в Telegram придёт за 15 минут до начала стрима
            </p>
          </div>
          <a href="https://t.me/xkmaysh" target="_blank" rel="noopener noreferrer" className="btn-fill flex-shrink-0">
            Подписаться в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
