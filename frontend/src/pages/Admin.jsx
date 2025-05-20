import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Admin() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800">CARD CONVERT Admin dashboard</h2>

      <p className="text-gray-600 mt-3 flex items-center gap-2">
        <FontAwesomeIcon icon={faShoppingCart} />
       
      </p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Learn More
      </button>
    </div>
  )
}
