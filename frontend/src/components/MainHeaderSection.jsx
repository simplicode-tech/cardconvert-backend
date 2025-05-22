import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faCreditCard } from "@fortawesome/free-solid-svg-icons";
// header section 
export const MainHeaderSection = () => {
      return(
        <section className="w-full mx-auto p-2 flex items-center rounded bg-gray-900">
        <div className='w-sm p-4 m-1 flex items-center font-bold rounded-md border bg-gray-100'> 
         <h1 className='text-md'>Card Convert <FontAwesomeIcon icon={faCreditCard}/></h1>
       </div>
       <div className='w-screen flex justify-evenly font-bold'>
          <Link to='/loginpage' className="p-4 m-2 bg-gray-900 text-white rounded-md border"><FontAwesomeIcon icon={faUser}/></Link>
          <FontAwesomeIcon icon={faBell} className='text-xl text-white p-4 border m-2 rounded-md' Alert/>
        </div>
        </section>
      )
     };