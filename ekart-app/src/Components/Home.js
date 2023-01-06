import React, { useContext } from 'react'
import Context from '../Context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

const Home = () => {
    const data = useContext(Context)
    const products=data.state.products
    let {byStock , byFastDelivery , byRating, sort}=data.productState

    const transformedProducts=()=>{
        let sortedProducts=products
        if(sort){
            sortedProducts=sortedProducts.sort((a,b)=>
                sort==='lowToHigh'?a.price-b.price:b.price-a.price
            )
        }
        if(byFastDelivery){
            sortedProducts=sortedProducts.filter((p)=>{
                return p.fastDelivery===true
            })
        }
        if(byRating){
            sortedProducts=sortedProducts.filter((p)=>{
                return p.rating>=byRating
            })
        }

        return sortedProducts
    }
    return (
        <div className='home'>
            <Filter />
            <div className='productContainer'>
                {
                    transformedProducts().map((prod) => {
                        return <SingleProduct key={prod.id} prod={prod} />
                    })
                }
            </div>
        </div>
    )
}

export default Home