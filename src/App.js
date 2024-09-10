import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Lyrics } from "./components/Lyrics";
import { Preview } from "./components/Preview";

import "./App.css";

function App() {
  const [artistName, setArtistName] = useState("");
  const [track, setTrack] = useState("");

  return (
    <>
      <Header />
      <Lyrics
        artistName={artistName}
        setArtistName={setArtistName}
        setTrack={setTrack}
        track={track}
      />

      <Preview artistName={artistName} track={track} />

      <Footer />
    </>
  );
}

export default App;
