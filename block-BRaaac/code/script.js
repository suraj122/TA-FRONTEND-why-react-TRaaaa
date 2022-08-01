let input = document.querySelector("input");
let rootElm = document.querySelector("ul");

let allMovies = [
  {
    name: "The Intern",
    watched: false,
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

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI(data, root) {
  root.innerHTML = "";
  data.forEach((movie, i) => {
    let li = elm(
      "li",
      {},
      elm("label", { for: i }, movie.name),
      elm("button", { id: i }, `${movie.watched ? "Watched" : "To watch"}`)
    );
    root.append(li);
  });
}

createUI(allMovies, rootElm);
