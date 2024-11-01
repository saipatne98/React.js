

export const App= () => {
  return( 
    <>
          <InnovaHycross />   { /* Here the component called it will execute all the code in this component   */}
          <InnovaHycross />
          <InnovaHycross /> 
    </>  //react Fragment code syntax it removes one un non required node 
  )
};


// COMPONENT defination 
const InnovaHycross = () => { {/*Component name must be in PascalCasec */}
  return(
    <div>
      <div>
        <img src="attitude-black.png" alt="attitude-black.png" 
        width="50%" height="40%" />
        <h2>Name:Innova Hycross</h2>
        <h3>Safety Ratings : 5 Star</h3>

        <p>
          Summary: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quaerat aliquam, pariatur sint deserunt amet voluptate suscipit veniam ullam ex praesentium numquam facilis dolore vel doloribus ratione ad perferendis maxime!
        </p>
      </div>
    </div>
  )
}
