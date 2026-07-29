import App from '../App.jsx';
import Dates from './Dates.jsx'
import ErrorPage from './ErrorPage.jsx';
import Videos from "./Videos.jsx";
import Contact from "./Contact.jsx";


const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    }
]

export default routes;