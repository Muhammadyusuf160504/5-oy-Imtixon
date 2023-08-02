const overlay = document.querySelector(".overlay");
const request = new XMLHttpRequest();

const changeKinoName1 = document.getElementById("kino-nomi1");
const changeKinoName2 = document.getElementById("kino-nomi2");
const malumotlarEl = document.getElementById("malumotlar");

const listEl = document.getElementById("list");
const moviesEl = document.getElementById("movies");

request.addEventListener("readystatechange", () => {
  if (request.readyState == 4 && request.status == 200) {
    overlay.classList.add("hidden");
  } else if (request.readyState == 4) {
    console.log("error");
    overlay.classList.add("hidden");
  } else {
    overlay.classList.remove("hidden");
  }
});
// request.open("GET", "http://localhost:3000/articles");
// request.send();

const updateUI = (kinolar) => {
  const data = kinolar.Search;
  data.forEach((element) => {
    malumotlarEl.classList.add("display-none");
    moviesEl.classList.remove("display-none");
    console.log(element);
    listEl.innerHTML += `
    <li class="movie-text">
            <img src="${element.Poster}" alt="" />
            <div class="texts">
              <h2>Title: ${element.Title}</h2>
              <h2>Type: ${element.Type}</h2>
              <h2>Year: ${element.Year}</h2>
              <h2>imdbID: ${element.imdbID}</h2>
            </div>
          </li>
    `;
  });
};

const getKino = async (kino) => {
  const data = await getKinoName(kino);
  return data;
};

changeKinoName1.addEventListener("submit", (e) => {
  e.preventDefault();
  const kinoName = changeKinoName1.kino1.value.trim();
  changeKinoName1.reset();
  getKino(kinoName).then((data) => updateUI(data));
});

// BITTA KINO HAQIDA KO'PROQ MA'LUMOT

const updateUI2 = (kino) => {
  console.log(kino);
  moviesEl.classList.add("display-none");
  malumotlarEl.classList.remove("display-none");
  malumotlarEl.innerHTML = `
  <img src="${kino.Poster}" alt="rasm" />
        <div class="text">
          <h2>Title: ${kino.Title}</h2>
          <h2>Year: ${kino.Year}</h2>
          <h2>Actors: ${kino.Actors}</h2>
          <h2>BoxOffice: ${kino.BoxOffice}</h2>
          <h2>Country: ${kino.Country}</h2>
          <h2>Runtime: ${kino.Runtime}</h2>
          <h2>Type: ${kino.Type}</h2>
          <h2>imdbID: ${kino.imdbID}</h2>
          <h2>imdbRating: ${kino.imdbRating}</h2>
        </div>
  `;
};

const getKino2 = async (kino2) => {
  const data = await getKinoName2(kino2);
  return data;
};

changeKinoName2.addEventListener("submit", (e) => {
  e.preventDefault();
  const kinoName2 = changeKinoName2.kino2.value.trim();
  changeKinoName2.reset();
  getKino2(kinoName2).then((data) => updateUI2(data));
});
