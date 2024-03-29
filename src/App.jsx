import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import Contact from "./pages/Contact/Contact";

function App() {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchFotos = () => {
    setLoading(true);
    axios
      .get("https://wedding-api-eo5d.onrender.com/")
      .then((res) => {
        setPhotos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFotos();
  }, []);

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Gallery
              photos={photos}
              showModal={showModal}
              setShowModal={setShowModal}
              modalImgIndex={modalImgIndex}
              setModalImgIndex={setModalImgIndex}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
