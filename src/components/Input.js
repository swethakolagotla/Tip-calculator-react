import React, { useState } from "react";

function Input() {
  const [state, setState] = useState([]);

  const [total, setTotal] = useState(0);

  const [totaltip, setTotalTip] = useState(0);
  const [customerdata, setCustomerdata] = useState({
    name: "",
    tip: 0,
    service: 0,
    totalamt: 0
  });

  const HandleChange = (event) => {
    setCustomerdata({
      ...customerdata,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name + event.target.value);
  };
  function AddCustomer() {
    customerdata.tip = (customerdata.totalamt * customerdata.service) / 100;
    // console.log(customerdata.service);
    setState([...state, customerdata]);
  }

  const CalculateTotal = () => {
    let tiptotal = 0;
    state.map((ele) => (tiptotal = tiptotal + ele.tip));
    setTotalTip(tiptotal);
    setTotal(state.length);
  };

  return (
    <div className="Main">
      <div className="billamount">
        <p>Enter your bill amount </p>
        <input
          id="Input"
          type="Number"
          name="totalamt"
          onChange={HandleChange}
        />
      </div>

      <div className="billinfo">
        <span className="ServiceName">How Was The Service?</span>
        <select
          id="Input"
          className="Select"
          name="service"
          onChange={HandleChange}
        >
          <option value disabled>
            Choose
          </option>
          <option value="20">Excellent-20%</option>
          <option value="10">Medium-10%</option>
          <option value="5">bad-5%</option>
        </select>
      </div>
      <div className="addcustomer">
        <input
          id="Input"
          placeholder="Customer Name"
          className="CustomerName"
          name="name"
          onChange={HandleChange}
        />
        <button className="btn " onClick={AddCustomer}>
          Add Customer
        </button>
      </div>
      <div className="Customername">
        <h3 className="Customerdata">Customers and Tip Data</h3>
        <ul>
          {state.map((ele,i) => (
            <li key={i}>
                     {ele.name} offering a tip of {ele.tip} rupee
            </li>
          ))}
        </ul>
      </div>

      <div className="table">
        <button className="btn1 " onClick={CalculateTotal}>
          Calculate tip and Customer
        </button>

        <table border="1" cellPadding="5px" className="Table">
          <tbody>
            <tr>
            <th> No.Of Customers </th>
            <th>Tip Amount</th>
          </tr>
          <tr>
            {<td >{total}</td>}
            {<td>{totaltip} </td>}
          </tr>
          </tbody>
           
        </table>
      </div>
    </div>
  );
}

export default Input;
