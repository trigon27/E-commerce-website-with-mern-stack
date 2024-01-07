import React from "react";
import Navbar from "../Navbar/Navbar";
import AdminOrders from "../admin/components/AdminOrders";
const AdminOrderPage = () => {
  return (
    <div>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </div>
  );
};

export default AdminOrderPage;
