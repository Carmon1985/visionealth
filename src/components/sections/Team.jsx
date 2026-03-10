import { Link } from 'react-router-dom'
import doctors from '../../data/doctors'

export default function Team() {
    return (
        <section id="team" className="section-padding bg-sand">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14 reveal">
                    <p className="caption mb-4">Our Doctors</p>
                    <h2 className="heading-section text-charcoal">
                        Meet the Team
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, i) => (
                        <Link key={doc.id} to={`/about/${doc.slug}`} className={`card reveal reveal-delay-${i + 1} group`}>
                            <div className="h-72 sm:h-80 overflow-hidden">
                                <img
                                    src={`/images/${doc.id}.jpg`}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&size=400&background=7A8B6F&color=fff&font-size=0.33`
                                    }}
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="heading-card text-charcoal mb-1 group-hover:text-sage transition-colors">{doc.name}</h3>
                                <p className="text-sage font-sans text-sm font-medium mb-4">{doc.title} — {doc.role}</p>
                                <p className="text-muted text-sm leading-relaxed">{doc.shortBio}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12 reveal">
                    <Link to="/about" className="btn-outline">
                        Meet Our Team
                    </Link>
                </div>
            </div>
        </section>
    )
}
