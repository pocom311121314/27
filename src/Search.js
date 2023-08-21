import { useEffect, useState } from "react";
import { Stock } from "./Stock";
import "./app.css";
import Table from "./Table";
import axios from "axios";


 /////SEARCH ON A DATATABLE

function App() {
  const [query, setQuery] = useState("");
  const keys = ["image", "title", "price"];
   const Search = (data) => {
     return data.filter((item) =>
       keys.some((key) => item[key].toLowerCase().includes(query))
     );
   };
 return (
   <div className="app">
       <input
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       />
     {<Table data={Search(Stock)} />}
   </div>
 );
 }

export default App;