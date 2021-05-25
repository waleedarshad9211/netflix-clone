// const API_KEY = "c660986ae70982029ef7dad7f4b2dc52";

const requests = {
    fetchTrending: '/trending/all/day?api_key=c660986ae70982029ef7dad7f4b2dc52',
    fetchNetflixOriginals: '/discover/tv?api_key=c660986ae70982029ef7dad7f4b2dc52&with_network=213',
    fetchTopRated: '/movie/top_rated?api_key=c660986ae70982029ef7dad7f4b2dc52&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=c660986ae70982029ef7dad7f4b2dc52&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=c660986ae70982029ef7dad7f4b2dc52&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=c660986ae70982029ef7dad7f4b2dc52&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=c660986ae70982029ef7dad7f4b2dc52&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=c660986ae70982029ef7dad7f4b2dc52&with_genres=99',
}

export default requests;