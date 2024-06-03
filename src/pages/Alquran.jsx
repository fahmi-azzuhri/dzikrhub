import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import alquran from "../assets/alquran.svg";

export default function Alquran() {
  const [quran, setQuran] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DZIKRAPI}/quran/surah`)
      .then((res) => {
        setQuran(res.data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleSurahClick = (surahId) => {
    navigate(`/quran/ayah/surah/${surahId}`);
  };

  return (
    <div className="bg-[#E6FBFC]">
      <div className="container flex mx-auto flex-col">
        <img src={alquran} alt="" className="mx-auto w-80" />
        <div className="flex flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {quran.map((item) => (
            <div
              key={item.number}
              className="flex bg-white rounded-md shadow-md p-4 justify-between cursor-pointer"
              onClick={() => handleSurahClick(item.number)}
            >
              <div className="flex flex-row items-center gap-9">
                <h2 className="text-lg font-medium"> {item.number} </h2>
                <div className="flex flex-col">
                  <h2 className="text-lg font-medium">{item.name_id}</h2>
                  <p className="text-sm">{item.number_of_verses} ayat </p>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-right arab text-5xl">
                  {item.name_short}
                </h2>
                <p className="text-sm text-right">{item.translation_id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
