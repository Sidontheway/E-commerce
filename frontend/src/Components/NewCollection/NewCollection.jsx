import React from 'react'
import './NewCollection.css'
import new_collection from '../Assests/new_collections'
import Item from '../Items/Items'

const NewCollection = () => {
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />

        <div className="collections">
            {new_collection.map((items,i)=>{

                return <Item key = {i} id = {items.id} name = {items.name} image = {items.image} old_price = {items.old_price} new_price = {items.new_price}/>
            })}
        </div>

    </div>
  )
}

export default NewCollection