import axios from "axios";
import { useForm } from "react-hook-form";
import Button from '../Button';
import { toast } from "react-toastify";

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
              <Button value={"Upload Card"} type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4" />
            </form>
    </div>
  )
};
export default Updatecardbase;