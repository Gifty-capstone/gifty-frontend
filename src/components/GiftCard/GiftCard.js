import './GiftCard.css';
import gift1 from "../../assets/gift1.png";

const GiftCard = ({title, image}) => {

  return (
    <section>
      <h3>{title}</h3>
      {/* {console.log(image)} */}
      <img src={image} alt="Gift avatar"/>
      {/* <img src={gift1}></img> */}
      <button>Purchased</button>
    </section>
  )
}

export default GiftCard;