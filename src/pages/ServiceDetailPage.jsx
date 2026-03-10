import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import serviceCategories from '../data/services'

export default function ServiceDetailPage() {
    const { slug } = useParams()
    const ref = useScrollAnimation()
    const category = serviceCategories.find((c) => c.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!category) return <Navigate to="/services" replace />

    return (
        <div ref={ref}>
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/services" className="caption text-sage hover:text-sage-dark transition-colors mb-4 inline-block reveal">
                        ← Back to Services
                    </Link>
                    <h1 className="heading-hero text-charcoal reveal">{category.title}</h1>
                    <p className="body-large text-muted mt-6 max-w-3xl reveal">{category.description}</p>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="space-y-10">
                            {category.services.map((service, i) => (
                                <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                                    <div className="gold-line mb-4" />
                                    <h2 className="heading-card text-charcoal mb-3">{service.name}</h2>
                                    <p className="text-muted leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section text-charcoal mb-4">Interested in {category.title}?</h2>
                    <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                        Schedule your visit and let our team of specialists take care of you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book" className="btn-primary">Book Appointment</Link>
                        <Link to="/services" className="btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
