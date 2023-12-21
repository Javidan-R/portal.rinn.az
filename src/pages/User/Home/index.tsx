// import React, { useEffect, useState } from 'react';
// import { GETAPIData } from '../../../HTTP/HTTP';
import { Link } from 'react-router-dom';
import { HomeCard } from '../../../components/HomeCard';

const  homecard =  [
  {
      "id":1,
      "name":"Elektron Xidmətlər",
      "desc":"Sorğu, Tətbiq və Ödəniş xidmətləri",
      "image":"./src/assets/images/services/services.svg"


  },
  {
      "id":2,
      "name":"Qurumlar",
      "desc":"Rəsmi qurumların xidmətləri və əlaqə məlumatları",
      "image":"./src/assets/images/services/Institutions.svg"
  },
  {
      "id":3,
      "name":"Sürətli Kömək",
      "desc":"Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin",
      "image":"./src/assets/images/services/Question.svg"
  }

]

export const Home: React.FC = () => {
  // const [homeCards, setHomeCards] = useState<HomeCardData[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await GETAPIData('/homecard');
  //       console.log('API Response:', response.data);
  //       setHomeCards(response.data);
  //     } catch (error) {
  //       console.error('Error fetching home card data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="container-fluid v-container">
      <div className="row">
        {homecard.length > 0 ? (
          homecard.map((card) => (
            <Link to={card.name}>
            <div className="col-4" key={card.id}>
              <HomeCard
                name={card.name}
                desc={card.desc}
                image={card.image}
              />
            </div>
            </Link>
          ))
        ) : (
          <p>No home cards available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
