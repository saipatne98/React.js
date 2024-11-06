export const SeriesCard = (props) =>{
  console.log(props);
    return(
        <li key={props.key}>   
        <div>
          <img 
                src={props.currEle.img_url} 
                alt="props.currEle.name" 
                width="50%"
                height="40%" />
          <h2>Name: {props.currEle.name} </h2>
          <h3>Safety Ratings : {props.currEle.rating} Star</h3>
          <p>Summary: {props.currEle.description}</p>          {/*//variables can be used in JSX */}
          <p>Genre : {props.currEle.genre}</p>   {/* We can use fuctions as dynamically insert data*/}
          <a href={props.currEle.watch_url }target="_blank">
          <button>Watch Now</button>
          </a>
          {/* <button>{age<18?"Not Available":"Watch Now"} </button>    COMMENT *Conditional Rendering  */}
        </div>
      </li>
    )
}