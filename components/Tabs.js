// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
function Tab(topic) {
  const ce = document.createElement.bind(document);

  const tab = ce("div");
  tab.innerText = topic;
  topic = topic.match(/\w*/)[0];
  tab.className = `tab ${topic}`;

  tab.onclick = function () {
    document.getElementById("article-filter").innerHTML = `
        .cards-container .card[data-topic="${topic}"] {
          display: flex;
        }
        .tab.${topic} {
          background: #4CAF50 !important;
        }
        `;
  };

  return tab;
}

const topicsElement = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(({ data }) => {
    data.topics.forEach((t) => topicsElement.appendChild(Tab(t)));
  })
  .catch((err) => console.log(err));
