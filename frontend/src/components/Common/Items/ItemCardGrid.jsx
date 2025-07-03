import React from 'react'
import ItemCard from './ItemCard'

const ItemCardGrid = ({ items }) => {
  return (
    <div className="m-20 dark:bg-gray-900 dark:text-white"> 
      <div className="flex flex-wrap justify-center gap-8">
         {items.length > 0 ? (
          items.map((item, index) => <ItemCard key={index} item={item} />)
        ) : (
          <p className="text-center">No items match your filters.</p>
        )}
      </div>
    </div>
  )
}

export default ItemCardGrid