import React from "react";

export const AboutContent = () => {
  return (
    <>
      <p className="text-justify text-black dark:text-white text-xl">
        <span className="font-bold text-blue-500"> Lyrix </span>is a simple
        website that helps you find song lyrics. Powered by the{" "}
        <span className="font-bold text-blue-500"> lyrics.ovh API</span>, it
        provides access to a wide range of song lyrics with just a quick search
        by song title and artist. <br />
        <br /> To use the
        <span className="font-bold text-blue-500"> Lyrix </span>website
        properly, it's important to input the artist name along with the song
        title for the most accurate results. <br /> <br /> For an enhanced
        experience,
        <span className="font-bold text-blue-500"> Lyrix </span> offers a
        <span className="font-bold text-blue-500"> Spotify </span> song preview
        at the bottom of the lyrics page, letting you listen to a snippet of the
        song as you follow along with the lyrics. This feature is provided via
        <span className="font-bold text-blue-500"> NoCodeAPI</span>. <br />{" "}
        <br />
        <span className="font-bold text-black dark:text-white">
          Please note
        </span>
        : Some songs may not have lyrics available, as they might not be
        supported or found in the{" "}
        <span className="font-bold text-blue-500"> lyrics.ovh </span> database.
        Additionally, not all songs will have a preview, and occasionally, the
        song preview might not match the lyrics due to title mismatches or
        missing data.
      </p>
    </>
  );
};
