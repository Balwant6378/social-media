import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

export const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = userTitleElement.current.value;
    const postBody = userBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    userTitleElement.current.value = "";
    userBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here:
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your user Id.."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title:
          </label>
          <input
            type="text"
            ref={userTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Contant:
          </label>
          <textarea
            type="text"
            ref={userBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reactions:
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reaction"
            placeholder="How many people reacted to this post."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here:
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space.."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
