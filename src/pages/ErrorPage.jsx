import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigation = useNavigate();

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold text-error">404</h1>
            <h2 className="text-3xl font-semibold mt-4">
              Oops! Page Not Found
            </h2>

            <p className="py-6 text-gray-500">
              The page you are looking for doesn’t exist.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigation("/")}
                className="btn btn-primary"
              >
                Go Home
              </button>

              <button
                onClick={() => navigation(-1)}
                className="btn btn-outline"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
