import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.png";

export default function Home() {
  return (
    <div className="relative bg-gray-800 h-screen flex justify-center items-center">
      <img src={bg} className="absolute inset-0 w-full h-full" />
      <div className="absolute flex flex-col items-center mt-16">
        <div className="flex flex-row items-center flex-wrap justify-center mb-4">
          <Link to="/alquran">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mx-2 w-48 h-24 mt-1 md:mt-0">
              Alquran
            </button>
          </Link>
          <Link to="/doa">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mx-2 w-48 h-24 mt-1 md:mt-0">
              Doa
            </button>
          </Link>
          <Link to="/asmaul-husna">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mx-2 w-48 h-24 mt-1 md:mt-0">
              Asmaul Husna
            </button>
          </Link>
          <Link to="/dzikir">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mx-2 w-48 h-24 mt-1 md:mt-0">
              Dzikir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
