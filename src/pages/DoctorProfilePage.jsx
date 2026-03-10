import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import doctors from '../data/doctors'
import { asset } from '../utils/asset'

export default function DoctorProfilePage() {
    const { slug } = useParams()
    const ref = useScrollAnimation()
    const doc = doctors.find(d => d.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!doc) {
        return (
            <div className="pt-40 pb-20 text-center">
                <h1 className="heading-section text-charcoal">Doctor not found</h1>
                <Link to="/about" className="btn-primary mt-8 inline-block">Back to Team</Link>
            </div>
        )
    }

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/about" className="caption text-sage hover:text-sage-dark transition-colors mb-6 inline-block reveal">
                        ← Back to Our Team
                    </Link>
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">
                        <div className="w-full md:w-2/5 shrink-0 reveal">
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={asset(`/images/${doc.id}.jpg`)}
                                    alt={doc.name}
                                    className="w-full h-72 sm:h-96 object-cover object-top"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&size=400&background=7A8B6F&color=fff&font-size=0.33`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 reveal">
                            <div className="gold-line mb-4" />
                            <h1 className="heading-hero text-charcoal mb-2">{doc.name}</h1>
                            <p className="text-sage font-medium text-lg mb-2">{doc.title} — {doc.role}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {doc.specializations.map((spec) => (
                                    <span key={spec} className="text-xs px-3 py-1.5 bg-cream rounded-full text-charcoal font-medium">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6 body-large text-muted reveal">
                            {doc.fullBio.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                        {doc.personalNote && (
                            <div className="mt-8 p-6 bg-sand rounded-xl reveal">
                                <p className="text-muted italic">{doc.personalNote}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Education & Achievements */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
                        {doc.education && (
                            <div className="reveal">
                                <div className="gold-line mb-4" />
                                <h2 className="heading-card text-charcoal mb-6">Education</h2>
                                <ul className="space-y-3">
                                    {doc.education.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted">
                                            <span className="shrink-0 w-1.5 h-1.5 bg-sage rounded-full mt-2.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {doc.achievements && (
                            <div className="reveal">
                                <div className="gold-line mb-4" />
                                <h2 className="heading-card text-charcoal mb-6">Achievements</h2>
                                <ul className="space-y-3">
                                    {doc.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted">
                                            <span className="shrink-0 w-1.5 h-1.5 bg-gold rounded-full mt-2.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section text-charcoal mb-4">Book an Appointment with {doc.name.split(' ').slice(0, 2).join(' ')}</h2>
                    <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                        Experience personalized care from one of Orlando's finest eye care professionals.
                    </p>
                    <Link to="/book" className="btn-primary">Schedule Now</Link>
                </div>
            </section>
        </div>
    )
}
