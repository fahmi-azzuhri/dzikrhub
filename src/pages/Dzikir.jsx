import React, { useState } from "react";
import tasbih from "../assets/tasbih.png";

export default function Dzikir() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [inputTarget, setInputTarget] = useState(""); // State untuk menyimpan nilai input pengguna

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === parseInt(target)) {
      setModalVisible(true);
    }
  };

  const resetCount = () => {
    setModalVisible(false);
    setCount(0);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleTargetChange = (event) => {
    setInputTarget(event.target.value);
  };

  const setTargetFromInput = () => {
    setTarget(inputTarget);
  };

  return (
    <div className="bg-gray-800 h-screen p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center relative">
          <div className="flex flex-col items-center">
            {/* Input field */}
            <div className="relative">
              <input
                type="number"
                value={inputTarget}
                onChange={handleTargetChange}
                className="z-10 w-100 h-10 bg-white rounded-lg p-2 text-left"
                placeholder="Masukkan target"
              />
              <button
                onClick={setTargetFromInput}
                className="z-10 absolute top-0 right-0 h-full px-4 py-2 bg-blue-500 text-white rounded-r-lg"
              >
                Set
              </button>
            </div>
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

            {modalVisible && (
              <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-md">
                  <p className="text-xl mb-4">Target Reached!</p>
                  <button
                    onClick={handleCloseModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
