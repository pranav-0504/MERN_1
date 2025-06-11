import { Link } from "react-router-dom";
import "../components/error.css";

export const ErrorPage404 = () => {
    return (
        <>
            <section className="error-page">
                <div className="error-container">
                    
                    <h1>ERROR - 404 </h1>
                    
                    <br />
                    <br />
                    
                    <h2>Page Not Found</h2>
                    
                    <p>
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    <Link to = "/" className="btn-home">
                        Click Here To Go Back To Home Page
                    </Link>
                
                </div>
            </section>
        </>
    );
};




