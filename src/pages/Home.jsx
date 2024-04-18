import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex justify-center pt-8">
        <Link to="/alquran">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2 text-center w-48 h-24">
            Alquran
          </button>
        </Link>
        <Link to="/doa">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2 w-48 h-24">
            Doa
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/asmaul-husna">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2 w-48 h-24">
            Asmaul Husna
          </button>
        </Link>
        <Link to="/dzikir">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2 w-48 h-24">
            Dzikir
          </button>
        </Link>
      </div>
    </div>
  );
}
