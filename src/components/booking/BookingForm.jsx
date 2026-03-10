import { useState } from 'react'
import Calendar from './Calendar'
import TimeSlots from './TimeSlots'
import ConfirmationModal from './ConfirmationModal'

const appointmentTypes = [
    'Comprehensive Eye Exam',
    'Contact Lens Fitting',
    'Emergency Visit',
    'Pediatric Eye Exam',
    'Dry Eye Consultation',
    'Follow-up Visit',
]

export default function BookingForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', notes: '' })
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [errors, setErrors] = useState({})

    const updateField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }))
    }

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = 'Name is required'
        if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email is required'
        if (!form.phone.trim()) errs.phone = 'Phone number is required'
        if (!form.type) errs.type = 'Please select an appointment type'
        if (!selectedDate) errs.date = 'Please select a date'
        if (!selectedTime) errs.time = 'Please select a time'
        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return
        setShowConfirmation(true)
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                {/* Form — 2 cols */}
                <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
                    {/* Personal Info */}
                    <div>
                        <h3 className="heading-card text-charcoal mb-6">Personal Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-charcoal mb-1.5 block">Full Name</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => updateField('name', e.target.value)}
                                    placeholder="John Smith"
                                    className={`input-field ${errors.name ? '!border-red-400' : ''}`}
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-medium text-charcoal mb-1.5 block">Phone</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => updateField('phone', e.target.value)}
                                    placeholder="(407) 555-0123"
                                    className={`input-field ${errors.phone ? '!border-red-400' : ''}`}
                                />
                                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-sm font-medium text-charcoal mb-1.5 block">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => updateField('email', e.target.value)}
                                placeholder="john@example.com"
                                className={`input-field ${errors.email ? '!border-red-400' : ''}`}
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Appointment Type */}
                    <div>
                        <h3 className="heading-card text-charcoal mb-6">Appointment Details</h3>
                        <label className="text-sm font-medium text-charcoal mb-1.5 block">Appointment Type</label>
                        <select
                            value={form.type}
                            onChange={(e) => updateField('type', e.target.value)}
                            className={`input-field appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B6560%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] ${errors.type ? '!border-red-400' : ''}`}
                        >
                            <option value="">Select type...</option>
                            {appointmentTypes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type}</p>}
                    </div>

                    {/* Calendar */}
                    <div>
                        <label className="text-sm font-medium text-charcoal mb-3 block">Preferred Date</label>
                        {errors.date && <p className="text-red-400 text-xs mb-2">{errors.date}</p>}
                        <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />
                    </div>

                    {/* Time slots */}
                    <div>
                        <label className="text-sm font-medium text-charcoal mb-3 block">Preferred Time</label>
                        {errors.time && <p className="text-red-400 text-xs mb-2">{errors.time}</p>}
                        <TimeSlots selectedDate={selectedDate} selectedTime={selectedTime} onSelect={setSelectedTime} />
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="text-sm font-medium text-charcoal mb-1.5 block">Additional Notes <span className="text-muted font-normal">(optional)</span></label>
                        <textarea
                            value={form.notes}
                            onChange={(e) => updateField('notes', e.target.value)}
                            placeholder="Any special requirements or information for your visit..."
                            rows={3}
                            className="input-field resize-none"
                        />
                    </div>

                    {/* Submit — visible on mobile (since summary is below) */}
                    <button type="submit" className="btn-primary w-full !py-4 text-base lg:hidden">
                        Request Appointment
                    </button>
                </form>

                {/* Summary Card — sticky on desktop */}
                <div className="hidden lg:block">
                    <div className="sticky top-28">
                        <div className="bg-white rounded-2xl p-6 border border-sand shadow-sm">
                            <h3 className="font-serif text-xl text-charcoal mb-6">Your Appointment</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between pb-4 border-b border-sand">
                                    <span className="text-muted">Type</span>
                                    <span className="text-charcoal font-medium">{form.type || '—'}</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-sand">
                                    <span className="text-muted">Date</span>
                                    <span className="text-charcoal font-medium">
                                        {selectedDate
                                            ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                            : '—'}
                                    </span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-sand">
                                    <span className="text-muted">Time</span>
                                    <span className="text-charcoal font-medium">{selectedTime || '—'}</span>
                                </div>
                                <div className="pt-2">
                                    <p className="text-muted text-xs leading-relaxed">
                                        400 N. Bumby Ave.<br />
                                        Orlando, FL 32803
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="btn-primary w-full !py-3.5 mt-6"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showConfirmation && (
                <ConfirmationModal
                    booking={{ ...form, date: selectedDate, time: selectedTime }}
                    onClose={() => setShowConfirmation(false)}
                />
            )}
        </>
    )
}
