import './style.css'

function Collection() {
  return (
   <div id='productCard' className='col-4 d-flex justify-content-between flex-column align-items-center p-4 shadow'>

     <div className='col-12 rounded bg-dark d-flex justify-content-between flex-column align-items-center p-2'>
       <img src="https://m.media-amazon.com/images/I/71b3HI25YgL._AC_SX679_.jpg" alt=" " />
     </div>

      <div className='d-flex flex-column justify-content-start align-items-start'>
        <h6>Nothing Phone (3a) 5G </h6>
        <h6>(MQ233)</h6>
      </div>
      <button className="btn btn-dark ps-5 pe-5">Add To Cart</button>

    </div>
  )
}

export default Collection