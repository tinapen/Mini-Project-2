import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

export const Lyrics = ({ artistName, setArtistName, track, setTrack }) => {
  //variables
  const [songTitle, setSongTitle] = useState("");
  const [songby, setSongby] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //functions
  const searchLyrics = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`
      );
      setIsLoading(false);
      const data = await response.json();
      console.log(data);
      setLyrics(data.lyrics);
      setTrack(songTitle);
      setSongby(`Song by: ${artistName}`);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setLyrics(
        `No Lyrics Found \n Sorry, lyrics for ${songTitle}, song by ${artistName} is unavailable. Also, check if the title and artist are correct.`
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTitle = (e) => {
    setSongTitle(e.target.value);
  };

  const handleArtistName = (e) => {
    setArtistName(e.target.value);
  };

  return (
    <div id="lyrics">
      <div id="search-container" className="mt-16 pb-5 dark:bg-gray-900">
        <h1 className=" text-4xl text-center font-bold text-gray-900 dark:text-white my-5">
          Search Song Lyrics
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
              onChange={handleArtistName}
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
              onChange={handleTitle}
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
      </div>
      <div id="lyrics-container">
        {isLoading ? (
          <div
            id="loader-container"
            className="flex align-center justify-center m-[20vh]"
          >
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#0A2647", "#144272", "#205295", "#2C74B3", "#1230AE"]}
            />
          </div>
        ) : (
          <div id="lyrics-container" className="h-[30vh] dark:text-black">
            <br />
            <div className="text-4xl text-center font-bold">{track}</div>
            <br />
            <div className="text-center">{songby}</div>
            <br />
            <pre className="text-center h-96 overflow-auto font-sans font-medium">
              {lyrics}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
