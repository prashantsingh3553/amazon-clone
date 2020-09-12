import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img
                    className='home_image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home_row">
                    <Product
                        id="2334"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3.5}
                    />
                    <Product
                        id="12345"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="234"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3.5}
                    />
                    <Product
                        id="233"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3.5}
                    />
                    <Product
                        id="2343534"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3.5}
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="1245"
                        title="Samsung LC 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5128 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC>SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;