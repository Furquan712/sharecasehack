import React from "react";
import imr from "../data/SCTR_0014.png";

const SS001 = () => {
  const submit = () => {
    let your_basket = [
      {
        variety: "regular",
        tradingsymbol: "ICICIBANK",
        exchange: "BSE",
        transaction_type: "BUY",
        order_type: "MARKET",
        quantity: 1,
        readonly: false,
      },
      {
        variety: "regular",
        tradingsymbol: "HDFCBANK",
        exchange: "BSE",
        transaction_type: "BUT",
        order_type: "MARKET",
        quantity: 3,
        readonly: false,
      },
    ];

    document.getElementById("basket").value = JSON.stringify(your_basket);
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src={imr} />
          </div>
          <div style={{ margin: "20px" }}>
            <h1 style={{ fontSize: "42px" }}>Watch the Bank</h1>
            <p>A share case to watch the bank</p>
          </div>
        </div>

        <div>
          <h1 style={{ color: "green", fontSize: "24px", fontWeight: "600" }}>
            CAGR: 15.6%
          </h1>
          <p>for 3 years</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "40px 10px",
          justifyContent: "space-around",
        }}
      >
        <table
          style={{
            border: "1px solid black",
            fontSize: "20px",
            width: "75%",
            textAlign: "center",
          }}
        >
          <tr style={{ padding: "20px" }}>
            <th style={{ padding: "20px" }}>Stock Code</th>
            <th style={{ padding: "20px" }}>Stock Price</th>
            <th style={{ padding: "20px" }}>Quanity</th>
          </tr>
          <tr style={{ padding: "20px" }}>
            <td style={{ padding: "20px" }}>ICICIBANK</td>
            <td style={{ padding: "20px" }}>905</td>
            <td style={{ padding: "20px" }}>1</td>
          </tr>
          <tr style={{ padding: "20px" }}>
            <td style={{ padding: "20px" }}>HDFCBANK</td>
            <td style={{ padding: "20px" }}>1497</td>
            <td style={{ padding: "20px" }}>3</td>
          </tr>
        </table>
        <div
          style={{ border: "1px solid black", padding: "10px", width: "23%" }}
        >
          <form
            method="post"
            id="basket-form"
            action="https://kite.zerodha.com/connect/basket"
            onSubmit={submit}
          >
            <input type="hidden" name="api_key" value="c6t304545t0ssrv3" />
            <input type="hidden" id="basket" name="data" value="" />
            <button
              style={{
                backgroundColor: "#89CFF0",
                color: "white",
                padding: "8px 10px",
                margin: "3px",
                borderRadius: "4px",
                width: "100%",
              }}
              type="submit"
              
            >
              Invest Now
            </button>
          </form>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "22px" }}>Minimum Investment</h2>
            <br></br>
            <h2 style={{ color: "green", fontSize: "20px" }}>₹5396</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS001;
