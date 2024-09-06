import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { Lyrics } from "./components/Lyrics";

import "./App.css";

function App() {
  const [lyrics, setLyrics] = useState("");
  const [track, setTrack] = useState("");
  const [songby, setSongby] = useState("");
  return (
    <>
      <Header />
      <Search
        lyrics={lyrics}
        setLyrics={setLyrics}
        track={track}
        setTrack={setTrack}
        songby={songby}
        setSongby={setSongby}
      />
      <Lyrics
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
