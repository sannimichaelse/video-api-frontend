import Video from './Video';

const Videos = ({ videos, onDelete, onToggle }) => {
    return (
        <>
            {videos.map((video, index) => (
            <Video key={index} video={video} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Videos
