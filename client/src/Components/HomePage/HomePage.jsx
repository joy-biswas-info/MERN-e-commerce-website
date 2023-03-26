import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Announcement from "../Navbar/Announcement";
import Navbar from "../Navbar/Navbar";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";


const HomePage = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default HomePage;