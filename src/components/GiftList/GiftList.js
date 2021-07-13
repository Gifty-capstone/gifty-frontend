import './GiftList.css';
import { giftMockData } from '../../giftMockData';
import { useEffect, useState } from 'react';
import GiftCard from '../GiftCard/GiftCard';

const GiftList = ({ id }) => {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    const friendGifts = giftMockData.data.find(friend => friend.id === id);

    if (friendGifts) {
      setGifts(friendGifts.gifts)
    };
    console.log(gifts)
  },[giftMockData.data, id]);

  return (
    // const giftCards = gifts.map(gift => {
    //   return (

    //   )
    // })

    <section className='gift-list'>
      <h1>test</h1>
    </section>
  )
}

export default GiftList;