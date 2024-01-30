// Day 04
// Comando para rodar a API: json-server --watch api-artists/artists.json  --port 3000

const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

const requestApi = (searchTerm) => {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((res) => res.json())
        .then((result) => displayResults(result))
}

const displayResults = () => {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultsArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden')
        resultsArtist.classList.remove('hidden')
        return
    }

    requestApi(searchTerm)
})