'use client'

import { AppStore, store } from "@/redux";
import React from "react";
import { Provider } from "react-redux";


const ReduxProvider = ({ children  }: { children: React.ReactNode  }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
