import About from "../../components/About";
import GetInTouch from "../../components/GetInTouch";
import Hero from "../../components/Hero";
import LensCard from '../../components/Project'

export default function HomePage() {
    return (
       <>
        <Hero/>
        <About/>
        <LensCard/>
        <GetInTouch/>
       </>
    )
}