const search = () => {
  const inputSearch = document.getElementById("searchField").value;
  if(inputSearch === ""){ 
    alert("You need to start a research")
    } else {fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + inputSearch)
      .then((response) => response.json())
      .then((data) => {
        const searchSection = document.querySelector("#searchResults")
        const eminemSection = document.querySelector("#eminemSection")
        const eminemTitle = document.querySelector("#eminem")
        const queenSection = document.querySelector("#queenSection")
        const metallicaSection = document.querySelector("#metallicaSection")
        const allData = data.data;
        searchSection.innerHTML = "";
        for (let i = 0; i < allData.length; i++) 
        {
          if (inputSearch === "eminem") {
            console.log("Here")
            eminemTitle.style.display = "inline"
            const eminem = allData[i];
            eminemSection.innerHTML += `<div class="card" style="display: inline">
            <img src="${eminem.album.cover}" class="card-img-top" alt="artist-picture">
            <div class="card-body">
                <h6 class="card-title">${eminem.title}</h6>
            </div>
          </div>`
          } else { 
              searchSection.style.display = "inline"
              searchSection.innerHTML += `<div class="card" style="display: inline">
              <img src="${allData[i].album.cover}" class="card-img-top" alt="artist-picture">
              <div class="card-body">
                  <h6 class="card-title">${allData[i].title}</h6>
              </div>
            </div>`    
          }
        }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
}}
const buttonSearch = document.querySelector("#button-search")
buttonSearch.addEventListener("click", search)

/* const fetchMusic = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then((response) => response.json())
        .then((data) => {
            const eminemSection = document.querySelector("#eminemSection")
            const allData = data.data
            for (const eminem of allData) {
                eminemSection.innerHTML += `<div class="card" style="display: inline">
                <img src="${eminem.album.cover}" class="card-img-top" alt="artist-picture">
                <div class="card-body">
                    <h6 class="card-title">${eminem.title}</h6>
                </div>
              </div>`
            }
        })
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((response) => response.json())
    .then((data) => {
        const queenSection = document.getElementById("queenSection");
        const allData = data.data;
        for (const queen of allData) {
            queenSection.innerHTML += `<div class="card" style="display: inline">
            <img src="${queen.album.cover}" class="card-img-top" alt="artist-picture">
            <div class="card-body">
              <h6 class="card-title">${queen.title}</h6>
            </div>
          </div>`
        }
    })
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((data) => {
        const metallicaSection = document.getElementById("metallicaSection");
        const allData = data.data;
        for(const metallica of allData) {
            metallicaSection.innerHTML += `<div class="card" style="display: inline">
            <img src="${metallica.album.cover}" class="card-img-top" alt="artist-picture">
            <div class="card-body">
              <h6 class="card-title">${metallica.title}</h6>
            </div>
          </div>`
        }
    })
}
 */