import { useState } from "react";

export const Lyrics = () => {
  const [artistName, setArtistName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  const searchLyrics = async () => {
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`
      );

      const lyricsData = await response.json();

      console.log(lyricsData);
      setLyrics(lyricsData.lyrics);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-black my-5">
          Search song lyrics
        </h1>

        <form
          className="flex justify-center max-w-sm mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              type="text"
              id="artist-field"
              value={artistName}
              onChange={(e) => {
                setArtistName(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 mr-3 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5 rounded-l-lg dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Artist Name..."
              required
            />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="title-field"
              value={songTitle}
              onChange={(e) => {
                setSongTitle(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5 rounded-r-lg  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Song Title..."
              required
            />
          </div>
          <button
            type="submit"
            id="search-btn"
            onClick={searchLyrics}
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </form>

        <div className="text-center">
          {lyrics.split("\n").map((lyric) => (
            <div>
              {lyric} <br />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
