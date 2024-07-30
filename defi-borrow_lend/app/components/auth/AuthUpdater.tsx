import React from "react";
import { setAuthState } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";

export const AuthUpdater = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* <button onClick={() => dispatch(setAuthState(true))}>Log in</button>
      <button onClick={() => dispatch(setAuthState(false))}>Log out</button> */}
      <h1>hihihi</h1>
    </div>
  );
};