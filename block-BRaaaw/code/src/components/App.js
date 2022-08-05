import users from "../data/users.json";

function App() {
  return (
    <article>
      {users.map((user) => (
        <div key={user._id} className={`card ${user.isActive ? "active" : ""}`}>
          {user.gender === "male" ? "🙋‍♂️" : "🤷‍♀️"}
          <h2>{user.name}</h2>
        </div>
      ))}
    </article>
  );
}

export default App;
