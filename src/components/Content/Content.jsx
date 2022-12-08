import React, { useState, useEffect } from "react";

import "./content.scss";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Post/Post";
import { db } from "../../firebase";
import { serverTimestamp, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import FlipMove from "react-flip-move";

const Content = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    query(
      db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      descr: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="content">
      <div className="content__inputContainer">
        <div className="content__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="content__inputOptions">
          <InputOption color="#70B5F9" Icon={ImageIcon} title="Photo" />
          <InputOption color="#E7A33E" Icon={SubscriptionsIcon} title="Video" />
          <InputOption color="#C0CBCD" Icon={EventNoteIcon} title="Event" />
          <InputOption
            color="#7FC15E"
            Icon={CalendarViewDayIcon}
            title="Write article"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, descr, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            descr={descr}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Content;
