import React from "react";
import { Items } from "./items";


export const ItemsContainer = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
    </div>

    

  )
};
