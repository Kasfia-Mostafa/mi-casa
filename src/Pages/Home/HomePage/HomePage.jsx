import Toggle from "../../../Components/Toggle/Toggle";
import Banner from "../BannerSection/Banner";
import Cards from "../CardSection/Cards";
import CardSwipper from "../CardSwipper/CardSwipper";
import FAQ from "../FAQ/FAQ";

const HomePage = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Cards></Cards>
      <CardSwipper></CardSwipper>
      <Toggle></Toggle>
      <FAQ></FAQ>
      
    </div>
  );
};

export default HomePage;
