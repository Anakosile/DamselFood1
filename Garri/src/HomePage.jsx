import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testi from "./assets/testimonialsGarri.jpeg";
import garri from "./assets/garri.jpeg";
import yellow from './assets/yellow.jpeg';
import { Link } from "react-router-dom";

const HomePage = () => {
  return ( 
    <div>
      <CategoryList />
      <PromoCards />
      <Cat />
      <Testi />
    </div>
   );
}
 
export default HomePage;

const CategoryList = () => {
  const [menu, setMenu] = useState(null)
  useEffect( () => {
    fetch("http://localhost:8000/menu")
    .then( res => res.json() )
    .then( data => { return setMenu(data) } )
  }, [] )

  return (
    <div className="bg-gray-50  max-w-7xl mx-auto px-5 lg:px-1 py-4">
      <h1 className="text-3xl text-blue-700 font-semibold text-center mb-8 tracking-tight">Explore Our Categories</h1>
      <div className="flex overflow-x-auto no-scrollbar gap-6 w-full justify-center px-4">
        {menu && menu.map(( {id, name, images} ) => (
          <div key={id} className="flex flex-col items-center min-w-[80px]">
            <div className="w-20 h-20 rounded-full bg-gray-200"><img src={images} alt="" className="w-full h-full rounded-full"/></div>
            <span className="text-sm mt-2">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PromoCards = () => {
  const promos = [
    { color: "bg-blue-500", title: "More Friends \nMore Food", text:'Bring your friends to Damsel Foods \nand get up to 15% off', subset: '*Conditions apply'},
    { color: "bg-red-500", title: "First Order \n First Discount", button: 'Order now'},
    { color: "bg-orange-500", title: "Buy One \nGet One", text:'Buy one, get one free \non your first order', subset: '*Conditions apply'}
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-5 lg:px-1 gap-4">
      {promos.map((promo, i) => (
        <div
          key={i}
          className={`${promo.color} text-white tracking-tight relative rounded-xl p-6 h-40 md:h-54`}
        >
          <p className="whitespace-pre-line font-semibold text-lg md:text-2xl">{promo.title}</p>
          <p className="whitespace-pre-line text-sm md:text-lg">{promo.text}</p>
          {promo.button && <button className="px-4 py-2 md:px-6 md:py-3 rounded-lg bottom-6 bg-white text-red-500 font-semibold absolute text-sm md:text-lg"> {promo.button} <span className="text-lg"> &rarr; </span> </button>}
          {promo.subset && <p className="text-xs lg:text-sm absolute right-4 bottom-5 tracking-normal"> {promo.subset} </p>}
        </div>
      ))}
    </div>
  );
};


const Cat = () => {

    const [categories, setCategories] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null)

     useEffect( () => {
        fetch('http://localhost:8000/categories')
        .then( res => {
            if (!res.ok) { throw Error('Something is wrong with the link')}
            
            return res.json()
        } )
        .then( data =>  {
            setCategories(data);
            setPending(false);
            setError(null);
        } )
        .catch( e => {
            setError(e.message)
            return setPending(false)
        } )
    }, [] )

    return ( 
        <section className="py-16 bg-white max-w-7xl mx-auto px-5 lg:px-1">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-600 font-bold text-or-800 mb-4">
              Our Premium Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of organic garri products, each with unique taste and nutritional benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { error && <div> {error} </div> }
            { pending && <div>Loading, please wait.....</div> }
            {categories && categories.map(({ id, img, title, badge, price, badgeClass, desc }) => (
              <motion.div
                key={id}
                className="category-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: id * 0.2 }}
              >
                <div className="relative h-64">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {badge && (
                    <span
                      className={`absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full shadow ${badgeClass}`}
                    >                        
                      {badge}
                    </span>
                  )}
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
                  <p className="text-gray-600 mb-4">{desc}</p>
                  <p className="text-lg font-semibold text-orange-600">{price}</p>
                  <Link
                    to={`/details/${id}`}
                    className="absolute px-4 py-2 text-white rounded-lg right-5 bottom-4 active:scale-95 hover:bg-white hover:text-blue-800 hover:outline-1 transition-colors duration-500 bg-blue-600"
                    onClick={ () => console.log('Navigating to', `/details/${id}`) }
                  >
                    Buy now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     );
}

const testimonials = [
  {
    name: "Jane Doe",
    role: "Nutritionist",
    feedback:
      "Demsel Fresh Garri is by far the best organic option I've tasted. My clients love the taste and texture!",
    img: testi,
  },
  {
    name: "Chinedu Okoro",
    role: "Local Chef",
    feedback:
      "I always use Demsel Garri in my recipes. The quality is unmatched and it brings out real flavor.",
    img: garri,
  },
  {
    name: "Amina Bello",
    role: "Health Blogger",
    feedback:
      "I love the fact that it's 100% natural. No additives, just pure organic goodness. Highly recommend!",
    img: yellow,
  },
];

const Testi = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    // Auto-slide testimonials
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return ( 
        <section className="py-16 max-w-7xl mx-auto px-5 lg:px-1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto">
              Real feedback from people who love our organic products.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg transition-all duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <img
                  src={testimonials[currentTestimonial].img}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-200"
                />
                <p className="text-lg text-gray-600 mb-4 italic">
                  "{testimonials[currentTestimonial].feedback}"
                </p>
                <h4 className="text-xl font-bold text-green-700">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
     );
}
 