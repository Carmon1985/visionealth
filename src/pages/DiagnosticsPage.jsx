import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import diagnosticTests from '../data/diagnosticTests'

export default function DiagnosticsPage() {
    const ref = useScrollAnimation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref}>
            {/* Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <img src="/images/hero-diagnostics.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sand/85" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Link to="/services" className="caption text-sage hover:text-sage-dark transition-colors mb-6 inline-block reveal">
                        ← Back to Services
                    </Link>
                    <p className="caption mb-4 reveal">Precision Diagnostics</p>
                    <h1 className="heading-hero text-charcoal reveal">Advanced Diagnostic Testing</h1>
                    <p className="body-large text-muted mt-6 max-w-2xl mx-auto reveal">
                        Vision Health Institute is equipped with the most advanced diagnostic testing equipment 
                        to ensure our patients receive the most thorough and complete eye exam possible.
                    </p>
                </div>
            </section>

            {/* Tests */}
            <section className="section-padding bg-cream">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {diagnosticTests.map((test, i) => (
                            <div key={test.id} className="reveal">
                                <div className="flex items-start gap-6">
                                    <div className="shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-sage font-medium text-sm">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="heading-card text-charcoal mb-1">{test.name}</h2>
                                        {test.subtitle && (
                                            <p className="text-sage font-medium text-sm mb-4">{test.subtitle}</p>
                                        )}
                                        <p className="text-muted leading-relaxed">{test.description}</p>
                                    </div>
                                </div>
                                {i < diagnosticTests.length - 1 && (
                                    <div className="h-px bg-sand mt-12 ml-16" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-sage text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                    <h2 className="heading-section mb-4">Schedule Your Exam Today</h2>
                    <p className="body-large max-w-lg mx-auto mb-10 opacity-90">
                        Our highly-trained staff is ready to answer any questions you might have about our diagnostic testing.
                    </p>
                    <Link to="/book" className="btn-white">Book an Exam</Link>
                </div>
            </section>
        </div>
    )
}
