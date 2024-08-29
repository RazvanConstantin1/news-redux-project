export const fetchNews = async () => {
  try {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const API_KEY = "cf2485e684ae404a83760bbaef6fa737";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.articles;
  } catch (error) {
    throw error;
  }
};
