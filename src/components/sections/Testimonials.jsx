import { useState, useEffect } from 'react'

const testimonials = [
    {
        quote: "The team at Vision Health Institute made me feel completely at ease. Their thorough approach to my eye exam caught an issue I didn't even know I had. I'm so grateful for their expertise and genuine care.",
        name: "Sarah M.",
        context: "Patient since 2019",
    },
    {
        quote: "After struggling with dry eyes for years, the OptiLight treatment here changed everything. The doctors took time to explain every option and find what actually worked for me. Truly exceptional care.",
        name: "James R.",
        context: "Dry Eye Patient",
    },
    {
        quote: "I've been bringing my whole family here for over a decade. The pediatric exams are wonderful — my kids actually look forward to their appointments. You can't ask for more than that.",
        name: "Maria L.",
        context: "Patient since 2014",
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="section-padding bg-sand">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center reveal">
                    <p className="caption mb-8">What Our Patients Say</p>

                    <div className="relative min-h-[240px] sm:min-h-[200px]">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-all duration-700 ${i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                                    }`}
                            >
                                <div className="quote-mark mb-2">"</div>
                                <blockquote className="font-serif text-xl sm:text-2xl md:text-[1.75rem] text-charcoal font-light italic leading-relaxed mb-8">
                                    {t.quote}
                                </blockquote>
                                <div className="gold-line mx-auto mb-4" />
                                <p className="font-sans font-medium text-charcoal text-sm">{t.name}</p>
                                <p className="text-muted text-xs mt-1">{t.context}</p>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${i === active ? 'bg-sage w-6' : 'bg-charcoal/20'
                                    }`}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
