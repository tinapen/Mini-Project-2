import { useState } from "react";

export const Preview = ({ track, artistName }) => {
  // variables
  const [previewURL, setPreviewURL] = useState("");
  const [previewPrompt, setPreviewPrompt] = useState("");
  //functions
  const getPreview = async () => {
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/tinapen/spotify/FQJFuqFlvKmFSqKV/search?q=${track}&type=track`
      );
      const data = await response.json();
      console.log(data);
      setPreviewURL(data.tracks.items[0].preview_url);
      setPreviewPrompt(`Song preview for ${track}`);
      if (previewURL === null) {
        setPreviewPrompt(`>> No track preview for ${track} by ${artistName}`);
        console.log(previewURL);
      }
    } catch (error) {
      console.log("No Preview");
      setPreviewURL("");
      setPreviewPrompt(">> There is a problem occured");
    }
  };

  return (
    <div
      id="preview"
      className="container bg-white border-gray-200 dark:bg-gray-800"
    >
      <div className=" ms-[160px] flex">
        <button
          onClick={getPreview}
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Click here to enable song preview
        </button>
        <div className="ms-5 text-red-500 font-bold">{previewPrompt}</div>
      </div>
      <div id="audio-container" className="justify-center align-center flex">
        <audio className="w-[80vw]" src={previewURL} controls></audio>
      </div>
    </div>
  );
};
