import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { asset } from '../utils/asset'
import clinicInfo from '../data/clinicInfo'

export default function HistoryPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <img src={asset('/images/hero-history.png')} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sand/85" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Link to="/about" className="caption text-sage hover:text-sage-dark transition-colors mb-6 inline-block reveal">
                        ← Back to About Us
                    </Link>
                    <p className="caption mb-4 reveal">Est. {clinicInfo.history.founded}</p>
                    <h1 className="heading-hero text-charcoal reveal">Our History</h1>
                </div>
            </section>

            {/* Timeline narrative */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="gold-line mb-8 reveal" />

                        <div className="space-y-16">
                            {/* 1989 */}
                            <div className="reveal">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-serif text-gold font-light">1989</span>
                                    <div className="h-px flex-1 bg-gold/30" />
                                </div>
                                <h2 className="heading-card text-charcoal mb-4">The Beginning</h2>
                                <p className="body-large text-muted leading-relaxed">
                                    {clinicInfo.history.narrative[0]}
                                </p>
                            </div>

                            {/* Growth */}
                            <div className="reveal">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-serif text-gold font-light">1990–2012</span>
                                    <div className="h-px flex-1 bg-gold/30" />
                                </div>
                                <h2 className="heading-card text-charcoal mb-4">Growing with Orlando</h2>
                                <p className="body-large text-muted leading-relaxed">
                                    {clinicInfo.history.narrative[1]}
                                </p>
                            </div>

                            {/* Reinvention */}
                            <div className="reveal">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-serif text-gold font-light">2013</span>
                                    <div className="h-px flex-1 bg-gold/30" />
                                </div>
                                <h2 className="heading-card text-charcoal mb-4">Vision Health Institute</h2>
                                <p className="body-large text-muted leading-relaxed">
                                    {clinicInfo.history.narrative[2]}
                                </p>
                            </div>

                            {/* Today */}
                            <div className="reveal">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-serif text-gold font-light">Today</span>
                                    <div className="h-px flex-1 bg-gold/30" />
                                </div>
                                <h2 className="heading-card text-charcoal mb-4">A New Chapter</h2>
                                <p className="body-large text-muted leading-relaxed">
                                    {clinicInfo.history.narrative[3]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission statement */}
            <section className="section-padding bg-sage text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <p className="caption mb-4 text-white/70">Our Mission</p>
                    <h2 className="heading-section mb-6">Excellence Through Innovation</h2>
                    <p className="body-large max-w-2xl mx-auto opacity-90 leading-relaxed">
                        It is our mission to provide the best eye care services possible. We use only the most advanced, 
                        state-of-the-art diagnostic technology and eye care products available. We are committed to 
                        educating our patients and providing personalized eye care services to the people of Orlando.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section text-charcoal mb-4">Be Part of Our Story</h2>
                    <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                        Join the thousands of patients who trust Vision Health Institute with their eye care.
                    </p>
                    <Link to="/book" className="btn-primary">Book Your Appointment</Link>
                </div>
            </section>
        </div>
    )
}
