import NavBar from "../Navbar/Navbar";
import UserOrders from "../user/components/UserOrder";

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <h1 className="mx-auto text-2xl">My Orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;
