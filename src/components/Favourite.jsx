import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Favourite = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const getAllFavouriteBooks = async () => {
    let response = await axios.get("http://localhost:3000/v1/books/favourites");
    setFavouriteBooks(response?.data);
    console.log(response);
  };
  const removeFromFavourite = async (id) => {
    const response = await axios.post(
      `http://localhost:3000/v1/books/markUnFavourite/${id}`
    );
    if (response.status === 200) {
      await getAllFavouriteBooks();
    }
    console.log(response, "response---");
  };
  useEffect(() => {
    getAllFavouriteBooks();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-start ml-2">
        {favouriteBooks.map((data, key) => {
          return (
            <Card
              key={key}
              title={data?.title}
              author={data?.author}
              price={data?.price}
              isFavourite={data?.isFavourite}
              removeFromFavourite={removeFromFavourite}
              id={data?._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
