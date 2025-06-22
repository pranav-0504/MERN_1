import { useState } from "react";

import "../components/login-form.css";

import { useNavigate } from "react-router-dom"; 

export const Login = () => {    
    
    // // return <h1> Welcome to Login Page </h1>;

    //! Using React Hooks to Fetch the info email and password filled in the form:
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        console.log(e);

        let name = e.target.name;
        let value = e.target.value.trim();      // to avoid leading spaces During Login

        setUser({
            ...user,
            [name]: value,          // dynamic always hoga
        })
    };

    // Handling Login form Submission
    const handleSubmit = async (e) => {
        
        e.preventDefault();

        //? alert(`Email: ${user.email} \n Password: ${user.password}`);
        console.log(user);          // printing on console

        // Ab Backend se DB se data check karna h na bhai ab

        try{
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(user),
            });

            if(response.ok ){                           //! === true
                // means data post ho jayega!
                alert("Login Successful");
                setUser({email: "", password: "" });
                navigate("/");          // home page pe redirect ho jayega apne aap
            }
            else{
                alert("Wrong Credentials");
                console.log("Invalid Credentials, Wrong X");
            }

            // console.log(response);
        }
        catch(error){
            console.log("login Error: ", error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-Registeration">
                        
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img 
                                    src="/images/login-page.png" 
                                    alt="Filling the login form"
                                    width = "411"
                                    height = "450"
                                /> 
                            </div>

                            {/* NOW WE HAVE TO Make Registraion form now: */}

                            <div className="registration-form">
                                <h1 className="main-heading mb-3"> Login Form </h1>

                                <form onSubmit = { handleSubmit } >

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

                                    <button type="submit" className="btn btn-submit"> Login  </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );

};


    // return (
    //     <>
    //         <section>
    //             <main>

    //                 <div className="section-login">

    //                     <div className="container grid grid-two-cols">

    //                         <div className="login-image">
    //                             <img 
    //                                 src="/images/login-page.png" 
    //                                 alt="login-page" 
    //                                 width="300"
    //                                 height="300"
    //                             />
    //                         </div>

    //                         {/* Now Login form banayenge: */}

    //                         <div className="login-form">

    //                             <h1>Login Form</h1>

    //                         </div>
    //                     </div>
    //                 </div>
    //             </main>
    //         </section>
    //     </>
    // );