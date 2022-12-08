import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/slices/userSlice";

import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import LSidebar from "./components/LSidebar/LSidebar";

import "./app.scss";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <LSidebar />
          <Content />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
