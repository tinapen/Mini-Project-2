import axios from "axios";
import { useState, useEffect } from "react";

export const Artist = ({ artistName }) => {
  const [artistInfoName, setArtistInfoName] = useState("");
  const [artistImage, setArtistImage] = useState("");

  const artistInfo = async () => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: artistName,
        type: "artists",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "x-rapidapi-key": "c64c225683mshdc6d4f590fed5aep1a160ajsn571aa63b3709",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const Data = response.data;
      setArtistInfoName(Data.artists.items[0].data.profile.name);
      console.log(artistInfoName);
      setArtistImage(
        Data.artists.items[0].data.visuals.avatarImage.sources[0].url
      );
      console.log(artistImage);
      //   console.log(artistImage);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    artistInfo();
  });
  return (
    <>
      <div className="text-center">
        <img
          className="h-[70vh] max-w-lg rounded-lg"
          src={artistImage}
          alt={artistInfoName}
        />
      </div>
    </>
  );
};
