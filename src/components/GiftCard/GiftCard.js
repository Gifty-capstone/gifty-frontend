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
      <div className='bottom-row'>
        <div className='purchase-section'>
          {purchased === "purchased" &&
          <p className='purchased'>Purchased</p>}
          {purchased !== "purchased" &&
          <button onClick={handlePurchase} className="gift-card-button">Mark as purchased</button>}
        </div>
        <FaTrash onClick={handleTrashClick}/>
      </div>
    </section>
  )
}
export default GiftCard;
