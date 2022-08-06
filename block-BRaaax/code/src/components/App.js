import Button from "./Button";

function App() {
  return (
    <>
      <Button size="small" type="primary" lebel="Click Me!" />
      <Button size="medium" type="secondary" lebel="Click Me!" />
      <Button size="large" type="tertiary" lebel="Click Me!" />
      <Button disabled />
      <Button onClickHandler={() => alert("You Clicked me!")} />
    </>
  );
}

export default App;
