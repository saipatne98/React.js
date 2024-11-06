import seriesData from "../api/SeriesData.json"
import { SeriesCard } from "./SeriesCard";
// COMPONENT defination 
 const NetflixSeries = () => {
    {/*Component name must be in PascalCasec */ }
  
  
    return (
     <ul> 
      {seriesData.map((currEle)=>
      (<SeriesCard key={currEle.id} currEle ={currEle} />)
      )}
      </ul>
    )
 }    
  
export default NetflixSeries;
