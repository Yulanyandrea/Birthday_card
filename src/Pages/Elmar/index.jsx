import { useNavigate } from 'react-router-dom';
import './style.css';
import './cake_style.scss'

const Elmar =()=>{
  const navigate=useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    navigate('/pictures')

  }
  return(
    <div className="containerPage">
      <section className="container__home">
        <h1  className="container__title">Hola Elmar!</h1>
        <button  className="container__button" onClick={handleClick}>Entra Aqui!</button>
      </section>
      <section className="container__cake">
        <div class="cake">
          <div class="plate"></div>
          <div class="layer layer-bottom"></div>
          <div class="layer layer-middle"></div>
          <div class="layer layer-top"></div>
          <div class="icing"></div>
          <div class="drip drip1"></div>
          <div class="drip drip2"></div>
          <div class="drip drip3"></div>
          <div class="candle">
            <div class="flame"></div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Elmar;
