"use client";

import { gql, useQuery } from "@apollo/client";
import client from "../../lib/apolloClient";

const GET_BOOKS = gql`
  query GetBooks {
    Books {
      docs {
        id
        title
        author {
          name
        }
        description
        book_cover {
          url
          alt
          width
          height
        }
      }
    }
  }
`;

type Book = {
  id: string;
  title: string;
  author: {
    name: string;
  };
  description: string;
  book_cover: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

type Chapter = {
  id: string;
  title: string;
  book: string;
  duration: number;
};

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const books: Book[] = data?.Books?.docs ?? [];
  // console.log(books);

  return (
    <div>
      <h1 className="font-bold text-center mt-10 text-3xl">Book Page</h1>
      <div>
        <h1>Books</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>by {book.author.name}</p>
              <p>{book.description}</p>
              {/* {book.book_cover && (
                <img
                  src={book.book_cover.url}
                  alt={book.book_cover.alt}
                  width={book.book_cover.width}
                  height={book.book_cover.height}
                />
              )} */}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
