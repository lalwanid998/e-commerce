import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext';


const About = ({myData}) => {
  const {myName} = useProductContext();

  const data = {
    name: "Thapa Ecommerce"
  };
  return (
    <>
    {myName}
    <HeroSection myData={data}/>{" "}
    </>
  )
}

export default About