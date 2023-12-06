import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
    lat: "-43.9509",
    lng: "-34.4618"
}
}
  }
  const nayoks =['Razzak', 'Jasim','BappaRaj','Illius Kaccan','Manna']

  const product =[
    {
      name:"Photoshop",
      price:'$90.99'
    },
    {
      name:"Illustrator",
      price:'$60.99'
    },
    {
      name:"PDF Reader",
      price:'$6.99'
    },
    {
      name:"Premiere EL",
      price:'$249.99'
    },
  ]
  const [count, setCount] =useState(0)
  const [user, setUser] = useState([])
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h4>Full Name : {person.name}</h4>
          <p>User id : {person.id}</p>
          <p>Email : {person.email}</p>
          <p>Address : {person.address.suite},{person.address.street},{person.address.city}</p>
          <p>Zip Code : {person.address.zipcode}</p>
          <p>Lat : {person.address.geo.lat}</p>
          <p>Lng: {person.address.geo.lng}</p>
        </div>
        <Person name={'Sakib Al. Hasan'} content={'Hero of the year'}/>
        <PersonTWo name={' Tamim Iqbal'} content={'Legend of the year'}/>
        {
          nayoks.map((nayok,i)=>(
            <li key={i}>{nayok}</li>
          ))
        }
        {
          product.map((product,i)=>(
            <Product product={product} key={i}/>
          ))
        }
        <div style={{marginTop:'1rem'}}>
          <h1>Count : {count}</h1>
          <button onClick={()=>setCount(count+1)}>Icrement</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
        <div>
          <h1>Dynamic User : </h1>
          {
            user.map((user,i)=>(
              <Users user={user} key={i}/>
            ))
          }
        </div>
        </div>
      </header>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:'2px solid #22cd37', margin:'10px'}}>
      <h1>
        {props.name}
      </h1>
      <h3>
        {props.content}
      </h3>
    </div>
  )
}

function Users(props){
  const {name,id,username,email} = props.user;
  return(
    <div style={{border:'2px solid #22cd37', margin:'10px'}}>
      <h3>Full Name : {name}</h3>
      <h5>Id : {id}</h5>
      <p>Username : {username}</p>
      <p>Email : {email}</p>
    </div>
  )
}

function PersonTWo(props){
  const personStyle ={
    border:'2px solid #22cd37',
    margin:'10px'
  }
  return(
    <div style={personStyle}>
      <h1>
      {props.name}
      </h1>
      {props.content}
    </div>
  )
}

function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
