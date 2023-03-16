import './App.css';
import Footer from "./Footer/Footer";
import NewArrivals from "./NewArrivals/NewArrivals";
import CategorySection from "./Category/CategorySection";
import Slider from "./Slider/Slider"
import Header from "./Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Slider/>
            <CategorySection/>
            <NewArrivals/>
            <Footer/>
        </div>
    );
}

export default App;
