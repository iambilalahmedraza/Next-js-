import Image from "next/image";
import Hello from "../components/hello";

export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log("who am i -- SERVER/CLIENT?");

  //SUM FUNCTION
  return (
    <>
      <Hello />
      <h1 className="text-3xl font-bold">Hey welcome to my page</h1>

      <ul>
        {posts.map((post: any) => (
          <div key={post.id} className="bg-gray-700 mb-10">
            <li className="text-xl font-bold underline">{post.title}</li>
            <li className="text-xl font-bold underline">{post.content}</li>
            <li className="text-xl font-bold underline">{post.author}</li>
            <li className="text-xl font-bold underline">{post.date}</li>
            <li className="text-xl font-bold underline">{post.category}</li>
          </div>
        ))}
      </ul>
    </>
  );
}
