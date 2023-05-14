import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {

  const productData = useSelector((state:any) => state.productData)
  

  return (
    <div className='w-full py-10'>
        <div className='w-full flex gap-10'>
            <div className='w-2/3 flex flex-col gap-5'>
              <h1>Cart <span>({productData.length}) items</span></h1>
            </div>
            <div className='w-1/3 p-4 mt-24 h-[500ox] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'></div>
        </div>
    </div>
  )
}

export default CartPage