import React, { useState } from "react";
import axios from "axios";

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
      <h1>CreateBucket</h1>
      <form>
        <label for="fname">Name</label>
        <br />
        <input type="text" />

        <label for="fname">Description</label>
        <br />
        <textarea type="text"></textarea>

        <div>
          <h2>Select Your Stocks</h2>
          <input onChange={elasticSearch} placeholder="Stock Code"></input>

          <select name="cars" id="cars" onChange={select}>
            <option value="Select" defaultValue={""}>
              Select Stock
            </option>
            {bucket.map((item,index) => {
              return <option key={index} value={item}>{item}</option>;
            })}
          </select>
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
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><input type="number" onChange={quantityChange} id={index}  defaultValue={1}></input></td>
                </tr>
              );
            })}
          </table>
        </div>
        <div>
            <h1>Total Price: </h1>
            <h1>{total()}</h1>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBucket;
