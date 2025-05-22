import {Link} from 'react-router-dom'
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { MainHeaderSection } from '../components/MainHeaderSection';
import { SpinnerLoading } from '../components/SpinnerLoading';

export default function UserDashboard() {

// spinner loading state
const [isLoading, setIsLoading] = useState(false);
// sell cards component control
const [isSellCard, setIsSellCard] = useState(false);
const openSellCard = () => {
  setIsSellCard(true);
};
const closeSellCard = () => {
  setIsSellCard(false);
};
const [cardcategory, setCardCategory] = useState('');
const [cardType, setCardType] = useState('');
const [amountofcard, setAmountofcard] = useState(null);
const [cardphotos, setCardPhotos] = useState(null);

//transactions components controll
const [isTrans, setIsTrans] = useState(false);
const openTrans = () => {
  setIsTrans(true);
};
const closeTrans = () => {
  setIsTrans(false);
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
    <Button value={'Sell Gift Cards'} handleClick={openSellCard} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Sell Crypto'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Withdraw'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Transactions'} handleClick={openTrans} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Help Center'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    <Button value={'Rewards'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'}/>
    </div>
  )
};

// sell gift cards
const SellGiftCards = () => {
  const cardscate = ['apple', 'amazon', 'google', 'sephora', 'visa', 'xbox'];
  const cardstype = ['apple (20 - 100)', 'amazon (100 - 500)', 'google (50 - 100)', 'sephora (20 - 100)', 'visa (20 - 100)', 'xbox (20 - 100)']
   
  return(
  <div className='border-2 px-4 mx-auto my-2 bg-gray-900 fixed inset-0'>
    <p onClick={closeSellCard} className='bg-gray-200 rounded-md border-2 w-10'>close</p>
    <h1 className='text-center text-white font-bold'>Upload Gift Cards {cardType}</h1>
    <p className='my-2 text-white'>Select Card Category:</p>
      <select className='w-full p-3 bg-gray-200' value={cardcategory} onChange={(e) => setCardCategory(e.target.value)}>
        {cardscate.map((card, index) => (
          <option key={index} className='bg-gray-500'>{card}</option>
        ))}
      </select>
      <p className='my-2 text-white'>Select Card Type:</p>
      <select className='w-full p-3 bg-gray-200'  value={cardType} onChange={(e) => setCardType(e.target.value)}>
        {cardstype.map((card, index) => (
          <option key={index} className='bg-gray-500'>{card}</option>
        ))}
      </select>
      <p className='my-2 text-white'>Amount:</p>
      <input type='text' value={amountofcard} onChange={(e) => setAmountofcard(e.target.value)} placeholder='Amount of the Card' className='w-full p-3 bg-gray-200' />
      <p className='my-2 text-white'>Upload Photos of the Gift Cards:</p>
      <input type='file' placeholder='Upload Card Photos' className='w-full p-3 bg-gray-200' />
      <Button value={'SUBMIT'} className={'my-4 flex items-center bg-gray-600 p-2 rounded-md border-2 border-gray-900 font-bold text-white'}/>
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
};
  return (
    <div className="bg-gray-500 max-h-screen m-2">
    <MainHeaderSection/>
    <BalanceCard/>
    <ActionCard/>
    {isSellCard && <SellGiftCards/>}
   {isTrans && <TransactionsHistory/>} 
   {isLoading && <SpinnerLoading message={'Loading....'}/>}
    </div>
  )
}