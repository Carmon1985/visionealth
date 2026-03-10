import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import serviceCategories from '../data/services'
import { asset } from '../utils/asset'

export default function ServicesPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="caption mb-4 reveal">What We Do</p>
                    <h1 className="heading-hero text-charcoal reveal">Our Services</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        From routine eye exams to advanced diagnostics and specialty treatments,
                        Vision Health Institute offers comprehensive care for your complete eye health.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {serviceCategories.map((cat, i) => (
                            <Link
                                key={cat.slug}
                                to={`/services/${cat.slug}`}
                                className={`block group reveal`}
                            >
                                <div className="flex flex-col sm:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gold/30">
                                    <div className="shrink-0 w-full sm:w-48 h-40 sm:h-32 rounded-xl overflow-hidden">
                                        <img
                                            src={asset(`/images/service-${cat.slug === 'pediatric' ? 'eye-exam' : cat.slug}.jpg`)}
                                            alt={cat.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="heading-card text-charcoal mb-2 group-hover:text-sage transition-colors">{cat.title}</h2>
                                        <p className="text-muted leading-relaxed mb-3">{cat.shortDescription}</p>
                                        <span className="caption text-sage">Explore services →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section text-charcoal mb-4">Not Sure What You Need?</h2>
                    <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                        Book a comprehensive eye exam and our doctors will guide you to the right care.
                    </p>
                    <Link to="/book" className="btn-primary">Book an Exam</Link>
                </div>
            </section>
        </div>
    )
}
