

export const App = () => {
  return (
    <>
      <InnovaHycross />   { /* Here the component called it will execute all the code in this component   */}
      <InnovaHycross />
      <InnovaHycross />
    </>  //react Fragment code syntax it removes one non required node 
  )
};


// COMPONENT defination 
const InnovaHycross = () => {
  {/*Component name must be in PascalCasec */ }

  let image = "attitude-black.png";
  let name = "Innova Hycross";
  let rating = 5;
  let summary = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quaerat aliquam, pariatur sint deserunt amet voluptate suscipit veniam ullam ex praesentium numquam facilis dolore vel doloribus ratione ad perferendis maxime!"
  let age =19;
  const returnGenre=()=>{
    const genre ="RomCom";
    return genre;
  }

  const canWatch =()=>{
    if(age>=18){return "Watch Now";}
    else{return "Not Available"}
      
  }



  return (
    <div>
      <div>
        <img src={image} alt="attitude-black.png" width="50%" height="40%" />
        <h2>Name: {name} </h2>
        <h3>Safety Ratings : {rating} Star</h3>
        <p>Summary: {summary}</p>          {/*//variables can be used in JSX */}
        <p>Genre : {returnGenre()}</p>   {/* We can use fuctions as dynamically insert data*/}

        <button>{canWatch()}</button>
       
        {/* <button>{age<18?"Not Available":"Watch Now"} </button>    COMMENT *Conditional Rendering  */}
      </div>
    </div>
  )
}
