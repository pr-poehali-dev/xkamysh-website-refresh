import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Icon from '@/components/ui/icon';

const STREAM_DAYS = [2, 5, 7, 12, 14, 16, 19, 21, 23, 26, 28];

const streamSchedule = [
  { day: 'Вторник', time: '21:00 МСК', game: 'Valorant', type: 'Игры' },
  { day: 'Среда', time: '22:00 МСК', game: 'Just Chatting', type: 'Чат' },
  { day: 'Пятница', time: '20:00 МСК', game: 'Genshin Impact', type: 'Игры' },
  { day: 'Суббота', time: '19:00 МСК', game: 'Разное', type: 'Сюрприз' },
  { day: 'Воскресенье', time: '21:00 МСК', game: 'Just Chatting + Q&A', type: 'Чат' },
];

const typeColors: Record<string, string> = {
  'Игры': 'rgba(168,85,247,0.15)',
  'Чат': 'rgba(38,165,228,0.15)',
  'Сюрприз': 'rgba(232,121,249,0.15)',
};

const typeBorders: Record<string, string> = {
  'Игры': 'rgba(168,85,247,0.4)',
  'Чат': 'rgba(38,165,228,0.4)',
  'Сюрприз': 'rgba(232,121,249,0.4)',
};

const typeTextColors: Record<string, string> = {
  'Игры': 'var(--brand-purple)',
  'Чат': '#26A5E4',
  'Сюрприз': 'var(--brand-fuchsia)',
};

export default function SchedulePage() {
  useScrollReveal();

  const now = new Date();
  const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const today = now.getDate();

  const [displayMonth, setDisplayMonth] = useState(currentMonth);
  const [displayYear, setDisplayYear] = useState(currentYear);

  const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  const dayNames = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

  const firstDay = new Date(displayYear, displayMonth, 1).getDay();
  const startDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (displayMonth === 0) { setDisplayMonth(11); setDisplayYear(y => y - 1); }
    else setDisplayMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (displayMonth === 11) { setDisplayMonth(0); setDisplayYear(y => y + 1); }
    else setDisplayMonth(m => m + 1);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="fade-up mb-12">
          <div className="tag mb-4">Расписание</div>
          <h1 className="font-oswald font-bold text-5xl md:text-7xl text-white uppercase leading-tight">
            Когда<br />
            <span className="gradient-text">стримим?</span>
          </h1>
          <div className="flex items-center gap-2 mt-4 text-white/40">
            <Icon name="Globe" size={16} />
            <span className="font-golos text-sm">Ваш часовой пояс: <span className="text-white/70">{userTZ}</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="fade-up">
            <div className="glass rounded-2xl p-6 border border-white/5">
              {/* Month nav */}
              <div className="flex items-center justify-between mb-6">
                <button onClick={prevMonth} className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Icon name="ChevronLeft" size={18} />
                </button>
                <span className="font-oswald font-medium text-lg text-white uppercase tracking-wide">
                  {monthNames[displayMonth]} {displayYear}
                </span>
                <button onClick={nextMonth} className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Icon name="ChevronRight" size={18} />
                </button>
              </div>

              {/* Day names */}
              <div className="grid grid-cols-7 mb-2">
                {dayNames.map(d => (
                  <div key={d} className="calendar-day font-golos text-xs text-white/30 uppercase">{d}</div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: startDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isStream = STREAM_DAYS.includes(day);
                  const isToday = day === today && displayMonth === currentMonth && displayYear === currentYear;
                  return (
                    <div
                      key={day}
                      className={`calendar-day ${isStream ? 'stream-day' : ''} ${isToday ? 'today' : 'text-white/60'}`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-[var(--brand-purple)]/30 to-[var(--brand-fuchsia)]/30 border border-[var(--brand-purple)]/50" />
                  <span className="font-golos text-xs text-white/40">День стрима</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm border-2 border-[var(--brand-purple)]" />
                  <span className="font-golos text-xs text-white/40">Сегодня</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule list */}
          <div className="fade-up fade-up-delay-2 space-y-3">
            <h2 className="font-oswald font-medium text-lg text-white/60 uppercase tracking-wider mb-4">Расписание недели</h2>
            {streamSchedule.map((s, i) => (
              <div
                key={s.day}
                className={`fade-up fade-up-delay-${i + 1} glass-light rounded-xl p-4 flex items-center gap-4 card-hover border`}
                style={{ borderColor: typeBorders[s.type] }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: typeColors[s.type] }}>
                  <Icon name={s.type === 'Игры' ? 'Gamepad2' : s.type === 'Чат' ? 'MessageCircle' : 'Sparkles'} fallback="Circle" size={20}
                    style={{ color: typeTextColors[s.type] }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-oswald font-medium text-white">{s.day}</span>
                    <span className="font-oswald font-bold text-[var(--brand-purple)]">{s.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-golos text-sm text-white/50">{s.game}</span>
                    <span className="tag text-xs py-0.5" style={{ color: typeTextColors[s.type], borderColor: typeBorders[s.type], background: typeColors[s.type] }}>
                      {s.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification CTA */}
        <div className="fade-up mt-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#26A5E4]/20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#26A5E4]/5 to-transparent" />
            <div className="relative glass p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#26A5E4]/10 border border-[#26A5E4]/30 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#26A5E4">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-oswald font-bold text-2xl text-white uppercase">Не пропусти старт!</h3>
                <p className="font-golos text-white/50 mt-1">Подпишись на Telegram-канал — уведомление придёт за 15 минут до стрима</p>
              </div>
              <a href="https://t.me/xkmaysh" target="_blank" rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap flex-shrink-0"
                style={{ background: '#26A5E4' }}>
                Подписаться в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
