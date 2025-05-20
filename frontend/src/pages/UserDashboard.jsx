import {Link} from 'react-router-dom'
import Button from '../components/Button';

export default function UserDashboard() {
 // header section 
const MainHeaderSection = () => {
      return(
        <section className="max-w-sm mx-auto p-4 bg-orange-500 flex flex-row sticky rounded">
        <div className=' bg-green-500 p-2 max-w-60 h-15 text-3xl flex items-center font-bold rounded-md'> 
         <h1>Card Convert</h1>
       </div>
       <div className='flex font-bold'>
           <Link to='/' className="p-2 m-2 bg-gray-900 text-white rounded-md">Home</Link>
           <Link to='/loginpage' className="p-2 m-2 bg-gray-900 text-white rounded-md">Account</Link>
        </div>
        </section>
      )
     };
//balance card
const BalanceCard = ({userbalance}) => {
return(
  <div className='max-w-sm mx-auto m-4 h-24 bg-orange-500 border rounded-lg'>
    <h2 className='text-2xl w-1/2 mx-auto text-center m-2 bg-gray-200 rounded-lg'>Wallet Balance</h2>
    <p className='text-center p-4'>N: {userbalance}</p>
  </div>
)
}
  return (
    <div className="bg-gray-500 min-h-screen">
    <MainHeaderSection/>
      <div>
      <BalanceCard/>
      </div>
    </div>
  )
}