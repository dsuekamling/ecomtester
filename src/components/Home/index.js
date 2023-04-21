import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import BannerCard from './BannerCard';
import POP1 from '../../assets/img/homeBannerOne.jpg';
import POP2 from '../../assets/img/homeBannerTwo.jpg';
import POP3 from '../../assets/img/homeBannerThree.jpg';

function Home () {
  return(
    <div>
      {/* // Render the Hero component */}
      <Hero />
      {/* // Render the Banner component */}
      <Banner />
      {/* // Render the BannerCard component with surfboard image and title/description */}
      <BannerCard 
        image={POP1}
        title="Marvel POPs"
        descr="Collect Them All"
      />
      {/* // Render the BannerCard component with shoes image and title/description */}
      <BannerCard 
        image={POP2}
        title="Popular POPs"
        descr="Fortnite"
      />
      {/* // Render the BannerCard component with shirts image and title/description */}
      <BannerCard 
        image={POP3}
        title="Variety Of POPs"
        descr="Lots of Different POPs"
      />
    </div>
  );
}

export default Home;
