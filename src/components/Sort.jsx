import React, { useState } from 'react'
import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from 'react-icons/hi'

export const Sort = () => {


    const [isAscendig, setIsAscending] = useState(true)
    const [value, setValue] = useState('price');


    const toggleSort = (orderBy) => {
        if(orderBy === 'asc') setIsAscending(true)
        else if(orderBy === 'des') setIsAscending(false)
        else setIsAscending(null)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    //TODO: useeffect que realize una peticion con el valor del select cada vez que cambioe la dependencia del valor
    //TODO: realizar la peticion con el valor actual del select y en orden ascendente o descendiente  por defecto es ascendente

    return (
        <div className='sort'>
            <div className='sort__container'>
                <span className='sort__title'>Photography</span>
                <span className='sort__slash'> / </span>
                <span className='sort__subtitle'>Premium Photos</span>
            </div>

            <div className='sort__order'>
                {/* sort */}
                <div className='sort__arrow' onClick={() => toggleSort('asc')}>
                    <HiOutlineArrowNarrowUp className={`h-5 w-5 ${isAscendig ? 'text-black' : 'text-gray'}`}  />
                </div>
                <div className='sort__arrow' onClick={() => toggleSort('desc')}>
                    <HiOutlineArrowNarrowDown className={`h-5 w-5 ${!isAscendig ? 'text-black' : 'text-gray'}`} />
                </div>
                <div className='sort__by'>Sort By</div>
                {/* price */}
                <select onChange={handleChange} name='sortBy' className='sort__price-order'>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                </select>
                {/* mobile tap filter */}
                {/* <div onClick={handleMobileFilterView} className="product-list-mobile-sort">
                    <img src={SettingsIcon} alt="mobile settings"/>
                </div> */}
            </div>
      </div>
    )
}
