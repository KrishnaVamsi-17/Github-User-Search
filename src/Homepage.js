//import useFetch from './useFetch';
import Card from './card';
import {useState} from 'react';

const Home = () => {
  const [name,setName] = useState(null);
  const [user,setUser] = useState("");

  const handleSearch= ()=>{
      setName(user);
      setUser("");
  }
  return ( 
    <div className="maindiv">
        <div className="homepage">
        <input type="text" placeholder="Search user" value={user} onChange={(e)=>setUser(e.target.value) } ></input>
        <button className="Button" onClick={handleSearch}>🔎︎</button>
        <div className="carddiv">
        { name!==null && <Card user_name = {name} />}
        {name===null && <div className="heading">Search <span className="heading1">Here!</span></div>}
        </div>
        
      </div>
    </div>
    
   );
}
 
export default Home;