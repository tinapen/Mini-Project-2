import { useState } from "react";

export const Preview = ({ track }) => {
  // variables
  const [previewURL, setPreviewURL] = useState("");
  const [previewPrompt, setPreviewPrompt] = useState("");
  const [clickedPreviewBtn, setClickedPreviewBtn] = useState(false);

  //functions
  const getPreview = async () => {
    // Fetching API
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/tina/spotify/iVuNpoMzZtNsuHpU/search?q=${track}&type=track`
      );
      const data = await response.json();
      console.log(data);

      // song preview url
      setPreviewURL(data.tracks.items[0].preview_url);
    } catch (error) {
      //if api response is not OK
      console.error(error.message);
      setPreviewURL("");
      setPreviewPrompt(`>>No preview`);
    }
  };

  const togglePreviewBtn = () => {
    setClickedPreviewBtn(!clickedPreviewBtn);
  };

  const resetPreview = () => {
    setPreviewPrompt("");
    setPreviewURL("");
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-800 w-[100vw] h-[20vh] px-[25%]">
      <div id="preview-btn-prompt" className="flex">
        <button onClick={togglePreviewBtn}>
          {clickedPreviewBtn ? (
            <span
              onClick={resetPreview}
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Reset song preview
            </span>
          ) : (
            <span
              onClick={getPreview}
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Click here to enable song preview
            </span>
          )}
        </button>
        <div className="ms-5 text-red-500 font-bold">{previewPrompt}</div>
      </div>
      <audio className="w-[50vw] mb-[100px]" src={previewURL} controls></audio>
    </div>
  );
};
