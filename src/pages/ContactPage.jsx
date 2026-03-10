import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import clinicInfo from '../data/clinicInfo'

export default function ContactPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <img src="/images/hero-contact.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sand/85" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="caption mb-4 reveal">Get in Touch</p>
                    <h1 className="heading-hero text-charcoal reveal">Contact Us</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        We'd love to hear from you. Visit us in Orlando, give us a call, 
                        or schedule an appointment online.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left – Details */}
                        <div className="reveal">
                            <div className="gold-line mb-8" />
                            <h2 className="heading-section text-charcoal mb-8">{clinicInfo.name}</h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="caption mb-2">Address</p>
                                    <a 
                                        href={clinicInfo.mapsUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-charcoal hover:text-sage transition-colors"
                                    >
                                        {clinicInfo.fullAddress}
                                    </a>
                                </div>

                                <div>
                                    <p className="caption mb-2">Phone</p>
                                    <a href={clinicInfo.phoneTel} className="text-charcoal hover:text-sage transition-colors text-lg">
                                        {clinicInfo.phone}
                                    </a>
                                </div>

                                <div>
                                    <p className="caption mb-2">Fax</p>
                                    <p className="text-muted">{clinicInfo.fax}</p>
                                </div>

                                <div>
                                    <p className="caption mb-2">Email</p>
                                    <a href={`mailto:${clinicInfo.email}`} className="text-charcoal hover:text-sage transition-colors">
                                        {clinicInfo.email}
                                    </a>
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <a 
                                        href={clinicInfo.social.facebook} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-sand rounded-full text-sm text-charcoal hover:bg-sage hover:text-white transition-all"
                                    >
                                        Facebook
                                    </a>
                                    <a 
                                        href={clinicInfo.social.yelp} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-sand rounded-full text-sm text-charcoal hover:bg-sage hover:text-white transition-all"
                                    >
                                        Yelp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right – Hours */}
                        <div className="reveal">
                            <div className="gold-line mb-8" />
                            <h2 className="heading-section text-charcoal mb-8">Office Hours</h2>

                            <div className="space-y-4">
                                {clinicInfo.hours.map((h) => (
                                    <div key={h.day} className="flex justify-between items-center py-3 border-b border-sand">
                                        <span className="font-medium text-charcoal">{h.day}</span>
                                        <span className={`text-muted ${h.time === 'Closed' ? 'text-gold' : ''}`}>{h.time}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/book" className="btn-primary w-full text-center">
                                    Schedule an Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map embed */}
            <section className="bg-sand">
                <div className="w-full h-80 md:h-96">
                    <iframe
                        title="Vision Health Institute Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.895!2d-81.362!3d28.547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ac7de83f0a1%3A0x61aae63ecd8e94af!2s400%20N%20Bumby%20Ave%2C%20Orlando%2C%20FL%2032803!5e0!3m2!1sen!2sus!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    )
}
