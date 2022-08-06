import colors from "../data/colors.json";

function App() {
  return (
    <div>
      {Object.keys(colors).map((key) => (
        <Color key={key} name={key} allColor={colors[key]} />
      ))}
    </div>
  );
}

function Color(props) {
  return (
    <div className="flex">
      <aside>{props.name}</aside>
      <ul className="flex">
        {props.allColor.map((color, i) => (
          <li key={i}>
            <span
              style={{ backgroundColor: color }}
              className="color-box"
            ></span>
            <div>
              <span>{i === 0 ? 50 : i * 100}</span>
              <span>{color.toUpperCase()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
