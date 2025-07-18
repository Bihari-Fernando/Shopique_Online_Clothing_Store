import React from 'react'
import ItemCard from './ItemCard'

const ItemCardGrid = ({ products }) => {
  return (
    <div className="m-20 dark:bg-gray-900 dark:text-white"> 
      <div className="flex flex-wrap justify-center gap-8">
         {products.length > 0 ? (
          products.map((product, index) => <ItemCard key={index} product={product} />)
        ) : (
          <p className="text-center">No items match your filters.</p>
        )}
      </div>
    </div>
  )
}

export default ItemCardGrid