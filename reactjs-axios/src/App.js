import axios from 'axios';
import React,{useEffect,useState} from 'react'
import './App.css';

function App() {

  const [items, setItems] = useState([]);

   useEffect(()=>{
      callAPI();
   },[])
   

   const callAPI = async() => {
     const results = await axios.get('https://imageuplodingnode.herokuapp.com/products');
       setItems(results.data)
   }

  return (
    <div className="App">
     <div>React-Axios response</div>
     {
       items.map(item => 
         <div key={item._id}>
           <h4>ID : {item._id} <br></br>Name : {item.name} <br></br>  ProductImage : {item.productImage}</h4>
         </div>
           
       )
     }
    </div>
  );
}

export default App;
