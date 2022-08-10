import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddCart } from '../actions/actions';


export const Featured = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(state => state.reducer)
    const featuredProduct = products.filter((item) => item.featured === true)
    const product = featuredProduct[0]
    
    console.log(product);

    const addCart = () => {
        dispatch(startAddCart(product))
    }

    if (!product) return

    return (
        <div>
            <div className="featured__title">
                <h1>{product.name}</h1>
                <button
                    onClick={addCart} >
                    Add to cart
                </button>
            </div>

            <div className="featured__image">
                <img src={product.image.src} alt={product.image.alt} />
                <div className="featured__image__footer">
                    Photo of the day
                </div>
            </div>

            <div className="featured__description__container">
                <div>
                    <h5 className="featured__description__title">
                        About The {product.name}
                    </h5>
                    <h6 className="featured__description__category">
                        {product.category}
                    </h6>
                    <p className="featured__description__text">
                        {product.description}
                    </p>
                </div>

                <div>
                    <h5 className="featured__also__title">
                        People also buy
                    </h5>
				    
                    <div className="featured__also__images">
						{product.people_also_buy.map((img, idx) => (
                            <div key={idx} className="featured__also__img">
                                <img src={img.image.src} alt={img.image.alt} />
                            </div>
                        ))
                        }
					</div>
                </div>
            </div>

        </div>
      
    )
}
