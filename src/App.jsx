import {NetflixSeries ,Footer} from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />  
      <Footer/> { /* Here the component called it will execute all the code in this component   */}
    </>  //react Fragment code syntax it removes one non required node 
  )
};

