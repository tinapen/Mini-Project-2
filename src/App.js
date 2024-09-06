import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { Lyrics } from "./components/Lyrics";
import { Artist } from "./components/Artist";

import "./App.css";

function App() {
  const [artistName, setArtistName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [track, setTrack] = useState("");
  const [songby, setSongby] = useState("");
  return (
    <>
      <Header />
      <Search
        artistName={artistName}
        setArtistName={setArtistName}
        songTitle={songTitle}
        setSongTitle={setSongTitle}
        lyrics={lyrics}
        setLyrics={setLyrics}
        track={track}
        setTrack={setTrack}
        songby={songby}
        setSongby={setSongby}
      />
      <div className="flex justify-center bg-gray-500 ">
        <div className="w-[10%]">
          <Artist
            artistName={artistName}
            setArtistName={setArtistName}
            songTitle={songTitle}
            setSongTitle={setSongTitle}
            lyrics={lyrics}
            setLyrics={setLyrics}
            track={track}
            setTrack={setTrack}
            songby={songby}
            setSongby={setSongby}
          />
        </div>
        <div className="w-[90%] pl-[20%]">
          <Lyrics
            artistName={artistName}
            setArtistName={setArtistName}
            songTitle={songTitle}
            setSongTitle={setSongTitle}
            lyrics={lyrics}
            setLyrics={setLyrics}
            track={track}
            setTrack={setTrack}
            songby={songby}
            setSongby={setSongby}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
