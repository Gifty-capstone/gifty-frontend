import './GiftCard.css';
import gift from '../../assets/gift1.png'
import { FaTrash } from 'react-icons/fa';

const GiftCard = ({title, purchased, id, removeGift, purchaseGift}) => {

  const handlePurchase = () => {
    purchaseGift(id)
  }

  const handleTrashClick = () => {
    removeGift(id)
  }

  return (
    <section className="gift-card">
      <h3 className='gift-title'>{title}</h3>
      <img src={gift} alt="Gift avatar" className="gift-avatar"/>
      {purchased === "purchased" &&
      <p>Purchased</p>}
      {purchased !== "purchased" &&
      <button onClick={handlePurchase} className="gift-card-button">Mark as purchased</button>}
      <FaTrash onClick={handleTrashClick}/>
    </section>
  )
}

export default GiftCard;
