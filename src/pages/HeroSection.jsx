import First from '../components/Hero/First'
import Second from '../components/Hero/Second'

const HeroSection = () => {

    return (
        <section
            id="about"
            className="hero-main w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center px-5 md:px-[50px] xl:px-[250px] pt-6 sm:pt-10 lg:pt-0 pb-6 lg:pb-0 lg:min-h-screen overflow-hidden"
        >
            <First />
            <Second />
        </section>


    );

}

export default HeroSection