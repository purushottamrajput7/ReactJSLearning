import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <section className="main">
      <div className="container">
        <div className="error">
          <h1>
            Oops!!! {err.status} - {err.statusText}
          </h1>
          <p>{err.data}</p>
        </div>
      </div>
    </section>
  );
};
export default Error;
