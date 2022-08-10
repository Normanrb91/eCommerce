import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetProduct } from '../actions/actions'
import { Featured } from './Featured'
import { Filter } from './Filter'
import { Navbar } from './Navbar'
import { ProductList } from './ProductList'
import { Sort } from './Sort'

export const Layout = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetProduct())
  }, [])
  

  return (
    <div className='container'>
      <Navbar />
      <Featured />
      <Sort />
      <div className='product-list'>
        <Filter />
        <ProductList />
      </div>
    </div>
  )
}
