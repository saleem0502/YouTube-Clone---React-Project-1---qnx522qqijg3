import React, { createContext,useContext,useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({initaialState,reducer,children}) =>(
    <StateContext.Provider value={useReducer(reducer, initaialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateProvider = () =>useContext(StateContext);

