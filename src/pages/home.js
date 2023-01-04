import AboutComponent from "../components/home/About.component"
import ContactComponent from "../components/home/Contact.component"
import PortfolioComponent from "../components/home/Portfolio.component"
import PricingPlanComponent from "../components/home/PricingPlan.component"
import ServicesComponent from "../components/home/Services.component"
import TeamComponent from "../components/home/Team.component"
import TestimonialComponent from "../components/home/Testimonial.component"

export default function HomeComponent(){
    return(
    <>
         
        <AboutComponent />
        <ServicesComponent />
        <PortfolioComponent />
        <PricingPlanComponent />
        <TeamComponent />
        <TestimonialComponent />
        <ContactComponent />
    </>
    )
}