const Main2 = () => {
    return (  
        <main className="px-4 py-4">
             <h1 className="text-3xl font-bold mb-6">Just for You</h1>
             <div className="flex justify-between">
                <div className="h-50 w-100 bg-blue-500 rounded-xl">
                    <img src="src/assets/Assect/Whiteee.jpeg" alt="" className="w-screen h-40"/>
                    <p className="text-center font-bold text-2xl text-white">White Garri</p>
                </div>

                <div className="h-50 w-100 bg-blue-500 rounded-xl">
                    <img src="src/assets/Assect/yellow.jpeg" alt="" className="w-screen h-40"/>
                    <p className="text-center font-bold text-2xl text-white">Yellow Garri</p>
                </div>

                <div className="h-50 w-100 bg-blue-500 rounded-xl">
                    <img src="src/assets/Assect/shopping.webp" alt="" className="w-screen h-40"/>
                    <p className="text-center font-bold text-2xl text-white">Ijebu Garri</p>
                </div>

             </div>
        </main>
    );
}
 
export default Main2;