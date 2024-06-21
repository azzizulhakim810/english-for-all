import RecentCourse from "@/components/RecentCourse";
import MyClass from "@/components/myClass";
// import { Typography } from "@/components/ui/Typography";
// import { IoSearch } from "react-icons/io5";
// import { gql, useQuery } from "@apollo/client";

/* const GET_Books = gql`
  query {
    getBooks {
      id
      name
      author
    }
  }
`;
 */
export default function Home() {
  // const { loading, error, data } = useQuery(GET_Books);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // console.log(data);

  return (
    <main className="pb-14 lg:pr-20">
      <MyClass />
      <RecentCourse />

      <div>
         {/* {data.exampleCollection.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}  */}
      </div>
    </main>
  );
}
