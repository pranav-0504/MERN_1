import { useState } from "react";
import "../components/contact.css";

export const Contact = () => {
    
    // // return <h1> Welcome to Contact Me Page </h1>;

    //! Creating hook:
    const [contact, setContact] = useState({

        username: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        console.log(e);
        
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        })
    };
    const handleSubmit = (e) => {
        
        e.preventDefault();
        alert(`Form Submitted Sucessfully`);

        console.log(contact);
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-contact">
                        
                        <div className="container grid grid-two-cols">
                            <div className="contact-image">
                                <img 
                                    src="/images/contact.jpg" 
                                    alt="contact email etc"
                                    width = "411"
                                    height = "450"
                                /> 
                            </div>

                            {/* NOW WE HAVE TO Make Registraion form now: */}

                            <div className="contact-form">
                                <h1 className="main-heading mb-3"> Contact Form </h1>

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
                                            value = {contact.username}
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
                                            value={contact.email}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <textarea 
                                            type="text" 
                                            name="message"
                                            placeholder="Write the Message Here"
                                            id="message"
                                            required
                                            autoComplete="off"
                                            value={contact.message}
                                            onChange={handleInput}
                                            rows="6"     // Adjust as needed
                                            cols="40"    // Optional
                                        ></textarea>

                                    </div>

                                    <br />

                                    <button type="submit" className="btn btn-submit"> Submit Form </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};







