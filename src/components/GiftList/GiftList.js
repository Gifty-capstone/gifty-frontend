import './GiftList.css';
import { giftMockData } from '../../giftMockData';
import { useEffect, useState } from 'react';
import GiftCard from '../GiftCard/GiftCard';

const GiftList = ({ id }) => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    const friendGifts = giftMockData.data.find(friend => friend.id === id);

    if (friendGifts) {
      setGifts(friendGifts.gifts)
    };
  },[giftMockData.data, id]);
    const giftCards = gifts.map(gift => {
      return (
        <GiftCard 
          title={gift.name}
          image={gift.image}
          key={gift.id}
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