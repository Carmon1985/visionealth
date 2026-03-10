import { useState } from 'react'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Calendar({ selectedDate, onSelect }) {
    const today = new Date()
    const [viewMonth, setViewMonth] = useState(today.getMonth())
    const [viewYear, setViewYear] = useState(today.getFullYear())

    const firstDay = new Date(viewYear, viewMonth, 1).getDay()
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

    const prevMonth = () => {
        if (viewMonth === 0) {
            setViewMonth(11)
            setViewYear(viewYear - 1)
        } else {
            setViewMonth(viewMonth - 1)
        }
    }

    const nextMonth = () => {
        if (viewMonth === 11) {
            setViewMonth(0)
            setViewYear(viewYear + 1)
        } else {
            setViewMonth(viewMonth + 1)
        }
    }

    const isToday = (day) => {
        return day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear()
    }

    const isPast = (day) => {
        const date = new Date(viewYear, viewMonth, day)
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        return date < todayStart
    }

    const isSunday = (day) => {
        return new Date(viewYear, viewMonth, day).getDay() === 0
    }

    const isSelected = (day) => {
        if (!selectedDate) return false
        return day === selectedDate.getDate() && viewMonth === selectedDate.getMonth() && viewYear === selectedDate.getFullYear()
    }

    const handleSelect = (day) => {
        if (isPast(day) || isSunday(day)) return
        onSelect(new Date(viewYear, viewMonth, day))
    }

    const blanks = Array.from({ length: firstDay }, (_, i) => <div key={`blank-${i}`} />)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-sand">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={prevMonth}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-sand transition-colors cursor-pointer bg-transparent border-none text-charcoal"
                    aria-label="Previous month"
                >
                    ←
                </button>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                    {MONTHS[viewMonth]} {viewYear}
                </h3>
                <button
                    onClick={nextMonth}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-sand transition-colors cursor-pointer bg-transparent border-none text-charcoal"
                    aria-label="Next month"
                >
                    →
                </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((d) => (
                    <div key={d} className="text-center text-xs font-medium text-muted py-2">{d}</div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
                {blanks}
                {days.map((day) => {
                    const disabled = isPast(day) || isSunday(day)
                    const selected = isSelected(day)
                    const todayMark = isToday(day)

                    return (
                        <button
                            key={day}
                            onClick={() => handleSelect(day)}
                            disabled={disabled}
                            className={`
                aspect-square flex items-center justify-center rounded-xl text-sm
                transition-all duration-200 cursor-pointer border-none
                ${disabled ? 'text-charcoal/20 cursor-not-allowed bg-transparent' : ''}
                ${selected ? 'bg-sage text-white font-medium shadow-md' : ''}
                ${!selected && !disabled ? 'hover:bg-sage/10 text-charcoal bg-transparent' : ''}
                ${todayMark && !selected ? 'ring-2 ring-gold ring-offset-1' : ''}
              `}
                        >
                            {day}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
