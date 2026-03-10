import useScrollAnimation from '../hooks/useScrollAnimation'
import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import Team from '../components/sections/Team'
import Services from '../components/sections/Services'
import Experience from '../components/sections/Experience'
import Testimonials from '../components/sections/Testimonials'
import BookCTA from '../components/sections/BookCTA'
import Contact from '../components/sections/Contact'

export default function Home() {
    const sectionRef = useScrollAnimation()

    return (
        <div ref={sectionRef}>
            <Hero />
            <Intro />
            <Team />
            <Services />
            <Experience />
            <Testimonials />
            <BookCTA />
            <Contact />
        </div>
    )
}
