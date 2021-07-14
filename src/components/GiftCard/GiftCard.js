import './GiftCard.css';

const GiftCard = ({title, image}) => {

  return (
    <section>
      <h3>{title}</h3>
      <img src={image} alt="Gift avatar"/>
      <button>Purchased</button>
    </section>
  )
}

export default GiftCard;