import './GiftCard.css';

const GiftCard = ({title, image}) => {
  return (
    <section>
      <h3>{title}</h3>
      <img src={image}></img>
      <button>Mark Purchased</button>
    </section>
  )
}

export default GiftCard;