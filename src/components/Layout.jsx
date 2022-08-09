import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetProduct } from '../actions/actions'
import { Featured } from './Featured'
import { Navbar } from './Navbar'

export const Layout = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetProduct())
  }, [])
  

  return (
    <div className='container'>
      <Navbar />
      <Featured />
    </div>
  )
}
