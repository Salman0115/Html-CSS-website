"use strict";
const articleData =[
{"imgId": "cplus.jpg",
"title" : "C++",
"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{"imgId": "robot.jpg",
"title" : "embedded-systems",
"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{"imgId": "html.png",
"title" : "HTML/CSS",
"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
];
function buildArticleFromData(data) {
  const article = document.createElement("article");
  const section = document.createElement("section");
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');


 h2.textContent = data["title"];
 img.alt = `${data["imgId"]}`;
 img.src = `images/${data["imgId"]}`;
 p.textContent = data["description"];

    article.appendChild(img);
    article.appendChild(section);
    section.appendChild(h2);
    section.appendChild(p);
  return article;
}

const articles = articleData.map(buildArticleFromData).forEach(el => portfolio.appendChild(el))
