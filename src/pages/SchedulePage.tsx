import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const STREAM_DAYS = [2, 5, 7, 12, 14, 16, 19, 21, 23, 26, 28];

const schedule = [
  { day: 'Вторник', time: '21:00', tz: 'МСК', game: 'Valorant', type: 'Игры', emoji: '🎮' },
  { day: 'Среда', time: '22:00', tz: 'МСК', game: 'Just Chatting', type: 'Чат', emoji: '💬' },
  { day: 'Пятница', time: '20:00', tz: 'МСК', game: 'Genshin Impact', type: 'Игры', emoji: '🎮' },
  { day: 'Суббота', time: '19:00', tz: 'МСК', game: 'Разное', type: 'Сюрприз', emoji: '🎁' },
  { day: 'Воскресенье', time: '21:00', tz: 'МСК', game: 'Just Chatting + Q&A', type: 'Чат', emoji: '💬' },
];

const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const dayNames = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

export default function SchedulePage() {
  useScrollReveal();

  const now = new Date();
  const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const today = now.getDate();
  const isCurrentMonth = month === now.getMonth() && year === now.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevM = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextM = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  return (
    <div style={{ background: 'var(--soft-bg)' }} className="min-h-screen pt-16">
      {/* Page header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-clr)' }} className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Расписание</span>
          <h1 className="font-oswald font-bold uppercase mt-3 leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Когда<br /><span style={{ color: 'var(--amber)' }}>стримим?</span>
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <Icon name="Globe" size={15} className="text-[var(--muted-text)]" />
            <span className="font-golos text-sm text-[var(--muted-text)]">
              Ваш часовой пояс: <span className="font-semibold text-[var(--charcoal)]">{userTZ}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="fade-up">
          <div className="card-white p-6">
            {/* Month nav */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevM}
                className="w-9 h-9 rounded-xl bg-[#F0F0EE] flex items-center justify-center hover:bg-[#E5E5E3] transition-colors">
                <Icon name="ChevronLeft" size={18} style={{ color: 'var(--charcoal)' }} />
              </button>
              <span className="font-oswald font-semibold text-lg text-[var(--charcoal)] uppercase tracking-wide">
                {monthNames[month]} {year}
              </span>
              <button onClick={nextM}
                className="w-9 h-9 rounded-xl bg-[#F0F0EE] flex items-center justify-center hover:bg-[#E5E5E3] transition-colors">
                <Icon name="ChevronRight" size={18} style={{ color: 'var(--charcoal)' }} />
              </button>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 mb-2">
              {dayNames.map(d => (
                <div key={d} className="cal-day font-golos text-xs text-[var(--muted-text)] uppercase font-semibold cursor-default">{d}</div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const d = i + 1;
                const isStream = STREAM_DAYS.includes(d);
                const isToday = isCurrentMonth && d === today;
                return (
                  <div key={d} className={`cal-day ${isStream ? 'stream' : ''} ${isToday && !isStream ? 'today' : ''}`}>
                    {d}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex gap-5 mt-5 pt-4 border-t border-[var(--border-clr)]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-[var(--charcoal)]" />
                <span className="font-golos text-xs text-[var(--muted-text)]">День стрима</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-md border-2" style={{ borderColor: 'var(--amber)' }} />
                <span className="font-golos text-xs text-[var(--muted-text)]">Сегодня</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly schedule */}
        <div className="fade-up fade-up-delay-2 space-y-3">
          <h2 className="font-oswald font-semibold text-xl text-[var(--charcoal)] uppercase tracking-wide mb-5">
            Расписание недели
          </h2>
          {schedule.map((s, i) => (
            <div
              key={s.day}
              className={`fade-up fade-up-delay-${i + 1} card-white p-4 flex items-center gap-4`}
            >
              <div className="text-2xl w-10 flex-shrink-0 text-center">{s.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-oswald font-semibold text-[var(--charcoal)]">{s.day}</span>
                  <span className="font-oswald font-bold text-lg" style={{ color: 'var(--amber)' }}>
                    {s.time} <span className="text-sm font-normal text-[var(--muted-text)]">{s.tz}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-golos text-sm text-[var(--muted-text)]">{s.game}</span>
                  <span className="tag-sm text-xs py-0.5">{s.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telegram CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="fade-up card-white p-8 flex flex-col md:flex-row items-center gap-6"
          style={{ background: '#EFF9FF', borderColor: '#BAE6FD' }}>
          <div className="w-16 h-16 rounded-2xl bg-[#26A5E4] flex items-center justify-center flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-oswald font-bold text-2xl text-[var(--charcoal)] uppercase">Не пропусти старт!</h3>
            <p className="font-golos text-[var(--muted-text)] mt-1">
              Уведомление в Telegram придёт за 15 минут до начала стрима
            </p>
          </div>
          <a
            href="https://t.me/xkmaysh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark whitespace-nowrap flex-shrink-0"
            style={{ background: '#26A5E4' }}
          >
            Подписаться
          </a>
        </div>
      </div>
    </div>
  );
}
