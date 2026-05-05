export default function BookLoading() {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center ">
      <span className="loading loading-spinner loading-3xl text-primary"></span>
      <span className="loading loading-spinner loading-xl text-secondary"></span>
      <span className="loading loading-spinner loading-xl text-accent"></span>
      <span className="loading loading-spinner loading-xl text-info"></span>
      <span className="loading loading-spinner loading-xl text-success"></span>
      <span className="loading loading-spinner loading-xl text-warning"></span>
      <span className="loading loading-spinner loading-xl text-error"></span>
    </div>
  );
}
