import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductForm from "../admin/components/ProductForm";
const AdminProductFormPage = () => {
  return (
    <div>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
    </div>
  );
};

export default AdminProductFormPage;
