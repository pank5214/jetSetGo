import "./App.css";
import ContactUs from "./components/ContactUs";
import  Footer from "./components/Footer";
import  Header from "./components/Header";
import  LowestFare  from "./components/LowestFare";
import  ProfessionalExp  from "./components/ProfessionalExp";
import  Services  from "./components/Services";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ContactUs />
      <Header />
      <Services />
      <LowestFare />
      <ProfessionalExp />
      <Footer />
    </div>
  );
};

export default App;
