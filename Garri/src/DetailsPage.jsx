import ijebu from "./assets/ijebu.jpeg";
import white from "./assets/white.jpeg";
import yellow from "./assets/yellow.jpeg";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Ijebu Garri",
    description: "Fine-grained sour garri, perfect for soakings and eba.",
    price: 2500,
    image: ijebu,
  },
  {
    id: 3,
    name: "White Garri",
    description: "Smooth, less sour garri, great for everyday meals.",
    price: 2000,
    image: white,
  },
  {
    id: 2,
    name: "Yellow Garri",
    description: "Fried with palm oil, nutritious and tasty.",
    price: 2200,
    image: yellow,
  },
];

const UNIT_PRICES = {
  bag: 8000,
  paint: 3000,
};

export default function Details() {
  const { id } = useParams();
  const product = products.find(({ id: item }) => item === parseInt(id));
  const similarProducts = products.filter(
    ({ id: item }) => item !== parseInt(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (!product)
    return <p className="text-center mt-10 text-2xl">Product not found</p>;

  const unitPrice = unit ? UNIT_PRICES[unit] : 0;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <BuySection
        product={product}
        unit={unit}
        setUnit={setUnit}
        quantity={quantity}
        setQuantity={setQuantity}
        unitPrice={unitPrice}
        totalPrice={totalPrice}
        setShowPopup={setShowPopup}
      />
      <SimilarProducts similarProducts={similarProducts} />
    </div>
  );
}

const BuySection = ({
  product: { name, description, image },
  unit,
  setUnit,
  quantity,
  setQuantity,
  unitPrice,
  totalPrice,
  setShowPopup,
}) => {
  return (
    <div className="bg-gray-200">

      <div
        className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {/* Left: Image */}
        <div
          className="flex justify-center items-center"
         >
          <img
            src={image}
            alt={name}
            className="rounded-2xl shadow-lg w-full max-w-[250px] md:max-w-md object-cover"
          />
        </div>

        {/* Right: Details */}
        <div
          className="flex flex-col justify-center p-4 rounded-xl space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="text-lg md:text-2xl font-bold">
            Product name: {name}
          </h1>

          <p className="text-gray-700 text-base md:text-lg">
            <span className="font-semibold">Description:</span> {description}
          </p>

          {/* Detailed Description */}
          <div className="bg-white/90 rounded-lg p-4 shadow">
            <h2 className="text-base md:text-xl font-semibold mb-2">
              Product Details
            </h2>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
              <li>100% organic cassava, processed under hygienic conditions.</li>
              <li>Sun-dried to retain crispness, aroma, and long shelf life.</li>
              <li>Perfect for soaking (with milk/groundnuts) and smooth eba.</li>
              <li>No additives or preservatives—pure, clean taste.</li>
              <li>Packed in moisture-proof bags to keep freshness locked in.</li>
            </ul>
          </div>

          {/* Specifications Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-base md:text-xl font-semibold p-3 md:p-4 border-b bg-gray-50">
              Specifications
            </h3>
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-medium text-gray-700">Weight</td>
                  <td className="p-3 text-gray-600">
                    20kg (bag) / 4kg (paint)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">Origin</td>
                  <td className="p-3 text-gray-600">
                    Ijebu, Ogun State, Nigeria
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">
                    Shelf Life
                  </td>
                  <td className="p-3 text-gray-600">6–12 months</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">Processing</td>
                  <td className="p-3 text-gray-600">Fermented & sun-dried</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">Packaging</td>
                  <td className="p-3 text-gray-600">
                    Sealed moisture-proof bags
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Select Unit */}
          <div className="mb-2 text-base md:text-xl">
            <p className="font-medium mb-2">Choose unit:</p>
            <label className="mr-6">
              <input
                type="radio"
                name="unit"
                value="bag"
                checked={unit === "bag"}
                onChange={(e) => setUnit(e.target.value)}
                className="mr-2"
              />
              Per Bag (₦{UNIT_PRICES.bag.toLocaleString()})
            </label>
            <label>
              <input
                type="radio"
                name="unit"
                value="paint"
                checked={unit === "paint"}
                onChange={(e) => setUnit(e.target.value)}
                className="mr-2"
              />
              Per Paint (₦{UNIT_PRICES.paint.toLocaleString()})
            </label>
          </div>

          {/* Quantity Selector */}
          {unit && (
            <div
              className="text-base md:text-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
                <span className="ml-2">{unit}(s)</span>
              </div>

              <div className="bg-gray-100 rounded-lg p-3 md:p-4 shadow-inner">
                <p className="font-semibold">
                  Price: ₦{unitPrice.toLocaleString()} per {unit}
                </p>
                <p className="font-bold mt-1">
                  Total: ₦{totalPrice.toLocaleString()}
                </p>
              </div>
            </div>
          )}

          {/* Buy Now Button */}
          <motion.button
            onClick={() => setShowPopup(true)}
            disabled={!unit}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: unit ? 1.05 : 1 }}
            className={`${
              unit
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md text-base md:text-xl`}
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const SimilarProducts = ({ similarProducts }) => {
  // Framer Motion variants for nice staggered reveal
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <div className="w-full mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Similar Products</h1>

      <motion.div
        className="flex items-center justify-center flex-col bg-amber-100 md:flex-row rounded-lg gap-6 p-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {similarProducts.map(({ id, name, description, price, image }) => (
          <motion.div
            key={id}
            variants={item}
            className="bg-white p-4 rounded-xl shadow flex flex-col items-center w-72"
          >
            <img
              src={image}
              alt={name}
              className="h-40 w-40 object-cover rounded-full mb-4"
            />
            <p className="font-bold text-xl mb-2">{name}</p>
            <p className="text-gray-600 text-base mb-3 text-center">
              {description}
            </p>
            <p className="text-lg font-semibold mb-3">
              ₦{price.toLocaleString()}
            </p>
           <Link to={`/details/${id}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-lg">
              View
            </button>
          </Link>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
