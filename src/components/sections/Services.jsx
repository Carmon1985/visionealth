import { Link } from 'react-router-dom'
import serviceCategories from '../../data/services'
import { asset } from '../../utils/asset'

const serviceImages = {
    'eye-exams': 'images/service-eye-exam.jpg',
    'diagnostics': 'images/service-diagnostics.jpg',
    'treatments': 'images/service-treatments.jpg',
    'eyewear': 'images/service-eyewear.jpg',
}

export default function Services() {
    const mainCategories = serviceCategories.filter(s => s.slug !== 'pediatric')
    const pediatric = serviceCategories.find(s => s.slug === 'pediatric')

    return (
        <section id="services" className="section-padding bg-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14 reveal">
                    <p className="caption mb-4">What We Do</p>
                    <h2 className="heading-section text-charcoal">
                        Our Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {mainCategories.map((cat, i) => (
                        <Link
                            key={cat.slug}
                            to={`/services/${cat.slug}`}
                            className={`card group block reveal reveal-delay-${i + 1}`}
                        >
                            <div className="h-52 sm:h-56 overflow-hidden">
                                <img
                                    src={asset(serviceImages[cat.slug])}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="heading-card text-charcoal mb-2 group-hover:text-sage transition-colors">{cat.title}</h3>
                                <p className="text-muted text-sm leading-relaxed mb-4">{cat.shortDescription}</p>
                                <span className="caption text-sage">Learn more →</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {pediatric && (
                    <div className="text-center mt-10 reveal">
                        <Link to="/services/pediatric" className="btn-outline">
                            Pediatric Vision Care →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
