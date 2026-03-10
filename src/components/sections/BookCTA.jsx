import { Link } from 'react-router-dom'

export default function BookCTA() {
    return (
        <section className="section-padding bg-cream relative overflow-hidden">
            {/* Decorative gold line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                <h2 className="heading-section text-charcoal mb-4">
                    Ready to See Clearly?
                </h2>
                <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                    Schedule your visit in seconds. Your eyes deserve expert care.
                </p>
                <Link to="/book" className="btn-primary text-base">
                    Book Your Appointment
                </Link>
            </div>
        </section>
    )
}
