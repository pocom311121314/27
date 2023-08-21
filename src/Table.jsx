//import React from 'react';
//import imgt from 'react';


const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>PRODUCTS</th>
          <th>TITLE</th>
          <th>PRICE</th>
          
          <th>PURCHASE</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <img src={item.image} height={100} width={100} href="https://www.Youtube.com/" />
            <td>{item.title}</td>
            <td>₹{item.price}</td>
            
            <td><a href= {item.purchase} > BUY NOW</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
