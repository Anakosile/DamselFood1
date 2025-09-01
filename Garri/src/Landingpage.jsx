import { Search } from "lucide-react"; // icon
import { Outlet, ScrollRestoration } from "react-router-dom";

function LandingPage () {
  return (
    <div className="space-y-12">
    <nav className="flex items-center justify-between py-3 max-w-7xl mx-auto px-5 lg:px-1 shadow-sm bg-white sticky top-0 z-10">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">DamselFood</h1>

        {/* Search (responsive) */}
        <div className="flex items-center">
            {/* Mobile: Only icon */}
            <button className="md:hidden p-2">
            <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Tablet & Desktop: Full search bar */}
            <div className="hidden md:flex items-center px-3 py-2 border border-blue-700 rounded-full focus-within:ring-1 focus-within:ring-blue-600">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search for product..."
                className="bg-transparent outline-none focus:outline-none text-sm"
            />
            </div>
        </div>
        </nav>  
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Outlet />
        <Footer />
    </div>
  );
};

export default LandingPage;

const Footer =() => {
    return(
        <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>

                    <p className="text-gray-300">
                        We are a team dedicated to providing the best products and services to our customers.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>

                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Services</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Contact</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">About</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>

                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline text-gray-300">Facebook</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">X</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">Instagram</a></li>
                        <li><a href="#" className="hover:underline text-gray-300">WhatsApp</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
                <p>©2024 Code With Codeweb. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
