import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
           <div className="home__product">
                <Product 
                id="12345"
                title="The Alchemist by Paulo Coelho Paperback"
                price={180}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
                />
                 <Product 
                id="54321"
                title="New Apple iPhone 12 Pro Max (256GB) - Graphite"
                price={139900}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg"
                />
                <Product 
                id="65421"
                title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
                price={37990}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
                />
           </div>

            <div className="home__product">
                 <Product 
                id="12121"
                title="Casio CT-S300 Casiotone 61-Key Touch Sensitive Portable Keyboard (Black)"
                price={8999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61kGEqPliOL._SL1101_.jpg"
                />
                <Product 
                id="34976"
                title="Sleepy Owl Coffee Hot Brew Latte Bags | 10 Brew Bags | 3 Step Latte"
                price={269}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/818zTS%2Bxl1L._SL1500_.jpg"
                />
                <Product 
                id="22558"
                title="Fossil Chronograph Men's Watch (Black Dial Black Colored Strap)"
                price={6597}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/81m6599yfXL._UL1500_.jpg"
                />
           </div>
           <div className="home__product">
                <Product 
                id="65421"
                title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
                price={37990}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
                />
           </div>
            
        </div>
    )
}

export default Home
