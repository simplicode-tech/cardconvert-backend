import GiftCard from "../models/giftCards.js";
import AllCardBase from "../models/allCardsBase.js";
import Customer from "../models/customer.js";
export const giftcardupload = async (req, res) => {

try{
const {cardcategory, cardtype, cardamount} = req.body;

//fields validations
if(!cardcategory || !cardtype || !cardamount){
 return res.status(400).json({message: 'All fields are required!!!'})
};

// save new trade to giftcard db
const submitedby = req.user.email;
const createdat = new Date();
const cardstatus = 'processing';
const cardrate = await AllCardBase.findOne({cardtype: cardtype}, 'cardrate');
const newTrade = new GiftCard({cardcategory, cardtype, cardamount, submitedby, createdat, cardrate, cardstatus});
await newTrade.save();

// update customer trade history
const tradehistory = {cardcategory, cardtype, cardamount, createdat, cardrate, cardstatus};
const newtradehistory = await Customer.findOne({email:submitedby}, 'tradehistory');
newtradehistory.push(tradehistory);

//responses
const message = 'Trade Submitted Successfully! \n Check Your Trade History';
res.status(200).json({message,})

}catch(err){res.status(400).json({message: 'We Are Sorry, Unexpected Error Occured!'})}
};