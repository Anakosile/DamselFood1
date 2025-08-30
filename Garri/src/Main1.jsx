const Main1 = () => {
    return ( 
          <main className="flex px-4  gap-4">
             <div className="bg-blue-500 h-50 w-100 rounded-sm px-8 py-4">
               <div className="flex justify-between">
                 <div>
                   <p className="font-bold text-white text-3xl"></p><br />
                  <p className="font-bold text-white text-3xl">More friends</p>
                  <p className="font-bold text-white text-3xl">More Discount</p>
                 </div>
                    
                    <div className="">
                      <img src="src/assets/img/download (1).jpeg" alt="" className="h-28 w-28 rounded-full"/>
                    </div>
                    </div>
             </div>
             {/* 2 */}
             <div className="bg-green-500 h-50 w-100 rounded-sm px-8  py-4">
               <div className="flex justify-between">
                 <div>
                   <p className="font-bold text-white text-3xl">First Order</p><br />
                  <p className="font-bold text-white text-3xl">First Discount</p>
                 </div>
                    
                    <div className="">
                      <img src="src/assets/img/download (1).jpeg" alt="" className="h-28 w-28 rounded-full"/>
                    </div>
                     </div>
                    <button className="bg-yellow-100 text-green-500 h-10 w-28 font-semibold rounded-xl hover:bg-green-600 hover:text-white">Order now</button>
             </div>
             {/* 3 */}
         <div className="bg-lime-400 h-50 w-100 rounded-sm flex px-8 justify-between py-4">
  <div>
    <p className="font-bold text-2xl text-white">
      Buy two <br /> Get one
    </p>
    <br />
    <p className="font-bold text-2xl text-white">Promo Time</p>
  </div>

  <div className="h-24 w-24 rounded-full bg-amber-800 flex justify-center items-center">
    <p className="text-2xl text-white font-bold animate-roll">Free!</p>
  </div>
</div>

          </main>
     );
}
 
export default Main1;