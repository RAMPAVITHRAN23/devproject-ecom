import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <p>{error.status}</p>
            <p>{error.statustext}</p>
        </div>
    );
};

export default ErrorPage;
