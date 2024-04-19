import React, { useState } from "react";
import tasbih from "../assets/tasbih.png";

export default function Dzikir() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="bg-gray-800 h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-xl mb-2 text-center">Tasbih Counter</h1>
        <div className="flex flex-col items-center relative">
          <div>
            <img src={tasbih} className="w-80 relative z-10" />
            <p className="text-white text-4xl font-bold absolute top-20 left-0 right-0 bottom-40 flex items-center justify-center">
              {count}
            </p>
          </div>

          <div className="flex items-center mb-4">
            <button
              onClick={incrementCount}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              +1
            </button>
            <button
              onClick={resetCount}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
