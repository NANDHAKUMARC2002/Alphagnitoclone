import Navbar from "../components/Navbar/navbar";
import Body from "../components/Body/body";
import Why from "../components/Why/why";
import Service from "../components/Service/service";
import Clients from "../components/Clients/clients";
import Testimonial from "../components/Testimonial/testimonial";
import Contactus from "../components/Contactus/contactus";
import Footer from "../components/Footer/footer"
import About from "../components/About/about";
function Home() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <About/>
      <Why/>
      <Service/>
      <Clients/>
      <Testimonial/>
      <Contactus/>
      <Footer/>


    </div>
  )
}

export default Home
