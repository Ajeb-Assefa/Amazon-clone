import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="LucMatton Men's African Dashiki Luxury Metallic Gold Printed Mandarin Collar Shirt"
            price={31.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
            alt=""
          />
          <Product
            id="49538094"
            title="Shop activity trackers and smartwatches"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy Tab A8 10.5” 32GB Android Tablet w/ LCD Screen, Long Lasting Battery, Kids Content, Smart Switch, Expandable Memory, US Version, Dark Gray"
            price={169.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61krikJxTmL._AC_SX450_.jpg"
          />
          <Product
            id="23445930"
            title="Deco Home Compact Washing Machine with Twin Tub for Wash and Spin Dry, Portable, Built-in Gravity Drainage System, Agitation Wash Cycles, Use Less Soap and Water, for Dorms, Apartments, RVs"
            price={129.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51UVxOwdrAL._AC_SX679_.jpg"
            data-old-hires="https://m.media-amazon.com/images/I/51UVxOwdrAL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Canon EOS 7D 18 MP CMOS Digital SLR Camera Body Only (discontinued by manufacturer))"
            price={749.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91+aKRgKy9L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="345903850"
            title="Epson Home Cinema 3200 4K PRO-UHD 3-Chip Projector with HDR"
            price={109.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/61sPzK6lQWL._AC_SX679_.jpg"
          />
          <Product
            id="923445930"
            title="Hewlett Packard Enterprise HPE ProLiant ML110 G10 4.5U Tower Server - 1 x Xeon Silver 4208-16 GB RAM HDD SSD - Serial ATA/600 Controller"
            price={1529.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81nNETV8pBS._AC_SY879_.jpg"
            data-old-hires="https://m.media-amazon.com/images/I/51UVxOwdrAL._AC_SL1500_.jpg"
          />
          <Product
            id="4554354345"
            title="hrm Automatic T-Shirt Printing Machine Printer Tshirt Machine for Sweatshirts/Hoodies/Pants/Jeans etc,A3 dtg + ink"
            price={5699}
            rating={5}
            image="https://m.media-amazon.com/images/I/61dwu282jKL._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="LG 49WL95C-WE 32:9 UltraWide Monitor 49"
            price={1332}
            rating={5}
            image="https://m.media-amazon.com/images/I/717V3tRw7+L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
