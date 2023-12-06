import logo from './logo.svg';
import './App.css';

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
        </div>
      </header>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:'2px solid red', margin:'10px'}}>
      <h1>
        {props.name}
      </h1>
      <h3>
        {props.content}
      </h3>
    </div>
  )
}

function PersonTWo(props){
  const personStyle ={
    border:'2px solid red',
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

export default App;
