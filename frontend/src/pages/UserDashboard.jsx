import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { toast } from 'react-toastify';
import { MainHeaderSection } from '../components/MainHeaderSection';
import { SpinnerLoading } from '../components/SpinnerLoading';

const token = localStorage.getItem("token");

export default function UserDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSellCard, setIsSellCard] = useState(false);
  const [isTrans, setIsTrans] = useState(false);

  const [cardcategory, setCardCategory] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardamount, setcardamount] = useState('');
  const [cardphotos, setCardPhotos] = useState(null);
  const tradeuploadData = { cardcategory, cardType, cardamount };

  const [availablecardcategory, setavailableCardCategory] = useState([]);
  const [availablecardType, setavailableCardType] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const availableGiftCardData = async () => {
      try {
        const response = await axios.get('https://cardconvert-backend.onrender.com/admin/updatecardbase');
        setavailableCardCategory(response.data.allCards?.map(card => card.cardcategory) || []);
        setavailableCardType(response.data.allCards?.map(card => card.cardtype) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    availableGiftCardData();
  }, []);

  const handleSubmitTrade = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("Authentication token is missing");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("cardcategory", cardcategory);
      formData.append("cardType", cardType);
      formData.append("cardamount", cardamount);
      if (cardphotos) {
        Array.from(cardphotos).forEach(file => formData.append("cardphotos", file));
      }

      const response = await axios.post('https://cardconvert-backend.onrender.com/userdashboard/uploadgiftcard', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(response.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-500 max-h-screen m-2">
      <MainHeaderSection />
      {isLoading ? <SpinnerLoading /> : (
        <>
          <BalanceCard />
          <ActionCard openSellCard={() => setIsSellCard(true)} openTrans={() => setIsTrans(true)} />
          {isSellCard && <SellGiftCards close={() => setIsSellCard(false)} availablecardcategory={availablecardcategory} availablecardType={availablecardType} handleSubmitTrade={handleSubmitTrade} />}
          {isTrans && <TransactionsHistory close={() => setIsTrans(false)} />}
        </>
      )}
    </div>
  );
}

const BalanceCard = ({ userbalance = 5000 }) => (
  <div className='w-full mx-auto m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Available Balance</h2>
    <p className='text-center p-2 text-md font-bold w-32 mx-auto text-center m-2 bg-gray-200 rounded-lg'>N: {userbalance}</p>
  </div>
);

const ActionCard = ({ openSellCard, openTrans }) => (
  <div className='w-full p-2 bg-gray-900 rounded-md border flex flex-wrap justify-evenly'>
    <Button value={'Sell Gift Cards'} handleClick={openSellCard} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'} />
    <Button value={'Sell Crypto'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'} />
    <Button value={'Withdraw'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'} />
    <Button value={'Transactions'} handleClick={openTrans} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'} />
    <Button value={'Help Center'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'} />
    <Button value={'Rewards'} className={'bg-gray-200 p-2 rounded-md border-2 font-bold'} />
  </div>
);

const SellGiftCards = ({ close, availablecardcategory, availablecardType, handleSubmitTrade }) => (
  <div className='border-2 px-4 mx-auto my-2 bg-gray-900 fixed inset-0'>
    <p onClick={close} className='bg-gray-200 rounded-md border-2 w-10'>close</p>
    <h1 className='text-center text-white font-bold'>Upload Gift Cards</h1>
    <label htmlFor='cardcategory' className='my-2 text-white'>Select Card Category:</label>
    <select className='w-full p-3 bg-gray-200' id='cardcategory'>
      {availablecardcategory.map((category, index) => (
        <option key={index} className='bg-gray-500'>{category}</option>
      ))}
    </select>
    <label htmlFor='cardtype' className='my-2 text-white'>Select Card Type:</label>
    <select className='w-full p-3 bg-gray-200' id='cardtype'>
      {availablecardType.map((type, index) => (
        <option key={index} className='bg-gray-500'>{type}</option>
      ))}
    </select>
    <label htmlFor='cardamount' className='my-2 text-white'>Amount:</label>
    <input type='text' id='cardamount' placeholder='Amount of the Card' className='w-full p-3 bg-gray-200' />
    <label htmlFor='cardphotos' className='my-2 text-white'>Upload Photos of the Gift Cards:</label>
    <input type='file' id='cardphotos' multiple className='w-full p-3 bg-gray-200' />
    <Button value={'SUBMIT'} handleClick={handleSubmitTrade} className={'my-4 flex items-center bg-gray-600 p-2 rounded-md border-2 border-gray-900 font-bold text-white'} />
  </div>
);

const TransactionsHistory = ({ close }) => (
  <div>
    <h2>Recent Transactions</h2>
    <Button value={'close'} handleClick={close} className={'bg-gray-200 rounded-md border-2'} />
    {/* Transaction details component */}
  </div>
);