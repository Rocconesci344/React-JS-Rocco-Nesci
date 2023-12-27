import logo from '../../assets/imgs/ShopIcon.svg'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CardWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    return(
        <Link to="/cart" className={`flex items-center gap-1 cursor-pointer`}>
        <img src={logo} alt='Cart icon' className='w-8'/>
        <span className='text-white text-2xl'>{ itemsInCart() }</span>
    </Link>
    )
}

export default CardWidget