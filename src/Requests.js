//request file for all of our endpoints to keep everything 'nice & neat'

const key = "...";
const requests = {
  //we used backticks so we can use ${key} for our key instead of pasting the key in there. it's cleaner
  requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestThrillers: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=thriller&page=1&include_adult=false`
};

export default requests
