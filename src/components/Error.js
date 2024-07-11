import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <p>
        {err.status}:{err.statusText}
      </p>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong!!!</h2>
    </div>
  );
};
export default Error;
