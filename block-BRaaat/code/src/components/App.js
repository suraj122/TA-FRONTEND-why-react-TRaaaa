import countries from "../data/countries.json";

function App() {
  function handleCountry(country) {
    alert(`${country.name} ${country.code}`);
  }
  return (
    <div className="countries">
      {countries.map((country) => (
        <button key={country.unicode} onClick={() => handleCountry(country)}>
          <h2>{country.name}</h2>
          <span>{country.emoji}</span>
        </button>
      ))}
    </div>
  );
}

export default App;
