import { useState, useEffect } from "react";

export const Music = () => {
  //   const [music, setMusic] = useState("");

  const fetchMusic = async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=Perfect&type=tracks&offset=0&limit=10&numberOfTopResults=5";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c64c225683mshdc6d4f590fed5aep1a160ajsn571aa63b3709",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);
  return <img src="" alt="" />;
};
