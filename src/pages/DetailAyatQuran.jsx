import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailAyatQuran() {
  const { surahId } = useParams();
  const [quran, setQuran] = useState([]);
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DZIKRAPI}/quran/surah`)
      .then((res) => {
        setQuran(res.data.data);
        const surah = res.data.data.find(
          (surah) => surah.number.toString() === surahId
        );
        if (surah) {
          setSurahName(surah.name_id);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [surahId]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DZIKRAPI}/quran/ayah/surah/${surahId}`)
      .then((res) => {
        setAyahs(res.data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [surahId]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <button
          onClick={() => window.history.back()}
          className="pointer-cursor bg-white rounded-md shadow-md p-4 hover:bg-gray-100"
        >
          <p className="text-left ">Kembali</p>
        </button>
        <h2 className="text-2xl font-bold text-center">{surahName}</h2>
        <div></div> {/* Empty div to balance flex */}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {ayahs.map((ayah) => (
          <div
            key={ayah.id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col"
          >
            <h2 className="text-lg font-medium mb-2 text-right">{ayah.arab}</h2>
            <h2 className="text-lg font-medium mb-2 text-right">
              {ayah.latin}
            </h2>
            <audio controls className="self-end mt-2">
              <source src={ayah.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-md mt-2 font-medium">{ayah.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
