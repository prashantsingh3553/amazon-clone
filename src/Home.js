import React from 'react'
import './Home.css'
import Product from './Product';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>

                <Carousel  autoPlay stopOnHover={false} infiniteLoop={true}  className='home_image' showThumbs={false} showStatus={false} renderIndicator={false}>
                    <div>
                        <img
                            
                            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/TallHero_1500X600_1._CB405352815_.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB406681182_.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/MusicalInstruments/JBL/AKGWEEKSEPT/Tall-Hero_1500x600px_._CB405630975_.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/slide8/09/PL_Slide8_GWPC_1500x600_1-men._CB405247109_.jpg"
                            alt=""
                        />
                    </div>
                </Carousel>

                <div className="home_section">
                    <div className="home_row">
                        <Product
                            id="1"
                            title="Apple iPhone 11 Pro Max (256GB) - Space Grey"
                            price={123899.00}
                            image="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SX466_.jpg"
                            rating={4.5}
                        />
                        <Product
                            id="2"
                            title="Generic Men Korean Running Shoes Flying Woven Sneakers Breathable Light Increasing Height 8"
                            price={899.0}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/31pAs6s1SgL.jpg"
                        />
                        <Product
                            id="3"
                            title="pTron Bassbuds Lite V2 in-Ear True Wireless Bluetooth Headphones (TWS) with Mic - (Black)"
                            price={799.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/51KM0EyQKNL._SX425_.jpg"
                            rating={4.5}
                        />
                        <Product
                            id="4"
                            title="STOON Gaming Headset, for Xbox One PS4 Headset"
                            price={3499.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/71QQ9%2BJY8kL._SX679_.jpg"
                            rating={4}
                        />

                    </div>

                    <div className="home_row">
                        <Product
                            id="5"
                            title="Samsung LC 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5128 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC>SX355_.jpg"
                        />
                        <Product
                            id="6"
                            title="Samsung 24 inch (60.4 cm) IPS, 3 Side Bezel Less Flat LED Monitor (Dark Blue Gray) 75 Hz - LS24R356FHWXXL"
                            price={10416.00}
                            image="https://images-na.ssl-images-amazon.com/images/I/91TS0uHjMbL._SX679_.jpg"
                            rating={4}
                        />
                    </div>

                    <div className="home_row">
                        <Product
                            id="7"
                            title="Tobo PS4 Controller Charging Station Dock Stand"
                            price={3999.00}
                            image="https://images-na.ssl-images-amazon.com/images/I/711twnqFcKL._SX679_.jpg"
                            rating={4.5}
                        />
                        <Product
                            id="8"
                            title="HP Omen X 2S Core i9 9th Gen 15.6-inch Dual Screen Gaming Laptop"
                            price={344119.00}
                            image="https://images-na.ssl-images-amazon.com/images/I/91Bh3qgdTgL._SY450_.jpg"
                            rating={4.5}
                        />
                        <Product
                            id="9"
                            title="Pictek Wired 7200 DPI Mouse"
                            price={4799.00}
                            image="https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._SX679_.jpg"
                            rating={4.5}
                        />
                        <Product
                            id="10"
                            title="Diesel Analog Black Dial (Big Dial) Men's Watch-DZ7425"
                            price={18196.00}
                            image="https://images-na.ssl-images-amazon.com/images/I/811We6UQHdL._UX679_.jpg"
                            rating={4.5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;