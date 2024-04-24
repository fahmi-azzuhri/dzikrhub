import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Doa() {
  const [doa, setDoa] = useState([]);
  const [filteredDoa, setFilteredDoa] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DZIKRAPI}/doa`)
      .then((res) => {
        setDoa(res.data.data);
        setFilteredDoa(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterBySource = (source) => {
    const filteredPrayers = doa.filter((prayer) => prayer.source === source);
    setFilteredDoa(filteredPrayers);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-4 mb-4 my-6">
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("quran")}
        >
          Alquran
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("hadits")}
        >
          Hadits
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("pilihan")}
        >
          Pilihan
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("harian")}
        >
          Harian
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("ibadah")}
        >
          Ibadah
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("haji")}
        >
          Haji
        </button>
        <button
          className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={() => filterBySource("lainnya")}
        >
          Lainnya
        </button>
      </div>
      <div className="flex mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoa.map((prayer) => (
          <div
            className="card rounded-lg overflow-hidden border border-gray-300 shadow-md p-4"
            key={prayer.id}
          >
            <h2 className="text-xl font-bold mb-5">{prayer.judul}</h2>
            <p className="text-3xl arab mb-4 text-right">{prayer.arab}</p>
            <p className="text-sm mb-5">{prayer.indo}</p>
            <span className="text-sm">Sumber: {prayer.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
