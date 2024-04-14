import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="text-center text-black flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl">Oops!</h1>
      <p className="text-2xl py-4">Sorry, an unexpected <span className="text-red-600">error</span> has occurred.</p>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}