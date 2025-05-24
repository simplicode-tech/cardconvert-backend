import AllCardBase from "../models/allCardsBase.js";
export const updateCardBase = async (req, res) => {
try{
    const {cardcategory, cardtype, cardrate} = req.body;
    //validation 
    if(!cardcategory || !cardtype || !cardrate){
        return res.status(400).json({message: 'All fields are required!'})
    };
    // save to db
    const newCard = new AllCardBase({cardcategory, cardtype, cardrate});
    await newCard.save();
   
    // get all cards and send
    const allCards = await AllCardBase.find();
     res.status(200).json({message: 'Card saved succesfully!', allCards});
}
catch(err){
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
}
};