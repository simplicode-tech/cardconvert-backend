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
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginpage" element={<Login />} />
      <Route path="/signuppage" element={<SignUp />} />
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
</>
  );
}

export default App;