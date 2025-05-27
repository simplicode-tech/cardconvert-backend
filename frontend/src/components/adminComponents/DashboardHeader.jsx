const DashboardHeader = () => {
    // total trade card
const TotalTradeCard = ({totaltrades}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Total Trades</h2>
    <p className='text-center p-2 text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>{totaltrades}</p>
  </div>
)
};
// total pending trades card
const PendingTradeCard = ({totalpendingtrades}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Pending Trades</h2>
    <p className='text-center p-2 text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>{totalpendingtrades}</p>
  </div>
)
};
// total Users
const UserCard = ({users}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Users</h2>
    <p className='text-center p-2 text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>{users}</p>
  </div>
)
};
// total Revenue
const RevenueCard = ({revenue}) => {
return(
  <div className='w-40 m-2 p-2 bg-gray-900 border rounded-lg'>
    <h2 className='text-md text-white text-center rounded-lg'>Revenue</h2>
    <p className='text-center  text-md font-bold w-1/2 mx-auto text-center bg-gray-200 rounded-lg'>{revenue}</p>
  </div>
)
};
return(
    <div>
    <TotalTradeCard/>
    <PendingTradeCard/>
    <UserCard/>
    <RevenueCard/>
    <DashboardHeader/>
    </div>
)
};
export default DashboardHeader;