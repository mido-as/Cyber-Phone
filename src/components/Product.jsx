function Product() {
  return (


   <div className='container '>
      <div id="productSection" className='col-12 d-flex justify-content-center align-items-center '>

        <div id="productImg" className="col-6  d-flex justify-content-center align-items-center">
          <img src="https://m.media-amazon.com/images/I/71b3HI25YgL._AC_SX679_.jpg" alt="" />
        </div>

        <div id="productInfo" className="col-6  d-flex flex-column gap-4 justify-content-center">

          <h1>Nothing Phone (3a) 5G</h1>

          <div className="d-flex justify-content-start gap-4">
            <h3>$1399</h3>
            <h3 id="discount">$1499</h3>
          </div>

          <p className="col-10">Enhanced capabilities thanks toan enlarged display of 6.7 
            inchesand work without rechargingthroughout the day. 
            Incredible photosas in weak, yesand in bright lightusing
             the new systemwith two cameras</p>

          <div className="d-flex justify-content-start gap-4">
            <button className="btn bg-light btn-outline-dark ps-4 pe-4">Add To Wishlist</button>
            <button className="btn btn-dark ps-5 pe-5">Add To Cart</button>
          </div>

          <div className="d-flex justify-content-start gap-4 col-10 mt-3">

            <div className="d-flex justify-content-start gap-3">
              <button className="productsBtn d-flex justify-content-center- align-items-center"><img src="https://img.icons8.com/?size=100&id=7493&format=png&color=000000" alt="" /></button>
              <h6>Free Delivery <br></br> <span>1-2 day</span></h6>
            </div>

            <div className="d-flex justify-content-start gap-3">
              <button className="productsBtn d-flex justify-content-center- align-items-center"><img src="https://img.icons8.com/?size=100&id=77121&format=png&color=000000" alt="" /></button>
              <h6>In Stock <br></br> <span>Today</span></h6>
            </div>

            <div className="d-flex justify-content-start gap-3">
              <button className="productsBtn d-flex justify-content-center- align-items-center"><img src="https://img.icons8.com/?size=100&id=iWXaTX0OHmpB&format=png&color=000000" alt="" /></button>
              <h6>Guaranteed  <br></br> <span>1 year</span></h6>
            </div>

          </div>


        </div>
      </div>
   </div>


  )
}

export default Product