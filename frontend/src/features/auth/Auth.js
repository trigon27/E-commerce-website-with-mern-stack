import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./AuthSlice";

export default function Auth() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
    </div>
  );
}
