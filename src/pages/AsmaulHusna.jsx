import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AsmaulHusna() {
  const [asmaulHusna, setAsmaulHusna] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_DZIKRAPI}/quran/asma`)
      .then((res) => {
        setAsmaulHusna(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-800 h-full p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl mb-4 text-center arab">
          وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا ۖ وَذَرُوا۟
          ٱلَّذِينَ يُلْحِدُونَ فِىٓ أَسْمَٰٓئِهِۦ ۚ سَيُجْزَوْنَ مَا كَانُوا۟
          يَعْمَلُونَ
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {asmaulHusna.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="bg-white p-4 shadow text-gray-600 text-sm sm:text-base">
                    {item.indo}
                  </td>
                  <td className="bg-white p-4 shadow text-gray-600 text-sm sm:text-base">
                    {item.latin}
                  </td>
                  <td className="bg-white p-4 shadow text-lg text-4xl arab">
                    {item.arab}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
