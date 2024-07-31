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
        <div className={`${styles.header}`}>
          <span>Assets</span>
        </div>
      </div>
    </div>
  );
};
