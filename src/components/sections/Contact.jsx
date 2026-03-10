export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14 reveal">
                    <p className="caption mb-4">Visit Us</p>
                    <h2 className="heading-section text-charcoal">Find Us in Orlando</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal">
                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 lg:h-full min-h-[300px]">
                        <iframe
                            title="Vision Health Institute Location"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-81.365%2C28.550%2C-81.355%2C28.558&layer=mapnik&marker=28.554%2C-81.360"
                            className="w-full h-full border-0"
                            loading="lazy"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="heading-card text-charcoal mb-2">Vision Health Institute</h3>
                            <p className="text-muted">
                                400 N. Bumby Ave.<br />
                                Orlando, FL 32803
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-sans font-medium text-charcoal mb-3 uppercase text-sm tracking-wider">Contact</h4>
                            <p className="text-muted mb-1">
                                <strong className="text-charcoal">Phone:</strong>{' '}
                                <a href="tel:4078936222" className="hover:text-sage transition-colors">407-893-6222</a>
                            </p>
                            <p className="text-muted mb-1">
                                <strong className="text-charcoal">Fax:</strong> 407-604-6466
                            </p>
                            <p className="text-muted">
                                <strong className="text-charcoal">Email:</strong>{' '}
                                <a href="mailto:myvisionhealth@gmail.com" className="hover:text-sage transition-colors">myvisionhealth@gmail.com</a>
                            </p>
                        </div>

                        <div>
                            <h4 className="font-sans font-medium text-charcoal mb-3 uppercase text-sm tracking-wider">Office Hours</h4>
                            <table className="w-full text-sm">
                                <tbody>
                                    {[
                                        ['Monday', '8:00am – 6:00pm'],
                                        ['Tuesday', '9:00am – 5:00pm'],
                                        ['Wednesday', '8:00am – 5:00pm'],
                                        ['Thursday', '8:00am – 6:00pm'],
                                        ['Friday', '8:00am – 5:00pm'],
                                        ['Saturday', '8:00am – 2:00pm'],
                                        ['Sunday', 'Closed'],
                                    ].map(([day, hours]) => (
                                        <tr key={day} className="border-b border-sand last:border-0">
                                            <td className="py-2 text-charcoal font-medium">{day}</td>
                                            <td className="py-2 text-muted text-right">{hours}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
