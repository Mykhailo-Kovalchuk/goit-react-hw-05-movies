import axios from 'axios';

const API_KEY = '1dda9629a73fafaba3750493ea4855ff';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGRhOTYyOWE3M2ZhZmFiYTM3NTA0OTNlYTQ4NTVmZiIsInN1YiI6IjY1YTUwYjgzOGRiYzMzMDEyMzZhNjg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4k44fb6f12sXSLjD4YUDgIwseeksxPF-XRmodvwltRY';

// const API = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: API_KEY,
//     language: 'en-US',
//     include_adult: false,
//     page: 1,
//   },
// });

axios.defaults.headers.common['Authorization'] = TOKEN_KEY;

export function fetchMoviesInfo() {
  const URL = `${BASE_URL}movie/157336?api_key=${API_KEY}`;
  // Токен доступу для читання API
  // "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGRhOTYyOWE3M2ZhZmFiYTM3NTA0OTNlYTQ4NTVmZiIsInN1YiI6IjY1YTUwYjgzOGRiYzMzMDEyMzZhNjg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4k44fb6f12sXSLjD4YUDgIwseeksxPF-XRmodvwltRY"
  // Example https://api.themoviedb.org/3/movie/157336?api_key=1dda9629a73fafaba3750493ea4855ff

  return axios
    .get(URL)
    .then(resp => {
      console.log(resp);
      console.log(resp.data);
      return resp.data;
    })
    .catch(error => {
      console.log(error);
    });
}

// UserQuery by KeyWord
// export function fetchMoviesKeyWord(userQueryWord) {
//   // const URL = `${BASE_URL}search/movie/?query=Batman`;
//   const requestConfig = {
//     params: {
//       query: userQueryWord,
//     },
//   };

//   return API.get('/search/movie', requestConfig)
//     .then(resp => {
//       // console.log(resp);
//       // console.log(resp.data);
//       return resp.data;
//     })
//     .catch(error => {
//       console.error(error);
//       throw error; //якщо помилка.
//     });
// }

export function fetchMoviesKeyWord(userQueryWord) {
  // const queryParam = userQueryWord !== "" ? `?query=${userQueryWord}` : "";
  const URL = `${BASE_URL}search/movie?query=${userQueryWord}&api_key=${API_KEY}`;
  return axios
    .get(URL)
    .then(resp => {
      //  console.log(resp.data)
      // console.log(resp.data.results);
      return resp.data.results;
    })
    .catch(error => {
      console.log(error);
    });
}

// Tranding
//      --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \

export function fetchTrandingMovies() {
  const URL = `${BASE_URL}trending/movie/day?api_key=1dda9629a73fafaba3750493ea4855ff`;

  return axios
    .get(URL)
    .then(resp => {
      //  console.log(resp)
      //  console.log(resp.data.results)
      return resp.data.results;
    })
    .catch(error => {
      console.log(error);
    });
}

// MovieDetails
export function fetchMovieById(movieId) {
  const URL = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
  // Токен доступу для читання API
  // "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGRhOTYyOWE3M2ZhZmFiYTM3NTA0OTNlYTQ4NTVmZiIsInN1YiI6IjY1YTUwYjgzOGRiYzMzMDEyMzZhNjg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4k44fb6f12sXSLjD4YUDgIwseeksxPF-XRmodvwltRY"
  // Example https://api.themoviedb.org/3/movie/157336?api_key=1dda9629a73fafaba3750493ea4855ff

  return axios
    .get(URL)
    .then(resp => {
      // console.log(resp)
      // console.log(resp.data);
      return resp.data;
    })
    .catch(error => {
      console.log(error);
    });
}

// Cast

export function fetchCast(movieId) {
  const URL = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  // Токен доступу для читання API
  // "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGRhOTYyOWE3M2ZhZmFiYTM3NTA0OTNlYTQ4NTVmZiIsInN1YiI6IjY1YTUwYjgzOGRiYzMzMDEyMzZhNjg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4k44fb6f12sXSLjD4YUDgIwseeksxPF-XRmodvwltRY"

  // Example https://api.themoviedb.org/3/movie/157336?api_key=1dda9629a73fafaba3750493ea4855ff
  return axios
    .get(URL)
    .then(resp => {
      // console.log(resp)
      // console.log(resp.data.cast);
      return resp.data.cast;
    })
    .catch(error => {
      console.log(error);
    });
}

// Reviews
export function fetchReviews(movieId) {
  const URL = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`;
  // Токен доступу для читання API
  // "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGRhOTYyOWE3M2ZhZmFiYTM3NTA0OTNlYTQ4NTVmZiIsInN1YiI6IjY1YTUwYjgzOGRiYzMzMDEyMzZhNjg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4k44fb6f12sXSLjD4YUDgIwseeksxPF-XRmodvwltRY"

  // Example https://api.themoviedb.org/3/movie/157336?api_key=1dda9629a73fafaba3750493ea4855ff
  return axios
    .get(URL)
    .then(resp => {
      // console.log(resp)
      // console.log(resp.data.results);
      return resp.data.results;
    })
    .catch(error => {
      console.log(error);
    });
}
