import { useState } from "react";

import "../components/Register.css";
import { useNavigate } from "react-router-dom";


export const Register = () => {
    
    // // return <h1> Welcome to Register Page </h1>;

    //! Using React Hooks:
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    //! Hnadling the iNput Values:
    const handleInput = (e) => {
        console.log(e);

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,                     //! Spread Operator!
            [name]: value,              // Dynamic bana dia hai name ko!
        })
    };

    //! Handling Form SUbmission:
    const handleSubmit = async (e) => {

        e.preventDefault();             // To prevent for refreshing on clicking submit button
        alert("Form Submitted Successfully");

        console.log(user);

        //! therefore bs ab iss USER ko backend ko pass kardenge!  done sirrr!!

        try{
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                // Convert Data from Object to JSON FORMAT
                body: JSON.stringify(user),
                
            });

            //? To Make all input fields khali/Empty Again:
            if(response.ok === true){
                setUser({username: "", email: "", phone: "",password: ""});
                navigate("/login");
            }

            console.log(response);
            
        }
        catch(error){
            console.log("Register: ", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-Registeration">
                        
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img 
                                    src="/images/Register.png" 
                                    alt="Register"
                                    width = "411"
                                    height = "450"
                                /> 
                            </div>

                            {/* NOW WE HAVE TO Make Registraion form now: */}

                            <div className="registration-form">
                                <h1 className="main-heading mb-3"> Registration Form </h1>

                                <form onSubmit = { handleSubmit } >

                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input 
                                            type="text" 
                                            name="username" 
                                            placeholder="Enter The User Name"
                                            id="username" 
                                            required
                                            autoComplete="off"
                                            value = {user.username}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Enter The email"
                                            id="email" 
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />

                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input 
                                            type="numer" 
                                            name="phone" 
                                            placeholder="Enter The phone"
                                            id="phone" 
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />
                                    
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            placeholder="Enter The password"
                                            id="password" 
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />
                                    <br />

                                    <button type="submit" className="btn btn-submit"> Register Now </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};







