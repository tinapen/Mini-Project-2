export const Lyrics = ({ track, songby, lyrics }) => {
  return (
    <div>
      <br />
      <div className="text-center">{track}</div>
      <br />
      <div className="text-center">{songby}</div>
      <br />
      <pre className="text-center h-96 overflow-auto">{lyrics}</pre>
    </div>
  );
};
