import './GiftList.css';
//import { giftMockData } from '../../giftMockData';
import { useEffect, useState } from 'react';
import GiftCard from '../GiftCard/GiftCard';
import { getGifts } from '../../utilities/apiCalls';

const GiftList = ({ id }) => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    getGifts(1, id)
      .then(data => setGifts(data.included)
      )
  },[]);
    
  const giftCards = gifts.map(gift => {
      return (
        <GiftCard 
          title={gift.attributes.name}
          key={gift.id}
        />
      )
    });

  if (gifts.length) {
    return (
    <section className='gift-list-container'>
      {giftCards}
    </section>
  )
  } else {
    return (
      <p>No gifts have been added yet. Don't worry, you'll think of something!</p>
    )
  }
}

export default GiftList;