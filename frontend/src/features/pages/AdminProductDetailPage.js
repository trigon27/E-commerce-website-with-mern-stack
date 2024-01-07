import React from "react";
import AdminProductDetail from "../admin/components/AdminProductDetail";

import Navbar from "../Navbar/Navbar";

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetail></AdminProductDetail>
      </Navbar>
    </div>
  );
};

export default AdminProductDetailPage;
