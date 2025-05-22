export const SpinnerLoading = ({message}) => {
    return(
<div className="fixed inset-0 z-60 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 text-white">
<div className="w-30 h-30 border-4 border-red-500 border-t-transparent  border-b-transparent rounded-full animate-spin">
</div>
<p className="font-bold">{message}</p>
</div>
    );
};