import React, { useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { injectReducer } from "@/store/store";

interface WithReducerProps {
  name: string;
  reducer: Reducer;
}

const withReducer = <P extends object>(WrappedComponent: React.ComponentType, { name, reducer }: WithReducerProps) => {
  const HOC: React.FC<P> = (props) => {
    injectReducer(name, reducer);

    return <WrappedComponent />;
  };

  return HOC;
};

export default withReducer;
