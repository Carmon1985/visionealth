import { useEffect, useRef, useState } from 'react'
import { asset } from '../../utils/asset'

function CountUp({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const startTime = performance.now()
                    const numericEnd = parseInt(end) || 0

                    function animate(now) {
                        const elapsed = now - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * numericEnd))
                        if (progress < 1) requestAnimationFrame(animate)
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(node)
        return () => observer.unobserve(node)
    }, [end, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
    { value: 30, suffix: '+', label: 'Years Serving Orlando' },
    { value: 10000, suffix: '+', label: 'Patients Served' },
    { value: 3, suffix: '', label: 'Board-Certified Doctors' },
]

export default function Experience() {
    return (
        <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
            {/* Dark background */}
            <div className="absolute inset-0 bg-charcoal">
                <img
                    src={asset('/images/experience-bg.jpg')}
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14 reveal">
                    <p className="caption !text-gold mb-4">Why Vision Health Institute</p>
                    <h2 className="heading-section text-cream">
                        A Legacy of Exceptional Care
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                            <div className="font-serif font-light text-5xl md:text-7xl text-cream mb-3">
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="gold-line mx-auto mb-4" />
                            <p className="text-cream/60 text-sm uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
