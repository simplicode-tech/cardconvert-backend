import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../components/Button";

export default function Admin() {
// total trade card
const TotalTradeCard = ({totaltrades}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Total Trades</h2>
    <p className='text-center p-2 text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>563{totaltrades}</p>
  </div>
)
};
// total pending trades card
const PendingTradeCard = ({totalpendingtrades}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Pending Trades</h2>
    <p className='text-center p-2 text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>24{totalpendingtrades}</p>
  </div>
)
};
// total Users
const UserCard = ({users}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Users</h2>
    <p className='text-center p-2 text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>2,544{users}</p>
  </div>
)
};
// total Revenue
const RevenueCard = ({revenue}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Revenue</h2>
    <p className='text-center  text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'> N: 12,500{revenue}</p>
  </div>
)
};
// updating all cards base
 const Updatecardbase = () => {

const { register, handleSubmit, formState: { errors } } = useForm();

 const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://cardconvert-backend.onrender.com/admin/updatecardbase", data);
      toast.success(response.data.message);
      console.log(response.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error occured, please try again!");
    }
  };
  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="text-white bg-gray-900 shadow-lg rounded-lg p-4 max-w-sm">
              <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">Add Card to All Cards Base</h2>
              <div className="mb-4">
                <label className="block text-gray-200 font-semibold">Card Category</label>
                <input
                  type="text"
                  {...register("cardcategory", { required: "required!" })}
                  placeholder="Card Category"
                  className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                {errors.cardcategory && <p className="text-red-500 text-sm mt-1">{errors.cardcategory.message}</p>}
              </div>
    
              <div className="mb-4">
                <label className="block text-gray-200 font-semibold">Card Type</label>
                <input
                  type="text"
                  {...register("cardtype", { required: "required!" })}
                  placeholder="Card Type"
                  className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                {errors.cardtype && <p className="text-red-500 text-sm mt-1">{errors.cardtype.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-200 font-semibold">Card Rate</label>
                <input
                  type="number"
                  {...register("cardrate", { required: "required!"})}
                  placeholder="Card Rate"
                  className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
                />
                {errors.cardrate && <p className="text-red-500 text-sm mt-1">{errors.cardrate.message}</p>}
              </div>
              <Button value="Upload Card" type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4" />
            </form>
    </div>
  )
};
  return (
<div className="bg-gray-200 h-screen m-2 grid grid-cols-[1fr_5fr] gap-2">
    <section className=" bg-gray-700">
      <h2 className="text-white font-bold text-md text-center my-2">CARD CONVERT</h2>
      <div>
       <ul className="grid grid-cols-1">
        <li>Dashboard</li>
        <li>Trades</li>
        <li>Users</li>
        <li>Cards</li>
        <li>Settings</li>
       </ul>
      </div>
    </section>

    <section>
      <h1 className="text-lg w-sm my-2 mx-auto p-4 border-2 text-gray-900 font-bold text-center rounded-lg">ADMIN DASHBOARD</h1>
      <div className="w-full my-4 flex justify-center flex-wrap sticky">
      <TotalTradeCard/>
      <PendingTradeCard/>
      <UserCard/>
      <RevenueCard/>
      </div>
     <div className="w-full my-4 flex justify-center bg-gray-900">
       <Updatecardbase/>
     </div>
    </section>

</div>
  )
}
