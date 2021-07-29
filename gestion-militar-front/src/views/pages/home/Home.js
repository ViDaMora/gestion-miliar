import React from "react";
import Header from "../../components/Header";

import { Carousel } from "bootstrap";


const Home = () => {

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
