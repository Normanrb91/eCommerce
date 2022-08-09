import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetProduct } from './actions/actions'
import { Header } from './components/Header'
import './styles/App.css'


export const App = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetProduct())
  }, [])
  

  return (
    <div className="container">
      <Header />
    </div>
  )
}
