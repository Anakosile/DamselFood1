const Footer = () => {
    return (
        <footer class="bg-gray-900 text-gray-300 px-6 py-10">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 
            <!-- Brand & Tagline --> */}
                <div>
                    <h2 class="text-2xl font-bold text-white">DamselFood</h2>
                    <p class="mt-2 text-sm">Fast, fresh, and right at your doorstep.</p>
                </div>

                {/* <!-- Navigation Links --> */}
                <div>
                    <h3 class="text-lg font-semibold text-white mb-2">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#" class="hover:text-blue-400 transition">Service</a></li>
                        <li><a href="#" class="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#" class="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* <!-- Social Media --> */}
                <div>
                    <h3 class="text-lg font-semibold text-white mb-2">Follow Us</h3>
                    <div class="flex gap-4">
                        <a href="#" class="hover:text-blue-400 transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
                            </svg>
                        </a>
                        {/* <!-- Add more icons as needed --> */}
                    </div>
                </div>
            </div>

            {/* <!-- Bottom Bar --> */}
            <div class="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                &copy; 2025 DamselFood. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;