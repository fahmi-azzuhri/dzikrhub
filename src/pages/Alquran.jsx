import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Alquran() {
  const [quran, setQuran] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_DZIKAPI}/quran/surah`).then((res) => {
      setQuran(res.data.data);
      console.log(res.data.data);
    });
  });
  return (
    <div>
      <h1>Alquran</h1>
    </div>
  );
}
