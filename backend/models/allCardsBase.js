import mongoose from 'mongoose';
 const allCardBaseSchema = new mongoose.Schema({
    cardcategory: {type: String, required: true},
    cardtype: {type: String, required: true},
    cardrate: {type: Number, required: true}
});
 const AllCardBase = mongoose.model('AllCardBase', allCardBaseSchema);
 export default AllCardBase;