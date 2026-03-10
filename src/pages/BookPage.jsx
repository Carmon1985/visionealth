import { useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import BookingForm from '../components/booking/BookingForm'

export default function BookPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="caption mb-4 reveal">Schedule a Visit</p>
                    <h1 className="heading-hero text-charcoal reveal">Book Your Appointment</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        Select a time that works for you. We'll confirm your appointment within 24 hours.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <BookingForm />
                </div>
            </section>
        </div>
    )
}
