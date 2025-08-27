const Navbar = () => {
    return (
        <nav class="flex justify-between items-center p-4 bg-white shadow relative">
            <div class="text-xl font-bold text-blue-600">DamselFood</div>

            {/* <!-- Desktop Menu --> */}
            <ul class="hidden md:flex gap-6 text-gray-700 font-medium">
                <li><a href="#" class="hover:text-blue-500 transition font-bold">Home</a></li>
                <li><a href="#" class="hover:text-blue-500 transition font-bold">Service</a></li>
                <li><a href="#" class="text-blue-500 hover:underline font-bold">About</a></li>
                <li><a href="#" class="text-blue-500 hover:underline font-bold">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;