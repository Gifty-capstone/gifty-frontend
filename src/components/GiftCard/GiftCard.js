import './GiftCard.css';

const GiftCard = ({title, image}) => {
  return (
    <section>
      <h3>{title}</h3>
      <img src={image}></img>
    </section>
  )
}

export default GiftCard;