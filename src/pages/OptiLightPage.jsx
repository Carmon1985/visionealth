import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function OptiLightPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <img src="/images/hero-optilight.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sand/85" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Link to="/services" className="caption text-sage hover:text-sage-dark transition-colors mb-6 inline-block reveal">
                        ← Back to Services
                    </Link>
                    <p className="caption mb-4 reveal">Dry Eye Treatment</p>
                    <h1 className="heading-hero text-charcoal reveal">OptiLight by Lumenis</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        Are you struggling with dry eyes? Our team is proud to offer OptiLight by Lumenis, 
                        specially designed to help you find relief from dry eye disease.
                    </p>
                </div>
            </section>

            {/* What is Dry Eye */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="gold-line mb-8 reveal" />
                        <h2 className="heading-section text-charcoal mb-6 reveal">What Is Dry Eye Disease?</h2>
                        <div className="space-y-6 text-muted leading-relaxed reveal">
                            <p>
                                Dry eye disease is an eye condition that occurs when your eyes don't get adequate lubrication 
                                from your tears to keep them moist and comfortable. This is often a result of your eyes not 
                                producing enough tears or producing tears that are low quality.
                            </p>
                            <p>
                                Your tears are made up of 3 distinct layers, all of which work together to keep your eyes healthy and lubricated:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 mt-8 reveal">
                            {[
                                { layer: 'Oily Layer', desc: 'Prevents your tears from evaporating too quickly' },
                                { layer: 'Watery Layer', desc: 'Delivers nutrients to your eyes' },
                                { layer: 'Mucus Layer', desc: 'Keeps your tear film stuck to the surface of your eyes' },
                            ].map((item) => (
                                <div key={item.layer} className="p-5 bg-sand rounded-xl text-center">
                                    <h3 className="font-medium text-charcoal mb-2">{item.layer}</h3>
                                    <p className="text-sm text-muted">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 bg-sand rounded-xl reveal">
                            <h3 className="heading-card text-charcoal mb-3 text-lg">The Role of the Meibomian Glands</h3>
                            <p className="text-muted leading-relaxed">
                                One of the leading causes of dry eye disease is meibomian gland dysfunction. 
                                It occurs when blockages form in your meibomian glands, located around the edges of your eyelid. 
                                These blockages prevent your tear film from getting the oils it needs, causing your tears to 
                                evaporate too quickly, leading to dry eye symptoms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is OptiLight */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="gold-line mb-8 reveal" />
                        <h2 className="heading-section text-charcoal mb-6 reveal">What Is OptiLight by Lumenis?</h2>
                        <div className="space-y-6 text-muted leading-relaxed reveal">
                            <p>
                                OptiLight by Lumenis is a safe, gentle, and effective treatment for dry eye symptoms 
                                caused by meibomian gland dysfunction. This non-invasive procedure is the first and only 
                                FDA-approved intense pulsed light (IPL) treatment for dry eye management.
                            </p>
                            <p>
                                OptiLight uses precise pulses of light, done in the area below the eyes, to reduce dry eye symptoms. 
                                This 10–15 minute procedure can significantly relieve dry eye symptoms by:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-8 reveal">
                            {[
                                'Increasing tear break-up time',
                                'Reducing demodex mites and bacteria around your eyes',
                                'Eliminating blood vessels that contribute to inflammation',
                                'Improving meibomian gland functionality',
                            ].map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                                    <span className="shrink-0 w-2 h-2 bg-sage rounded-full mt-2" />
                                    <span className="text-muted text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Is it right for me */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="gold-line mb-8 reveal" />
                        <h2 className="heading-section text-charcoal mb-6 reveal">Is OptiLight Right for Me?</h2>
                        <div className="space-y-6 text-muted leading-relaxed reveal">
                            <p>
                                While OptiLight by Lumenis is an effective dry eye management solution, we want to make sure 
                                it's right for you. We do not recommend this treatment if you:
                            </p>
                        </div>

                        <ul className="space-y-3 mt-6 reveal">
                            {[
                                'Are taking certain medications, like Accutane',
                                'Have active acne',
                                'Suffer from certain skin disorders',
                                'Are susceptible to keloid scarring',
                                'Have severe scarring',
                                'Have severely sunburned recently',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-muted">
                                    <span className="shrink-0 w-1.5 h-1.5 bg-gold rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="mt-8 text-muted leading-relaxed reveal">
                            Your optometrist is the only person who can determine which dry eye treatment is best 
                            for you and your individual needs. During your next eye exam, ask us if you are a good 
                            candidate for OptiLight by Lumenis.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-sage text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section mb-4">We're Here to Help</h2>
                    <p className="body-large max-w-lg mx-auto mb-10 opacity-90">
                        Our team is here to help you find relief from dry eyes. Book an appointment today 
                        to see how OptiLight by Lumenis can help you.
                    </p>
                    <Link to="/book" className="btn-white">Book an Appointment</Link>
                </div>
            </section>
        </div>
    )
}
