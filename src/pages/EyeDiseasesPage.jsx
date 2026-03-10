import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { asset } from '../utils/asset'
import eyeDiseases from '../data/eyeDiseases'

export default function EyeDiseasesPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <img src={asset('/images/hero-eye-diseases.png')} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sand/85" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Link to="/services" className="caption text-sage hover:text-sage-dark transition-colors mb-6 inline-block reveal">
                        ← Back to Services
                    </Link>
                    <p className="caption mb-4 reveal">Know Your Eyes</p>
                    <h1 className="heading-hero text-charcoal reveal">Eye Diseases</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        A look at some of the most common eye diseases diagnosed and treated 
                        at Vision Health Institute in Orlando. For more in-depth information, 
                        please speak with your eye care provider.
                    </p>
                </div>
            </section>

            {/* Diseases */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-16">
                        {eyeDiseases.map((disease) => (
                            <div key={disease.id} className="reveal">
                                <div className="gold-line mb-4" />
                                <h2 className="heading-card text-charcoal mb-4">{disease.name}</h2>
                                <p className="text-muted leading-relaxed mb-4">{disease.description}</p>
                                <p className="text-muted leading-relaxed">{disease.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related conditions note */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center reveal">
                        <h2 className="heading-section text-charcoal mb-6">Comprehensive Disease Management</h2>
                        <p className="body-large text-muted leading-relaxed mb-4">
                            Vision Health Institute has the experience and equipment necessary to diagnose and often 
                            treat the eye diseases detailed above, as well as many other eye conditions, at our office in Orlando.
                        </p>
                        <p className="body-large text-muted leading-relaxed mb-10">
                            We also diagnose and manage eye conditions such as cataracts, dry eye syndrome, keratoconus, 
                            and other vision problems including myopia, hyperopia, astigmatism, and presbyopia.
                        </p>
                        <Link to="/book" className="btn-primary">Schedule an Appointment</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
