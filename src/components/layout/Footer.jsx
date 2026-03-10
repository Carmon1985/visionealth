import { Link } from 'react-router-dom'
import clinicInfo from '../../data/clinicInfo'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-charcoal text-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-serif text-xl mb-4">Vision Health Institute</h3>
                        <p className="text-cream/60 text-sm leading-relaxed mb-4">
                            The leading provider of quality vision care products and personalized 
                            optometric services in Orlando since {clinicInfo.history.founded}.
                        </p>
                        <div className="flex gap-4">
                            <a href={clinicInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-cream transition-colors" aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href={clinicInfo.social.yelp} target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-cream transition-colors" aria-label="Yelp">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.986-4.4c.564-.83 1.872-.436 1.872.565v3.467c0 .22-.08.432-.225.592l-.462-.027zm-8.127 5.016l1.56-4.96c.3-.953 1.727-.953 2.027 0l1.56 4.96c.2.636-.36 1.247-1.013 1.1l-2.06-.462a1.07 1.07 0 01-.534-.276l-.44-.44c-.367-.366-.367-.96 0-1.327l-.1.405zm-3.2-1.074l4.027-2.96c.776-.57 1.727.354 1.354 1.313l-1.974 5.07c-.373.96-1.74.694-1.74-.34v-.907c0-.22.08-.432.225-.593l.288-.288-2.18-1.295zm-.82-5.28l3.96 3.1c.763.6.32 1.78-.633 1.68l-5.04-.52c-.953-.1-1.16-1.394-.293-1.847l1.34-.7c.2-.104.43-.146.653-.12l.013.407zm3.947-5.683l-1.62 4.94c-.313.953-1.74.953-2.04 0l-1.5-4.587c-.2-.614.333-1.214.973-1.1l3.16.634c.447.087.807.434.907.873l.12.24z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl mb-4">Quick Links</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/" className="text-cream/60 hover:text-cream transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-cream/60 hover:text-cream transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-cream/60 hover:text-cream transition-colors">Services</Link></li>
                            <li><Link to="/patients" className="text-cream/60 hover:text-cream transition-colors">Patients</Link></li>
                            <li><Link to="/contact" className="text-cream/60 hover:text-cream transition-colors">Contact</Link></li>
                            <li><Link to="/book" className="text-cream/60 hover:text-cream transition-colors">Book Appointment</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-serif text-xl mb-4">Services</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/services/eye-exams" className="text-cream/60 hover:text-cream transition-colors">Eye Examinations</Link></li>
                            <li><Link to="/services/diagnostics" className="text-cream/60 hover:text-cream transition-colors">Advanced Diagnostics</Link></li>
                            <li><Link to="/services/eye-diseases" className="text-cream/60 hover:text-cream transition-colors">Eye Diseases</Link></li>
                            <li><Link to="/services/optilight" className="text-cream/60 hover:text-cream transition-colors">OptiLight by Lumenis</Link></li>
                            <li><Link to="/services/eyewear" className="text-cream/60 hover:text-cream transition-colors">Eyewear & Contacts</Link></li>
                            <li><Link to="/services/pediatric" className="text-cream/60 hover:text-cream transition-colors">Pediatric Vision</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-xl mb-4">Find Us</h3>
                        <address className="not-italic text-cream/60 text-sm leading-relaxed mb-4">
                            {clinicInfo.address}<br />
                            {clinicInfo.city}, {clinicInfo.state} {clinicInfo.zip}<br />
                            <a href={clinicInfo.phoneTel} className="hover:text-cream transition-colors">{clinicInfo.phone}</a><br />
                            <a href={`mailto:${clinicInfo.email}`} className="hover:text-cream transition-colors">{clinicInfo.email}</a>
                        </address>
                        <div className="text-cream/50 text-xs space-y-1">
                            {clinicInfo.hours.filter(h => h.time !== 'Closed').map((h) => (
                                <div key={h.day} className="flex justify-between">
                                    <span>{h.day.slice(0, 3)}</span>
                                    <span>{h.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-cream/40 text-xs">
                        © {currentYear} Vision Health Institute. All rights reserved.
                    </p>
                    <p className="text-cream/40 text-xs">
                        Member of <a href="http://visionsourceorlando.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Vision Source Orlando</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
