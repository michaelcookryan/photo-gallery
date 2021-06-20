import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer/footer.component";
import Gallery from "./components/Gallery/gallery.component";
import Header from "./components/Header/header.component";
import "./App.scss";
import { ADD_GALLERY, LOADING } from "./constants/action-types";

function App() {
  // const [gallery, setGallery] = useState([]);

  ///WORKING EXAMPLE FOR ASYNC/AWAIT
  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
  //       res
  //         .json()
  //         .then((photos) => setGallery(photos))
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //     );
  //   }
  //   fetchData();
  // }, []);

  ///REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOADING });
    fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
      res
        .json()
        .then((photos) => dispatch({ type: ADD_GALLERY, payload: photos }))
        .catch((err) => {
          console.log(err);
        })
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
