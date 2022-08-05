let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function App() {
  function handleClick(event) {
    alert("Hello React Event");
  }
  function handleClickReact(event) {
    alert("To learn React use https://reactjs.org");
    alert("React and ReactDOM works together");
    alert("Babel helps in writing JSX");
  }
  function handleName(name) {
    alert(`hello ${name}`);
  }
  function handleFruit(value) {
    alert(`hello ${value}`);
  }
  return (
    <>
      <h1>Onclick Functions</h1>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClickReact}>How can I help you?</button>
      <div>
        {["Arya", "John", "Bran"].map((name) => (
          <button onClick={() => handleName(name)} key={name}>
            {name}
          </button>
        ))}
      </div>
      <div>
        {fruits.map((fruit) => (
          <button onClick={() => handleFruit(fruit.value)} key={fruit.id}>
            {fruit.value}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
