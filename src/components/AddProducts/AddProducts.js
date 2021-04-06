import axios from 'axios';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faHouseUser,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProducts = () => {

  
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
      const productData = {
        name: data.name,
        price: data.price,
        image:imageURL,

      }
      const url = `http://localhost:5080/addProduct`
      fetch(url,{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
      })

      .then(res => res.json())
    }

    const handleImageSubmit = event => {
        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', 'eaeada892240c3e78235aac2d3a8e400');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          // console.log(response.data.data.display_url)

          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });


    }
    return (

                // side ber


      <div className="container-fluid">
        <div className="row">
        <div className="col-3 bg-secondary color-primary">

        <nav>
          <ul style={{colour:'white',textDecoration:'none'}} className="pt-5">
            <li>
              <Link to="/manageProducts"><h3><FontAwesomeIcon icon={faHouseUser}/>  Manage Products  </h3></Link>
            </li>
            <li>
            <Link to="/admin">
             <h3 > <FontAwesomeIcon icon={faPlusCircle}/>  Add Products </h3>
            </Link>
            </li>
           
          </ul>
        </nav>
        
        </div>

        {/* add  products cart */}
          <div className="col-9">
      <div style={{padding:'0% 5% 5% 5%'}}>
          <h1 >Add Products</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="shadow p-3 mb-5 bg-body rounded">
    
        <input className="form-control" name="name" defaultValue="Product name" ref={register} /> 
        <br/>
        <br/>
        <input  className="form-control" name="price" defaultValue="$200" ref={register} /> 
        <br/>
        <br/>

        <FontAwesomeIcon icon={faDownload}/> <input  className="form-control"  type="file" name="exampleRequired"  onChange={handleImageSubmit}/> 
        <br/>
        <br/>
        
        <input  className="form-control btn btn-success" type="submit" />
        </form>
    </div>


          </div>
          
        </div>
      </div>
       
     
       
    );
};

export default AddProducts;