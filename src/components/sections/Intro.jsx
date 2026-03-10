import { asset } from '../../utils/asset'

export default function Intro() {
    return (
        <section className="section-padding bg-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Text — 60% */}
                    <div className="w-full md:w-3/5 reveal">
                        <p className="caption mb-4">Welcome to Vision Health Institute</p>
                        <h2 className="heading-section text-charcoal mb-6">
                            Trusted Eye Care,<br className="hidden sm:block" /> Personalized for You
                        </h2>
                        <p className="body-large text-muted leading-relaxed">
                            Since 1990, Vision Health Institute has been a cornerstone of eye care in the Orlando community.
                            We combine state-of-the-art diagnostic technology with a warm, patient-centered approach — because
                            great vision starts with understanding your unique needs.
                        </p>
                    </div>

                    {/* Image — 40% */}
                    <div className="w-full md:w-2/5 reveal reveal-delay-2">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={asset('/images/clinic-interior.jpg')}
                                alt="Modern eye care clinic interior"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
