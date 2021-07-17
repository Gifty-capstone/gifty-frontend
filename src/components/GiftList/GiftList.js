import './GiftList.css';
//import { giftMockData } from '../../giftMockData';
import GiftCard from '../GiftCard/GiftCard';

const GiftList = ({ gifts, removeGift, purchaseGift }) => {
  
  const giftCards = gifts.map((gift, index) => {
      return (
        <GiftCard 
          title={gift.attributes.name}
          purchased={gift.attributes.status}
          id={gift.id}
          purchaseGift={purchaseGift}
          removeGift={removeGift}
          key={index}
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