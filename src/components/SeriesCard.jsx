export const SeriesCard = (props) =>{
  console.log(props);
  const {img_url,name,rating,description,genre,watch_url} =props.data;
    return(
        <li>   
        <div>
          <img 
                src={img_url} 
                alt="name" 
                width="50%"
                height="40%" />
          <h2>Name: {name} </h2>
          <h3>Safety Ratings : {rating} Star</h3>
          <p>Summary: {description}</p>          {/*//variables can be used in JSX */}
          <p>Genre : {genre}</p>   {/* We can use fuctions as dynamically insert data*/}
          <a href={watch_url }target="_blank">
          <button>Watch Now</button>
          </a>
          {/* <button>{age<18?"Not Available":"Watch Now"} </button>    COMMENT *Conditional Rendering  */}
        </div>
      </li>
    )
}