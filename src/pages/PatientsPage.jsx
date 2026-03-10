import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import clinicInfo from '../data/clinicInfo'

export default function PatientsPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <img src="/images/hero-patients.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sand/85" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="caption mb-4 reveal">Patient Resources</p>
                    <h1 className="heading-hero text-charcoal reveal">For Our Patients</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        Everything you need to prepare for your visit and get the most out of your appointment.
                    </p>
                </div>
            </section>

            {/* Resources */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {/* Insurance */}
                        <div className="p-8 bg-white rounded-2xl shadow-sm reveal">
                            <div className="gold-line mb-4" />
                            <h2 className="heading-card text-charcoal mb-4">Insurance Information</h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>
                                    Vision Health Institute accepts most major vision and medical insurance plans. 
                                    We recommend contacting our office before your appointment to verify your coverage and benefits.
                                </p>
                                <p>
                                    For questions about your insurance coverage or out-of-pocket costs, 
                                    please call us at{' '}
                                    <a href={clinicInfo.phoneTel} className="text-sage font-medium hover:underline">
                                        {clinicInfo.phone}
                                    </a>.
                                </p>
                            </div>
                        </div>

                        {/* Patient Forms */}
                        <div className="p-8 bg-white rounded-2xl shadow-sm reveal">
                            <div className="gold-line mb-4" />
                            <h2 className="heading-card text-charcoal mb-4">Patient Forms</h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>
                                    To help your visit go as smoothly as possible, we encourage you to complete your 
                                    patient forms before arriving at our office. This allows us to dedicate more time 
                                    to your examination and care.
                                </p>
                                <p>
                                    If you are a new patient, please arrive 15 minutes early to complete any 
                                    remaining paperwork. Don't forget to bring your insurance card, a valid photo ID, 
                                    and a list of any current medications.
                                </p>
                            </div>
                        </div>

                        {/* What to bring */}
                        <div className="p-8 bg-white rounded-2xl shadow-sm reveal">
                            <div className="gold-line mb-4" />
                            <h2 className="heading-card text-charcoal mb-4">What to Bring</h2>
                            <ul className="space-y-3 text-muted">
                                {[
                                    'Insurance card (vision and/or medical)',
                                    'Valid photo ID',
                                    'List of current medications',
                                    'Current eyeglasses and/or contact lenses',
                                    'Sunglasses (in case of dilation)',
                                    'Your referral, if applicable',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 bg-sage rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Reviews */}
                        <div className="p-8 bg-white rounded-2xl shadow-sm reveal">
                            <div className="gold-line mb-4" />
                            <h2 className="heading-card text-charcoal mb-4">Leave Us a Review</h2>
                            <p className="text-muted leading-relaxed mb-6">
                                Your feedback helps us improve and lets others know about the quality care 
                                they can expect at Vision Health Institute.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href={clinicInfo.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline text-sm"
                                >
                                    Review on Facebook
                                </a>
                                <a 
                                    href={clinicInfo.social.yelp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline text-sm"
                                >
                                    Review on Yelp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-sand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section text-charcoal mb-4">Ready for Your Visit?</h2>
                    <p className="body-large text-muted mb-10 max-w-lg mx-auto">
                        Schedule your appointment today and experience the Vision Health Institute difference.
                    </p>
                    <Link to="/book" className="btn-primary">Book Your Appointment</Link>
                </div>
            </section>
        </div>
    )
}
