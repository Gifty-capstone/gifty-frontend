import './GiftList.css';
import { giftMockData } from '../../giftMockData';
import { useEffect, useState } from 'react';

const GiftList = ({ id }) => {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    const friendGifts = giftMockData.data.find(friend => friend.id === id);

    if (friendGifts) {
      setGifts(friendGifts.gifts)
    };
  },[giftMockData.data, id]);

  return (
    // const giftCards = 

    <section className='gift-list'>
      <h1>test</h1>
    </section>
  )
}

export default GiftList;