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
  // root.innerHTML = "";
  let todoUI = data.map((movie, i) => {
    let li = React.createElement(
      "li",
      {},
      React.createElement("label", { htmlFor: i }, movie.name),
      React.createElement(
        "button",
        { id: i, onclick: handleChange },
        movie.watched ? "Watched" : "To watch"
      )
    );
    // root.append(li);
    return li;
  });
  ReactDOM.render(todoUI, root);
}

createUI(allMovies, rootElm);
