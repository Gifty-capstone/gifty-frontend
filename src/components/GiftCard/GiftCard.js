import './GiftCard.css';
import gift from '../../assets/gift1.png'

const GiftCard = ({title, image}) => {

  return (
    <section className="gift-card">
      <h3>{title}</h3>
      <img src={gift} alt="Gift avatar" className="gift-avatar"/>
      <button className="gift-card-button">Purchased</button>
    </section>
  )
}

export default GiftCard;