export default function Singer({ id, name, age, genre }) {
  return (
    <div id={id}>
      <h1>Name: {name} </h1>
      <p>
        Age: {age} , Genre: {genre}
      </p>
    </div>
  );
}
