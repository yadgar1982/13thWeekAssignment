import React from 'react'
import '../component/login.css'

function login() {
    return (

        <div class="wrapper">
            <div data-reactroot>
                <div>
                    <div class="container">
                    <div className='flex-container'>
                <form action=" " id="form" vertical="align">
                    <div>
                        <br></br>
                        <label htmlFor='email'className='h6'>Email</label>
                        <input type="text" name="email" id="email"  />
                    </div>
                    <br></br>

                    <div>
                        <label htmlFor='password'className="h6">Password</label>
                    <   input type="password" name="password" id="password" />
                    </div>
                    <br></br>
                    <div>
                        <button className="btn btn-success" id="loginBtn" >Login</button>

                    </div>
                </form>
            

                </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function open(){

    if(`${"#email"}.val() =="yadgar@yahoo.com" && ${"password"}.val()=="123"`){
        alert("your password is correct")
    }
    else{
        alert("your password is worng")
    }
};

export default login