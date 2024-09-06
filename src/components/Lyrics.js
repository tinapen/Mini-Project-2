export const Lyrics = ({ track, songby, lyrics }) => {
  return (
    <div className="h-[70vh] dark:text-white">
      <br />
      <div className="text-4xl text-center font-bold">{track}</div>
      <br />
      <div className="text-center">{songby}</div>
      <br />
      <pre className="text-center h-96 overflow-auto font-sans font-medium">
        {lyrics}
      </pre>
    </div>
  );
};
