import './style.css'

function Collection(props) {
  return (
   <div id='productCard' className='col-4 d-flex justify-content-between flex-column align-items-center p-4 shadow'>

     <div className='col-12 rounded bg-dark d-flex justify-content-between flex-column align-items-center p-2'>
       <img src= {props.img} alt=" " />
     </div>

      <div className='d-flex flex-column justify-content-start align-items-start'>
        <h6>{props.productName} </h6>
        <h6>{props.productCode}</h6>
        <h6>{props.productPrice}</h6>
      </div>
      <button className="btn btn-dark ps-5 pe-5">Add To Cart</button>

    </div>
  )
}

export default Collection