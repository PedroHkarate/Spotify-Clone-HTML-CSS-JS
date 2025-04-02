const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = "http://localhost:3000/artists?name_like=${searchTerm}"
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === ''){
        resultPlaylist.classList.remove('hidden');
        resultsArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});

document.addEventListener("DOMContentLoaded", function () {
    const saudacaoElemento = document.getElementById("saudacoes");

    if (!saudacaoElemento) {
        console.error("Elemento de saudação não encontrado!");
        return;
    }

    function atualizarSaudacao() {
        const horaAtual = new Date().getHours();
        let saudacao;

        if (horaAtual >= 5 && horaAtual < 12) {
            saudacao = "Bom dia";
        } else if (horaAtual >= 12 && horaAtual < 18) {
            saudacao = "Boa tarde";
        } else {
            saudacao = "Boa noite";
        }

        saudacaoElemento.textContent = saudacao;
        console.log("Saudação atualizada para:", saudacao);
    }

    // Atualiza ao carregar a página
    atualizarSaudacao();

    // Atualiza automaticamente a cada minuto (60000 ms)
    setInterval(atualizarSaudacao, 60000);
});