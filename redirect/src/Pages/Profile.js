import React from "react";
import{useNavigate, useParams} from 'react-router-dom';

function Profile(){

    let navigate = useNavigate();
    let {username} = useParams();

    return (
        <div>
        If you're here, you're allowed to be here! <br></br>Welcome, {username}
        <button onClick={()=> {
            navigate("/about");
        }}
        >
            {" "}
            Change to about page
            </button>
        </div>
    );
}

export default Profile;