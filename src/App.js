import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { Lyrics } from "./components/Lyrics";

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
      <Footer />
    </>
  );
}

export default App;
