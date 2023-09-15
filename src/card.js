import useFetch from "./useFetch";

const Card = ({user_name}) => {

  const {data,error} = useFetch('https://api.github.com/users/'+user_name);
  const repos = `https://github.com/${user_name}?tab=repositories`
  const profile = `https://github.com/${user_name}`;

  if(error){
   return <div className = "err">{error} Search again!!</div>
    
  }
  if(!data){
   return <div>Loading....</div>
  }

  
  return ( 

    <div className="display-card">
      <h1>{data.name}</h1>
      <img className = "profile" src={data.avatar_url} alt="Github profile"></img>
      
      <div className="info">
      <p>{data.bio}</p>
      <ul>
        <li>Followers: {data.followers}</li>
        <li>Following: {data.following}</li>
      </ul>
        <p>Total public repos : {data.public_repos}</p>
        <p>Account created on : {data.created_at.slice(0,10)}</p>
        <p>Last posted on : {data.updated_at.slice(0,10)}</p>
        <p>Profile : <a target="_blank" rel="noopener noreferrer" href={profile}>Click here</a></p>
        <p>Repos URL : <a target="_blank" rel="noopener noreferrer" href={repos}>Click here</a> </p>
      
      
      </div>
      
      
    </div>

   );
}
 
export default Card;