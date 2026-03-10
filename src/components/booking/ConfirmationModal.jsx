import { useEffect } from 'react'

export default function ConfirmationModal({ booking, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl animate-modal-in">
                {/* Checkmark */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h2 className="heading-card text-charcoal text-center mb-2">Appointment Requested!</h2>
                <p className="text-muted text-center text-sm mb-8">
                    Thank you, {booking.name}. We'll confirm your appointment within 24 hours.
                </p>

                {/* Summary */}
                <div className="bg-sand rounded-2xl p-6 space-y-3 text-sm mb-8">
                    <div className="flex justify-between">
                        <span className="text-muted">Type</span>
                        <span className="text-charcoal font-medium">{booking.type}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted">Date</span>
                        <span className="text-charcoal font-medium">
                            {booking.date?.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted">Time</span>
                        <span className="text-charcoal font-medium">{booking.time}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted">Phone</span>
                        <span className="text-charcoal font-medium">{booking.phone}</span>
                    </div>
                </div>

                <button onClick={onClose} className="btn-primary w-full !py-3.5">
                    Done
                </button>
            </div>

            <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in { animation: modal-in 0.3s ease-out; }
      `}</style>
        </div>
    )
}
