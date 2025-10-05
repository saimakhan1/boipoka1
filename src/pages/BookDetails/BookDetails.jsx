import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  //console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  const { bookName, image } = singleBook;

  const handleMarksAsRead = () => {
    //store with id
    //where to store?
    //array or collection
    //if book already exists, then show and alert
    //if book does not exist, then push it in the collection or array
    addToStoredDB(id);
  };
  return (
    <div className=" w-2/3 h-[400px] ">
      <img className="w-48" src={image} alt="" />
      <h2>{bookName}</h2>

      <button
        onClick={() => handleMarksAsRead(id)}
        className="btn btn-accent m-2"
      >
        Marks as Read
      </button>
      <button className="btn btn-accent m-2">Add to Wish List</button>
    </div>
  );
};

export default BookDetails;
