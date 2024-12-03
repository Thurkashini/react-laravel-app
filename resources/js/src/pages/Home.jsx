import Header from "./Header";
import cat1 from '../images/cat1.jpg';
const Home = () => {

    return (
        <>
            <Header />
            <div className=" text-center container">
                <br/>
                <img src={cat1} className="img-fluid rounded" alt="cat" />
            </div>
        </>
    )
}
export default Home;