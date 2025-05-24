import AllCardBase from "../models/allCardsBase.js";
export const findAllCardBase = async (req, res) => {
try{
    // get all cards and send
    const allCards = await AllCardBase.find();
     res.status(200).json({allCards});
}
catch(err){
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
}
};