const allSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
]

export default function TimeSlots({ selectedDate, selectedTime, onSelect }) {
    if (!selectedDate) {
        return (
            <div className="text-center py-8 text-muted text-sm">
                Please select a date to see available times.
            </div>
        )
    }

    // Simulate some slots being taken (deterministic based on date)
    const day = selectedDate.getDate()
    const takenIndices = [day % 5, (day * 3) % 10, (day * 7) % 15]
    const availableSlots = allSlots.filter((_, i) => !takenIndices.includes(i))

    // Adjust for Saturday (close at 2pm)
    const dayOfWeek = selectedDate.getDay()
    const slots = dayOfWeek === 6
        ? availableSlots.filter(s => {
            const hour = parseInt(s)
            const isPM = s.includes('PM')
            const h24 = isPM && hour !== 12 ? hour + 12 : (!isPM && hour === 12 ? 0 : hour)
            return h24 < 14
        })
        : availableSlots

    return (
        <div>
            <p className="text-sm text-muted mb-4">
                Available times for{' '}
                <span className="text-charcoal font-medium">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </span>
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {slots.map((time) => (
                    <button
                        key={time}
                        onClick={() => onSelect(time)}
                        className={`
              py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border
              ${selectedTime === time
                                ? 'bg-sage text-white border-sage shadow-md'
                                : 'bg-white text-charcoal border-sand hover:border-sage/50 hover:bg-sage/5'
                            }
            `}
                    >
                        {time}
                    </button>
                ))}
            </div>
            {slots.length === 0 && (
                <p className="text-center py-8 text-muted text-sm">No available slots for this date.</p>
            )}
        </div>
    )
}
