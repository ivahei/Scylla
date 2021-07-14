import Header from './components/Header';
import MainInfo from './components/MainInfo';
import Overview from './components/Overview';
import Challange from './components/Challange';
import OurSolution from './components/OurSolution';
import Customer from './components/Customer';
import Footer from './components/Footer';

import "./components/Header.css";
import "./components/MainInfo.css";
import './components/Main.css'
import './components/Challenge.css';
import './components/Footer.css';
import './responsive.css';

function App() {
  return (
    <>
      <Header />
      <MainInfo />
      <Overview />
      <Challange />
      <OurSolution />
      <Customer />
      <Footer />
   </>  
  );
}

export default App;
