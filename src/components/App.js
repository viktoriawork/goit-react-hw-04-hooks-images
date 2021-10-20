import { useState, useEffect } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { fetchImages } from "../services/api";
import { AppStyled } from "./AppStyled.js";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import LoaderComponent from "./loader/LoaderComponent";

const App = () => {
  const [searchImg, setSearchImg] = useState("");
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchImg) {
      return;
    }
    setIsLoading(true);
    fetchImages(searchImg)
      .then((result) => {
        setImages(result.data.hits);
        setPage((prev) => prev + 1);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [searchImg]);

  const onSubmit = (searchImg) => {
    if (searchImg !== "") setSearchImg(searchImg);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    fetchImages(searchImg, page)
      .then((result) => {
        setImages((prev) => [...prev, ...result.data.hits]);
        setPage((prev) => prev + 1);
      })
      .catch((error) => setError(error))
      .finally(
        () =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          }),
        setIsLoading(false)
      );
  };

  const onOpenModal = (largeImage) => {
    setShowModal(true);
    setLargeImage(largeImage);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={onSubmit} />
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {Number.isInteger(images.length / 12) && images.length > 0 && (
        <Button onLoadMore={onLoadMore} />
      )}
      {showModal && (
        <Modal onCloseModal={onCloseModal}>
          <img src={largeImage} alt="img" />
        </Modal>
      )}
    </AppStyled>
  );
};

export default App;

