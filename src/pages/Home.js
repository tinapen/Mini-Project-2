import { useState } from "react";
import { Header } from "../components/Header";
import { Lyrics } from "../components/Lyrics";
import { Preview } from "../components/Preview";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [track, setTrack] = useState("");

  return (
    <div id="home-container" className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <Lyrics setTrack={setTrack} track={track} className="bg-gray-800" />
      <Preview track={track} />
      <Footer />
    </div>
  );
};
