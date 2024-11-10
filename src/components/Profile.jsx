 function Profile(){
    return(
        <>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                        name= "Sai"
                        age={23}
                        greetings={
                            <div>
                                <strong>Hi Sai ,Have a wonderful Day !</strong>
                            </div>
                        }

            >
                <p>Hobbies : Reading,Treaking</p>
                <button>Contact</button>
            </ProfileCard>


            <ProfileCard
            name= "abhijit"
            age={23}
            greetings={
                <div>
                    <strong>Hi abhijit ,Have a wonderful Day !</strong>
                </div>
            }
            >
                <p>Hobbies : Reading,Treaking</p>
                <button>Contact</button>
            </ProfileCard>

            
        </>
    );
}

export default Profile;

function ProfileCard (props) {
 
    const {name,age,greetings,children}=props;

    return(
        <>
            <h2>Name : {name}</h2>
            <p>Age : {age} </p>
            <p>Greetings : {greetings}</p>
            {children}

        </>


    );
}

