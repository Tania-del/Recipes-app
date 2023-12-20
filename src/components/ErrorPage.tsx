import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
      <div className="flex items-center h-full ">
          <div className="m-auto text-center">
      <h1 className="font-bold pb-6 text-3xl">Oops!</h1>
      <p className="pb-2">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-gray-400">{error.statusText  || error.message}</i>
      </p>
          </div>
    </div>
  );
}