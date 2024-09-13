import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

export const Lyrics = ({
  artistName,
  setArtistName,
  songTitle,
  setSongTitle,
  track,
  setTrack,
}) => {
  //variables

  const [songby, setSongby] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //functions
  const searchLyrics = async () => {
    try {
      // Loader/Spinner while fetching API
      setIsLoading(true);
      // Fetching
      const response = await Promise.race([
        fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`),
        new Promise((resolve, reject) => {
          // Reject after 5 seconds
          setTimeout(() => reject(new Error("Request timed out")), 5000);
        }),
      ]);

      const data = await response.json();

      setIsLoading(false);
      setLyrics(data.lyrics);
      setTrack(songTitle.toUpperCase());
      setSongby(`Song by: ${artistName.toUpperCase()}`);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      if (artistName === "" || songTitle === "") {
        setLyrics("Please enter artist name and/or song title");
      } else {
        setLyrics(`Sorry, lyrics is unavailable`);
      }
    }
  };
  //Preventing default submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //handles User input for song title
  const handleTitle = (e) => {
    setSongTitle(e.target.value);
  };
  //handles User input for the artist name
  const handleArtistName = (e) => {
    setArtistName(e.target.value);
  };
  //Event Listener for Search and Reset button
  const toggleSearchBtn = () => {
    setIsClicked(!isClicked);
  };
  //Reset Function
  const resetLyrics = () => {
    window.location.reload();
  };
  return (
    <div id="lyrics">
      <div
        id="search-container"
        className="mt-16 pb-5 bg-gray-50 dark:bg-gray-800"
      >
        <h1 className=" text-4xl text-center font-bold pt-4 text-gray-900 dark:text-white my-5">
          Search Song Lyrics
        </h1>
        {/* Search Form  */}
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
              className="bg-gray-50 border border-gray-500 text-gray-900 mr-3 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5 rounded-l-lg dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-blue-900"
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
              className="bg-gray-50 border border-gray-500 text-gray-900 mr-3 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5 rounded-r-lg dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-blue-900"
              placeholder="Song Title..."
              required
            />
          </div>
          <button onClick={toggleSearchBtn}>
            {isClicked ? (
              <span
                type="submit"
                id="reset-btn"
                onClick={resetLyrics}
                className="p-2.5 ms-2 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-indigo-700 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                RESET
              </span>
            ) : (
              <span
                type="submit"
                id="search-btn"
                onClick={searchLyrics}
                className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SEARCH
              </span>
            )}
          </button>
        </form>
      </div>
      {/* Lyrics container  */}
      <div id="lyrics-container">
        {/* Used a ternary operator to test if the spinner will load or not*/}
        {isLoading ? (
          <div
            id="loader-container"
            className="flex align-center justify-center m-[20vh]"
          >
            {/* ColorRing React Loader Spinner  */}
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
          // Container of lyrics data
          <div id="lyrics-container" className="h-[400px] dark:text-white">
            <br />
            <div className="text-[40px] text-center font-bold">{track}</div>
            <br />
            <div className="text-center">{songby}</div>
            <br />
            <pre className="text-xl text-center h-[200px] overflow-auto font-sans font-medium">
              {lyrics}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
