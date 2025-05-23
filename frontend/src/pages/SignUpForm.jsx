import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://cardconvert-backend.onrender.com/user/signup", data);
      toast.success(response.data.message);
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center max-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 fixed inset-0 shadow-lg border rounded-xl p-6 max-w-md w-full">
       <h1 className="text-2xl font-bold text-center text-gray-200 mb-6">Create Your Account</h1>

        {/* Input Fields */}
        {[
          { name: "firstname", label: "First Name", type: "text" },
          { name: "lastname", label: "Last Name", type: "text" },
          { name: "username", label: "Username", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone Number", type: "tel" },
          { name: "password", label: "Password", type: "password" },
        ].map(({ name, label, type }) => (
          <div key={name} className="mb-4">
            <label className="block text-gray-200">{label}</label>
            <input
              type={type}
              {...register(name, { required: `${label} is required!` })}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="w-full text-gray-200 p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
          </div>
        ))}

        {/* Submit Button */}
        <Button value="Sign Up" type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4" />

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-100 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;