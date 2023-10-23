import React from 'react'

function Home(props) {
  console.log(props.data)
  return (
    <div>
      <p>{props.data.length}</p>
      <h1>Hello Home</h1>
      <button onClick={() => props.addToCartHandler({price: '$100.00' , name:'iphone'})}>Add To Cart</button>
      <button onClick={() => props.removeToCartHandler()}>Remove To Cart</button>

    </div>
  )
}

export default Home
