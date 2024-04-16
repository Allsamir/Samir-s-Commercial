import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="text-center text-black flex justify-center items-center h-screen flex-col"
    >
      <img
        src={`https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWxra3hrdXkzYmwxbXYwc3ZzYzF0ZTB6N2hxdWZ3MGxqcjI5MWFoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AqVHda3AfTe2WkPbbh/giphy.gif`}
      ></img>
      <p className="text-2xl py-4">
        Sorry, an unexpected <span className="text-red-600">error</span> has
        occurred.
      </p>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="my-4">
        <button className="btn btn-outline text-black">Home</button>
      </Link>
    </div>
  );
}
