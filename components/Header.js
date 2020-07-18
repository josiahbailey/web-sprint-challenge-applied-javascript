// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const ce = document.createElement.bind(document);

  const header = ce("div");
  const date = header.appendChild(ce("span"));
  const title = header.appendChild(ce("h1"));
  const temp = header.appendChild(ce("span"));

  header.className = "header";
  date.className = "date";
  temp.className = "temp";

  date.innerText = "MARCH 28, 2019";
  title.innerText = "Lambda Times";
  temp.innerText = "98°";

  return header;
}

document.querySelector(".header-container").appendChild(Header());
