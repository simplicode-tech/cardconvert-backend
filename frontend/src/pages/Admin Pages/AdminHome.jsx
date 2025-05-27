import DashboardHeader from "../../components/adminComponents/DashboardHeader";
import Updatecardbase from "../../components/adminComponents/UpdateCardBase";

export default function AdminHome() {

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
      <DashboardHeader/>
      </div>
     <div className="w-full my-4 flex justify-center bg-gray-900">
      <Updatecardbase/>
     </div>
    </section>
</div>
  )
}
