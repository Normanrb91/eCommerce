import React from 'react'
import { Product } from './Product'

export const ProductList = () => {

    const products = [
        {
          category: 'People',
          name: 'Read Bench',
          price: 3.89
        },
        {
          category: 'Food',
          name: 'Egg Balloon',
          price: 93.89
        },
        {
          category: 'Food',
          name: 'Egg Balloon',
          price: 93.89
        },
        {
          category: 'People',
          name: 'Man',
          price: 100.00
        },
        {
          category: 'Landmarks',
          name: 'Architecture',
          price: 101.00
        },
        {
          category: 'Landmarks',
          name: 'Architecture',
          price: 101.00
        }
      ]

    return (
        <div className='list'>
        {
          products.map((product, ind) => (
            <Product key={ind} />
          ))
        }
      </div>
    )
}
