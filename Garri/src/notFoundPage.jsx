import { Link } from "react-router-dom"; 

const Error = () => {
    return ( 
        <div className="h-screen w-screen font-semibold flex flex-col space-y-8 justify-center items-center">
            <h1 className="text-3xl md:text-6xl">Page not found!</h1>
            <Link className="text-white text-sm md:text-xl px-6 py-3 rounded-lg bg-black " to={'/'}> Back to Home Page</Link>
        </div>
     );
}
 
export default Error;