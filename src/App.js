import { useState, useEffect } from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import Header from "./components/Header";
import Videos from "./components/Videos";
import AddVideo from "./components/AddVideo";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const videosFromServer = await fetchVideos();
      console.log(videosFromServer);
      setVideos(videosFromServer);
    }

    getVideos();
  }, [])

  // fetch videos
  const fetchVideos = async () => {
      const res = await fetch('http://localhost:1337/videos');
      const data = await res.json();
      return data
  }

    // fetch video
  const fetchVideo = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data
  }


  // Delete video
  const deleteVideo = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method : 'DELETE'
    })
    setVideos(videos.filter((task) => task.id !== id));
  };

  // Toggle visibility
  const toggleVisibility = async (id) => {
    const videoToToggle = await fetchVideo(id);
    const updatedVideo = {
      ...videoToToggle, isPublic: !videoToToggle.isPublic
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedVideo)
    })

    const data = await res.json();
    setVideos(videos.map((video) => video.id === id ? {
      ...video, isPublic : !data.isPublic
    } : video))
  };

  // Add Task
  const addVideo = async (video) => {
    const res = await fetch(`http://localhost:1337/videos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(video)
    })

    const data = await res.json();
    setVideos([...videos, data])
  };

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddVideo(!showAddVideo)} showAddVideo={showAddVideo}/>
      {showAddVideo && <AddVideo onAdd={addVideo}/>}
      {videos.length > 0 ? (
        <Videos videos={videos} onDelete={deleteVideo} onToggle={toggleVisibility} />
      ) : (
        "No Video to show"
      )}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
