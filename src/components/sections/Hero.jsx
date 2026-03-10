import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero.jpg"
                    alt="Vision Health Institute"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
                <div className="max-w-2xl">
                    <div className="gold-line mb-6 opacity-80" />
                    <h1 className="heading-hero text-white mb-6">
                        See Life Clearly
                    </h1>
                    <p className="body-large text-white/80 mb-10 max-w-lg">
                        Comprehensive eye care in the heart of Orlando — where advanced technology meets personalized attention.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/book" className="btn-white text-center">
                            Book Your Visit
                        </Link>
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-outline !border-white/60 !text-white hover:!bg-white/10 hover:!text-white text-center cursor-pointer"
                        >
                            Our Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
