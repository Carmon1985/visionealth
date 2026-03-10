import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import doctors from '../data/doctors'

export default function AboutPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="caption mb-4 reveal">Our Story</p>
                    <h1 className="heading-hero text-charcoal reveal">About Vision Health Institute</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        The leading provider of quality vision care products and personalized 
                        optometric services in Orlando since 2013.
                    </p>
                </div>
            </section>

            {/* History preview */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto reveal">
                        <div className="gold-line mb-8" />
                        <h2 className="heading-section text-charcoal mb-6">A Legacy of Care</h2>
                        <div className="space-y-6 body-large text-muted">
                            <p>
                                Vision Health Institute (formerly Perry Eye Care) has been a leading provider of 
                                optometry services and vision care products in the Orlando community since 1989. 
                                Our experienced eye doctors offer comprehensive vision examinations and specialize 
                                in the diagnosis and treatment of a wide array of eye diseases, conditions, and problems.
                            </p>
                            <p>
                                We use advanced diagnostic technology and vision correction products and are committed 
                                to improving the quality of life of persons in the Orlando community through enhanced vision. 
                                We are a member of Vision Source Orlando, a network of eye care professionals dedicated to 
                                providing focused, innovative, and trusted care.
                            </p>
                        </div>
                        <Link to="/about/history" className="inline-block mt-8 caption text-sage hover:text-sage-dark transition-colors">
                            Read Our Full History →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center reveal">
                        <h2 className="heading-section text-charcoal mb-6">Our Philosophy</h2>
                        <p className="body-large text-muted leading-relaxed">
                            It is our mission to provide the best eye care services possible. We use only the most advanced, 
                            state-of-the-art diagnostic technology and eye care products available. We are committed to 
                            educating our patients and providing personalized eye care services to the people of Orlando. 
                            At Vision Health Institute, you will find eye care professionals who genuinely care about your 
                            health and are dedicated to providing exceptional personal service to everyone who walks through our door.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team — Full Bios */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <p className="caption mb-4">Our Doctors</p>
                        <h2 className="heading-section text-charcoal">Meet the Team</h2>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {doctors.map((doc, i) => (
                            <div key={doc.id} className={`flex flex-col md:flex-row items-start gap-8 md:gap-14 reveal ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Photo */}
                                <div className="w-full md:w-2/5 shrink-0">
                                    <Link to={`/about/${doc.slug}`} className="block rounded-2xl overflow-hidden shadow-lg group">
                                        <img
                                            src={`/images/${doc.id}.jpg`}
                                            alt={doc.name}
                                            className="w-full h-72 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&size=400&background=7A8B6F&color=fff&font-size=0.33`
                                            }}
                                        />
                                    </Link>
                                </div>

                                {/* Bio */}
                                <div className="w-full md:w-3/5">
                                    <div className="gold-line mb-4" />
                                    <Link to={`/about/${doc.slug}`} className="hover:text-sage transition-colors">
                                        <h3 className="heading-card text-charcoal mb-1">{doc.name}</h3>
                                    </Link>
                                    <p className="text-sage font-medium text-sm mb-4">{doc.title} — {doc.role}</p>
                                    <p className="text-muted leading-relaxed mb-4">{doc.shortBio}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {doc.specializations.map((spec) => (
                                            <span key={spec} className="text-xs px-3 py-1.5 bg-sand rounded-full text-charcoal font-medium">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to={`/about/${doc.slug}`} className="caption text-sage hover:text-sage-dark transition-colors">
                                        View Full Profile →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section text-charcoal mb-4">Ready to Meet Us?</h2>
                    <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                        Schedule a visit and experience the difference of truly personalized eye care.
                    </p>
                    <Link to="/book" className="btn-primary">Book Your Appointment</Link>
                </div>
            </section>
        </div>
    )
}
