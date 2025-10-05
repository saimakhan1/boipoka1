import React, { Suspense, use, useEffect, useState } from "react";
import { data } from "react-router";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setAllBooks(data);
  //       });
  //   }, []);

  // const bookPromise = fetch("./booksData.json").then((res) => res.json());
  return (
    <div>
      <h2 className="text-3xl text-center p-6">Books</h2>
      <Suspense fallback={<span>Loading books...</span>}>
        {/* <Book data={data}></Book> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((singleBook) => (
            <Book key={singleBook.BookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
