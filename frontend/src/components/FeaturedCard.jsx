import Button from "../components/Button";

const ProductCard = ({ cardimage, cardcategory, cardrate, carddetails }) => {
  return (
    <div className="max-w-sm border border-gray-600 p-4 rounded-lg bg-gray-100 shadow-lg">
      {/* Image Container */}
      <div className="w-full flex justify-center items-center p-4">
        <figure className="overflow-hidden rounded-lg">
          <img src={cardimage} alt={cardcategory} className="h-40 w-full object-cover rounded-md shadow-md" />
        </figure>
      </div>

      {/* Category Title */}
      <div className="text-center my-4">
        <h3 className="text-lg font-semibold text-gray-800">{cardcategory}</h3>
      </div>

      {/* Price and Action */}
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-gray-900 bg-gray-300 px-4 py-2 rounded-md shadow-md">
          ${cardrate}
        </span>
        <Button value="Trade Now" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg mt-4 transition-all duration-300" />
      </div>

      {/* Details */}
      <p className="mt-4 text-sm text-gray-700 text-center">{carddetails}</p>
    </div>
  );
};

export default ProductCard;