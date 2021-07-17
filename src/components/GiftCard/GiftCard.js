import './GiftCard.css';
import gift from '../../assets/gift1.png'
import { FaTrash } from 'react-icons/fa';

const GiftCard = ({title, purchased, id, removeGift}) => {

  // const purchaseGift = () => {

  // }

  const handleTrashClick = () => {
    removeGift(id)
  }

  return (
    <section className="gift-card">
      <h3>{title}</h3>
      <img src={gift} alt="Gift avatar" className="gift-avatar"/>
      {purchased === "purchased" && 
      <p>Purchased</p>}
      {purchased !== "purchased" &&
      <button className="gift-card-button">Mark as purchased</button>}
      <FaTrash onClick={handleTrashClick}/>
    </section>
  )
}

export default GiftCard;