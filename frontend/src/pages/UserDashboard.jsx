import {Link} from 'react-router-dom'
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function UserDashboard() {
  //transactions components controll
const [isTrans, setIsTrans] = useState(false);
const openTrans = () => {
  setIsTrans(true);
};
const closeTrans = () => {
  setIsTrans(false);
}
 // header section 
const MainHeaderSection = () => {
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
//balance card
const BalanceCard = ({userbalance}) => {
return(
  <div className='w-full mx-auto m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Available Balance</h2>
    <p className='text-center p-2 text-md font-bold w-32 mx-auto text-center m-2 bg-gray-200 rounded-lg'>N: 5,000{userbalance}</p>
  </div>
)
};
// action card
const ActionCard = () => {
  return(
    <div className='w-full p-2 bg-gray-900 rounded-md border flex flex-wrap justify-evenly'>
    <Button value={'Sell Gift Cards'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Sell Crypto'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Withdraw'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Transactions'} handleClick={openTrans} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Help Center'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Rewards'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    </div>
  )
};
// transactions hisory cards
const TransactionsHistory = () => {
  return(
   <div>
    <h2>Recent Transactions</h2>
    <Button value={'close'} handleClick={closeTrans} className={'bg-gray-200 rounded-md border-2'}/>
     <div className='grid grid-cols-4 gap-2 mx-auto p-2 bg-gray-400 border m-2 rounded-md'>
      <div>
        <p className='text-sm font-bold text-gray-200'>Id</p>
      <ul><li className='text-xs'>265erjhg</li></ul>
      </div>
      <div>
        <p className='text-sm font-bold text-gray-200'>Descs</p>
      <ul><li className='text-xs'>Apple Gift Card</li></ul>
      </div>
      <div>
        <p className='text-sm font-bold text-gray-200'>Date$Time</p>
      <ul><li className='text-xs'>mon,23.5.2025</li></ul>
      </div>
      <div>
        <p className='text-sm font-bold text-gray-200'>Status</p>
      <ul><li className='text-xs'>Approved</li></ul>
      </div>
    </div>
   </div>
  )
}
  return (
    <div className="bg-gray-500 max-h-screen m-2">
    <MainHeaderSection/>
    <BalanceCard/>
    <ActionCard/>
   {isTrans && <TransactionsHistory/>} 
    </div>
  )
}