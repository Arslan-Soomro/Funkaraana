import Navbar from "../Navbar"
import Hero from "../Hero"
import Categories from "../Categories"
import SmartCategory from "../SmartCategory"

const Home = () => {
    return(
        <>
            <Navbar><Hero /></Navbar>
            <div className="my-[80px]"></div>
            <SmartCategory />
        </>
    )
}

export default Home;