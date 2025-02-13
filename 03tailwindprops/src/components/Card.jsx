import React from 'react'

function Card(){
    return(
        <div>
            <img src="https://images.unsplash.com/photo-1735822081075-2afd7a7e7ba1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='text-3xl bg-green-500 p-3 rounded-md'>A card for photos</h1>
            <p>Some description</p>
        </div>
    )
}

export default Card