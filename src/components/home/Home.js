
import "./home.css";
import ReadStories from "../readstories/ReadStories";
import Download from '../download/Download';
import useFetch from '../useFetch/useFetch';

const Home = () => {
  
  const {data: stories, isPending, error} = useFetch ("http://localhost:4000/stories");

  return ( 
     <div className="home">
      
      <p className="shortstories__container">Click here to <a href="#read__stories">see all stories</a></p>
      
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {stories && <ReadStories stories={stories} title= "All Stories"  />}
      {stories && <Download />}
  
     </div>
   );
}

export default Home;

    
      
        