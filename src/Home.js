import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg"
            className="home__image"
          />

          <div className="home__row">
            <Product
              title="Shoes"
              price={80000}
              image="https://www.highsnobiety.com/static-assets/thumbor/nI3VcQHauvbw62L6WpDwSXoTS3A=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/02/12163548/air-jordan-1-university-blue-release-info-02.jpg"
              rating={8}
            />

            <Product
              title="iphone-15"
              price={1999.99}
              image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              title="Nothing Phone 2"
              price={2999.9}
              image="https://specs-tech.com/wp-content/uploads/2022/05/Nothing-Phone-1-3.jpg"
              rating={3}
            />
            <Product
              title="Samsung A 54"
              price={299.9}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9mW3HagLGXjjASwaAvKZ_SBO08Y2SJdPv88oOi-5dps2CzVcavfKWXsB0tmnR_zK7ro&usqp=CAU"
              rating={4}
            />
            <Product
              title="Oppo Reno 21"
              price={999.9}
              image="https://www.gizmochina.com/wp-content/uploads/2022/05/Oppo-Reno-8-1-500x500.jpg"
              rating={3}
            />
          </div>

          <div className="home__row">
            <Product
              title="TV TV"
              price={1999.9}
              image="https://cdn1.smartprix.com/rx-iEgI4XQtS-w1200-h1200/EgI4XQtS.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
