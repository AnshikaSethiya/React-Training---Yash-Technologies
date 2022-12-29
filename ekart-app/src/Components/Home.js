import React, { useContext } from 'react'
import Context from '../Context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

const Home = () => {
    const data = useContext(Context);

    return (
        <div className='home'>
            <Filter />
        <div className='productContainer'>
            {
                data.state.products.map((prod) => {
                    return <SingleProduct prod={prod} />
                })
            }
        </div>
    </div>

)
}

export default Home