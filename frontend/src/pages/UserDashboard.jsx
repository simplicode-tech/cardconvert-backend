import {Link} from 'react-router-dom'

export default function UserDashboard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800">CARD CONVERT HOME</h2>
<Link to='/loginpage'>UserDashboard</Link>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Learn More
      </button>
    </div>
  )
}