
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyFirstFunctionComp() {

    const divStyle = {
        margin: '10px', // You can adjust the margin value as needed
      };
      
  

    const [uname, setuserName] = useState();
    const [password, setuserpassword] = useState();

    const setuserNameValue = (event) => {
        setuserName(event.target.value);
    }
    const setuserPassword = (event) => {
        setuserpassword(event.target.value);
    }

    const hadlesubmit = (event) => {
        event.preventDefault();

        if (uname === password) {
            alert("you are successfully logged in ???");
        }

        else {
            alert("please check your credentials")
        }

    }

    return (

        
        <React.Fragment>


            <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="border p-4">
                
            <div className="form-group">
                <label for="uname">User Name</label>
                <input type="text" className="form-control" id="uname" name="uname" placeholder="input userName" onChange={setuserNameValue}></input>

            </div>
            <div className="form-group">
                <label for="password"> User password</label>
                <input type="password" className="form-control" id="upassword" name="upassword" placeholder="input password" onChange={setuserPassword}></input>
            </div>

            <div style={divStyle}>
                <button  onClick={hadlesubmit} className="btn btn-primary">submit</button>
            </div>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default MyFirstFunctionComp;