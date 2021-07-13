import Header from './components/Header';
import FirstDiv from './components/FirstDiv';
import SecondDiv from './components/SecondDiv';
import Challange from './components/Challange';
import OurSolution from './components/OurSolution';
import Customer from './components/Customer';
import Footer from './components/Footer';

import "./components/Header.css";
import "./components/FirstDiv.css";
import './components/Main.css'
import './components/Challenge.css';
import './components/Footer.css';
import './responsive.css';

function App() {
  return (
    <>
      <Header />
      <FirstDiv />
      <SecondDiv />
      <Challange />
      <OurSolution />
      <Customer />
      <Footer />
   </>  
  );
}

export default App;
