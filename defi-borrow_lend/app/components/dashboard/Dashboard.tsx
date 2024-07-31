"use client";

import { useState } from "react";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "@/lib/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.dashboardContainer}`}>
        <div className={`${styles.wallet}`}>
          <span className={`${styles.walletAddress}`}>0x57643099826552y7483oyhtr</span>
          <hr className={`${styles.walletHr}`}/>
          <div className={`${styles.walletBalance}`}>
            <span>Balance</span>
            <span><img />0.000</span>
          </div>
        </div>
        <div className={`${styles.assets}`}>
          <div className={`${styles.header}`}>
            <span>Assets</span>
            <span>Deposit Balance</span>
          </div>
          <hr className={`${styles.assetHr}`}/>
          <div className={`${styles.assetBalances}`}>
            
          </div>

        </div>
      </div>
    </div>
  );
};
