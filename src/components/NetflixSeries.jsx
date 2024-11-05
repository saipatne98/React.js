import seriesData from "../api/SeriesData.json"
// COMPONENT defination 
 const NetflixSeries = () => {
    {/*Component name must be in PascalCasec */ }
  
  
    return (
     <ul> 
      {seriesData.map((currEle)=>{
        return(
      <li key={currEle.id}>   //key prop 
        <div>
          <img src={currEle.img_url} alt="attitude-black.png" width="50%" height="40%" />
          <h2>Name: {currEle.name} </h2>
          <h3>Safety Ratings : {currEle.rating} Star</h3>
          <p>Summary: {currEle.description}</p>          {/*//variables can be used in JSX */}
          <p>Genre : {currEle.genre}</p>   {/* We can use fuctions as dynamically insert data*/}
          <a href={currEle.watch_url }target="_blank">
          <button>Watch Now</button>
          </a>
          {/* <button>{age<18?"Not Available":"Watch Now"} </button>    COMMENT *Conditional Rendering  */}
        </div>
      </li>
        )
       
      })}
       </ul>
    )
 }    
  
export default NetflixSeries;
