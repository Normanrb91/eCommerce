import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddCart } from '../actions/actions';


export const Featured = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(state => state.reducer)
    const featuredProduct = products.filter((item) => item.featured === true)
    const product = featuredProduct[0]
    
    const addCart = () => {
        dispatch(startAddCart(product))
    }

    if (!product) return

    return (
        <div>
            <div className="featured-container-title">
                <h1 className="featured-title">{product.name}</h1>
                <button
                    className="featured-btn"
                    onClick={addCart} >
                    Add to cart
                </button>
            </div>
            <div className="featured-container-image">
                <img
                    src={product.image.src}
                    alt={product.image.alt}
                />
                <div className="featured-footer-image">
                    Photo of the day
                </div>
            </div>


            {/* <div className='flex '>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <h3 className="text-xl font-semibold text-black sm:text-3xl">
                    About the Samurai King Resting
                </h3>
                <h3 className="mt-3 text-lg font-semibold capitalize text-gray-500">
                    {category.title}
                </h3>
                <div className="mt-3 text-gray-500">
                    <p>{description}</p>
                    <p className="mt-10">
                        text to mockup various fonts for a type specimen book.So how did
                        the classical Latin become so incoherent? According to
                        McClintock
                    </p>
                </div>
            </div>


            <div className="mt-10 sm:mt-10 sm:text-left md:mt-0 md:text-right">
                <h3 className="text-2xl font-semibold text-black">
                    People also buy
                </h3>
                <div className="mt-10 flex flex-grow justify-start space-x-6 sm:space-x-8 md:justify-end">
                    
                {recommendations.map((item) => (
                    <div
                        className="relative h-[150px] w-[117px] cursor-pointer sm:h-[150px] sm:w-[117px] md:h-[150px] md:w-[117px]"
                        key={item._key}
                    >
                        <Image
                            src={urlFor(item.asset._ref).url()}
                            layout="fill"
                            objectFit="cover"
                            alt={name}
                        />
                    </div>
                ))}
                </div>
            </div>


            </div> */}

        </div>
      
    )
}
