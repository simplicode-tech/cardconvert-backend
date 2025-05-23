import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { SpinnerLoading } from "../components/SpinnerLoading";

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("https://cardconvert-backend.onrender.com/user/login", data);
      toast.success(response.data.message);

      // Save token
      localStorage.setItem("token", response.data.token);
      reset();
      navigate("/userdashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed, please try again!");
    }
    setIsLoading(false);
  };

  return (
    <div className=" flex items-center justify-center max-h-screen p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="fixed inset-0 text-white bg-gray-900 shadow-lg rounded-lg p-4 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">Welcome Back!</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-200 font-semibold">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required!" })}
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-200 font-semibold">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required!" })}
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Login Button */}
        <Button value="Login" type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-4" />

        {/* Signup Link */}
        <p className="text-center text-gray-200 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up Here
          </Link>
        </p>
      </form>
      {isLoading && <SpinnerLoading message={'Welcome Back...'}/>}
    </div>
  );
}