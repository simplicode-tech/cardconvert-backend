import {Link} from 'react-router-dom'
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MainHeaderSection } from '../components/MainHeaderSection';
import { toast } from 'react-toastify';
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
// giftcard tradeupload states
const [cardcategory, setCardCategory] = useState('');
const [cardType, setCardType] = useState('');
const [cardamount, setcardamount] = useState('');
const [cardphotos, setCardPhotos] = useState(null);
const tradeuploadData = {cardcategory, cardType, cardamount};

// states for available giftcard data from the backend
const [availablecardcategory, setavailableCardCategory] = useState(null);
const [availablecardType, setavailableCardType] = useState(null);


useEffect(() => {
  setIsLoading(true);
const availableGiftCardData = async () => {
  try{
    const response = await axios.get('https://cardconvert-backend.onrender.com/admin/updatecardbase');
    setavailableCardCategory(response.data.allCards);
    setavailableCardType(response.data.allCards);
  }
  catch(err){console.log(err)}
  finally{
    setIsLoading(false);
  }
};
availableGiftCardData();
}, []);

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
   // handle submit
  const handleSubmitTrade = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://cardconvert-backend.onrender.com/userdashboard/uploadgiftcard', tradeuploadData);
       toast.success(response.data.message);

    }catch(err){ console.log(err)}
   };

  return(
  <div className='border-2 px-4 mx-auto my-2 bg-gray-900 fixed inset-0'>
    <p onClick={closeSellCard} className='bg-gray-200 rounded-md border-2 w-10'>close</p>
    <h1 className='text-center text-white font-bold'>Upload Gift Cards</h1>
    <label htmlFor='cardcategory' className='my-2 text-white'>Select Card Category:</label>
      <select className='w-full p-3 bg-gray-200'id='cardcategory' value={cardcategory} onChange={(e) => setCardCategory(e.target.value)}>
        {availablecardcategory.map((card) => (
          <option key={card._id} className='bg-gray-500'>{card.cardcategory}</option>
        ))}
      </select>
      <label htmlFor='cardtype' className='my-2 text-white'>Select Card Type:</label>
      <select className='w-full p-3 bg-gray-200' id='cardtype' value={cardType} onChange={(e) => setCardType(e.target.value)}>
        {availablecardType.map((card) => (
          <option key={card._id} className='bg-gray-500'>{card.cardtype}</option>
        ))}
      </select>
      <label htmlFor='cardamount' className='my-2 text-white'>Amount:</label>
      <input type='text' id='cardamount' value={cardamount} onChange={(e) => setcardamount(e.target.value)} placeholder='Amount of the Card' className='w-full p-3 bg-gray-200' />
      <label htmlFor='cardphotos' className='my-2 text-white'>Upload Photos of the Gift Cards:</label>
      <input type='file' id='cardphotos' placeholder='Upload Card Photos' className='w-full p-3 bg-gray-200' />
      <Button value={'SUBMIT'} handleClick={handleSubmitTrade} className={'my-4 flex items-center bg-gray-600 p-2 rounded-md border-2 border-gray-900 font-bold text-white'}/>
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
   {isLoading && <SpinnerLoading/>}
    </div>
  )
}