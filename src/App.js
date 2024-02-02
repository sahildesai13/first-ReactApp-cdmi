import './App.css';
import Choose from './component/WhyChoose/Choose';
import AboutUs from './component/aboutUs/AboutUs';
import Alumni from './component/alumni/Alumni';
import Courses from './component/courses/Courses';
import Demand from './component/demand/Demand';
import Slider from './component/firstSlider/Slider';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Number from './component/number/Number';
import Partner from './component/partners/Partner';
import TopNav from './component/topNav/TopNav';

function App() {
  return (
    <div className="App">
    <TopNav></TopNav>
    <Header></Header>
    <Slider></Slider>
    <Courses></Courses>
    <AboutUs></AboutUs>
    <Number></Number>
    <Alumni></Alumni>
    <Choose></Choose>
    <Partner></Partner>
    <Demand></Demand>
    <Footer></Footer>
    </div>
  );
}

export default App;
