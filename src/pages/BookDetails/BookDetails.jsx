import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  //console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  const { bookName, image } = singleBook;
  return (
    <div className=" w-2/3 h-[400px] ">
      <img className="w-48" src={image} alt="" />
      <h2>{bookName}</h2>

      <button className="btn btn-accent m-2">Read</button>
      <button className="btn btn-accent m-2">Wish List</button>
    </div>
  );
};

export default BookDetails;
