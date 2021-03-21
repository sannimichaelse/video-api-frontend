import { useState } from "react";
const AddVideo = ({ onAdd}) => {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [isPublic, setVisibility] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!slug || !title || !url){
      alert('Please fill all fields')
      return;
    }

    onAdd({ slug,title, url, isPublic});

    setSlug('')
    setTitle('')
    setUrl('')
    setVisibility(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Slug</label>
        <input
          type="text"
          placeholder="Add Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Url</label>
        <input
          type="text"
          placeholder="Add URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Is Public</label>
        <input
          type="checkbox"
          value={isPublic}
          onChange={(e) => setVisibility(e.currentTarget.checked)}
        ></input>
      </div>
      <input type="submit" value="Save Video" className="btn btn-block"></input>
    </form>
  );
};

export default AddVideo;
