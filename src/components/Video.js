import ReactPlayer from "react-player";
const Video = ({ video, onDelete, onToggle }) => {
  console.log(video);
  return (
    <div
      className={`task ${video.isPublic ? "public" : ""}`}
    >
      <h3 style={{margin: '20px'}}>{video.title} - {video.slug}</h3>
      <div className="player-wrapper" style={{margin: '20px'}}>
        <ReactPlayer
          className="react-player"
          url={video.url}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Video;
