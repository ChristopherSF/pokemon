import './title.style.scss'
import pokeball from '../../assets/pokeball.png'

export const Title = () => {

    return(
        <div className="title__container">
            <img className="title__container-pokeball" src={pokeball} alt="pokeball" />
            <label className="title__container-title">PokeWeb</label>
        </div>
    )
}

export default Title