import React, { useState } from "react";
import axios from "axios";
import { Header } from '../components';


const CreateBucket = () => {
  const [bucket, setBucket] = useState([]);
  const [selectedStock, setSelectedStock] = useState([]);

  const elasticSearch = (e) => {
    axios
      .get(`https://sharecase.herokuapp.com/api/stock/search/${e.target.value}`)
      .then((ans) => {
        setBucket(ans.data);
      });
  };

  const select = (e) => {

    axios.get(`https://sharecase.herokuapp.com/api/stocks/${e.target.value}`).then((ans) => {
        const add = {
            name: e.target.value,
            price: ans.data,
            quantity: 1,
          };
          setSelectedStock([...selectedStock, add]);
    })
  };

  const total=()=>{
        let total=0;
        selectedStock.map((stock)=>{
            total+=stock.price*stock.quantity
        })
        return total
  }

  const quantityChange = (e) => {
    const index = e.target.id;
    const newStock = [...selectedStock];
    newStock[index].quantity = e.target.value;
    setSelectedStock(newStock);
  }

  return (
    <div className='<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">'>
      <div style={{textAlign:"center"}}>
      <Header style={{color:"#2636c3"}}title={"Create Your Own Bucket"} />
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <div>
      <img src="https://as2.ftcdn.net/v2/jpg/03/15/29/97/1000_F_315299711_dDSbKjmr4pltUo6pQY6YF6xt6tHZwzZQ.jpg" alt="Girl in a jacket" width="500" height="600"/>
      </div>
      <div>
      <form>
        <div style={{display:"flex",justifyContent:"space-evenly", margin:"10px"}}>
        <label style={{fontSize:"30px", fontWeight:"bold", fontFamily:"serif"}} for="fname">Name</label>
        <input style={{border:"2px solid black", borderRadius:"10px"}} type="text" />
        </div>
        <br />
        <div style={{display:"flex",justifyContent:"space-evenly", margin:"10px"}}>
        <label style={{fontSize:"30px", fontWeight:"bold", fontFamily:"serif"}}  for="fname">Description</label>
        <textarea style={{border:"2px solid black", borderRadius:"10px"}} type="text"></textarea>
        </div>
       
        <div style={{margin:"40px"}}>
          <h2  style={{textAlign:"center", fontSize:"30px", fontWeight:"bold", fontFamily:"serif",}}>Select Your Stocks</h2>
          <div  style={{display:"flex", justifyContent:"space-evenly", margin:"10px"}}>
            <div>
          <input style={{border:"2px solid black", borderRadius:"10px"}} onChange={elasticSearch} placeholder="Stock Code"></input>
             
            </div>
            <div>
            <select name="cars" id="cars" onChange={select}>
  <option value="Select" defaultValue={""} style={{fontSize:"30px", fontWeight:"bold", fontFamily:"serif"}}>
    Select Stock
  </option>
  {bucket.map((item,index) => {
    return <option key={index} value={item}>{item}</option>;
  })}
             </select>
            </div>      
          </div>
         
        </div>
        <div>
          <table>
            <tr>
              <th>Stock Code</th>
              <th>Stock Price</th>
              <th>Quanity</th>
            </tr>
            {selectedStock.map((item,index) => {
              return (
                <tr>
                  <td style={{marginRight:"7px"}}>{item.name}</td>
                  <td style={{marginRight:"7px"}}>{item.price}</td>
                  <td style={{marginRight:"7px"}}><input type="number" onChange={quantityChange} id={index}  defaultValue={1}></input></td>
                </tr>
              );
            })}
          </table>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"30px"}}>
            <h1 style={{fontSize:"30px", fontWeight:"bold", fontFamily:"serif"}}>Total Price: </h1>
            <h1>{total()}</h1>
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"25px", borderRadius:"10px"}}>
        <button style={{backgroundColor:"skyblue", padding:"10px", fontWeight:"bold"}}  type="submit">Create your Case</button>
        </div>
      </form>
      </div>
      </div>
     
     
    </div>
  );
};

export default CreateBucket;
