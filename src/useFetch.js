import { useState , useEffect} from 'react';

const useFetch = (url) =>
{

    
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
      fetch(url)
      .then(res=>{
        if(!res.ok){
          throw Error('Could not fetch or find the user data with the provided username!!');
        }
        return res.json();
      })
      .then(data=>{ //data is an local variable;
        setData(data);
        setError(null)
      })
      .catch(err=>{
        setError(err.message);
      })
    },[url]);
    return {data,error};
    
}

export default useFetch;