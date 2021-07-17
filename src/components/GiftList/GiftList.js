import './GiftList.css';
import { giftMockData } from '../../giftMockData';
import { useEffect, useState } from 'react';
import GiftCard from '../GiftCard/GiftCard';
import { getGifts } from '../../utilities/apiCalls';
import giftImage from '../../assets/gift3.png';

const GiftList = ({ id }) => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    getGifts(1, id)
      .then(data => setGifts(data.included))
    // if (friendGifts) {
    //   setGifts(friendGifts.gifts)
    // };
  },[gifts, id]);
    
  const giftCards = gifts.map(gift => {
      return (
        <GiftCard 
          title={gift.attributes.name}
          // image={gift}
          key={gift.attributes.id}
        />
      )
    });

  return (
    <section className='gift-list-container'>
      {giftCards}
    </section>
  )  
}

export default GiftList;