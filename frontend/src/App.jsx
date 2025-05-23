import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login';
import SignUp from './pages/SignUpForm'; 
import Admin from './pages/Admin';
import UserDashboard from './pages/UserDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen p-2 bg-gray-500 text-gray-900 font-sans">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/userdashboard" element={<UserDashboard />} />
    <Route path="/adminpage" element={<Admin />} />
  </Routes>
  <ToastContainer 
  position="bottom-left"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>
</div>
  );
}

export default App;