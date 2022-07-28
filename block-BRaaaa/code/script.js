let input = document.querySelector("input");
let rootElm = document.querySelector("ul");

let allMovies = [
  {
    name: "The Intern",
    watched: true,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
  }
  createUI(allMovies, rootElm);
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, rootElm);
}

function createUI(data, root) {
  root.innerHTML = "";
  data.forEach((movie, i) => {
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.innerText = movie.name;
    label.for = i;
    let button = document.createElement("button");
    button.id = i;
    button.innerText = movie.watched ? "Watched" : "To watch";
    button.addEventListener("click", handleChange);
    li.append(label, button);
    root.append(li);
  });
}

createUI(allMovies, rootElm);
