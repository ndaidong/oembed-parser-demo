// helpers -> loader

const API_BASE_URL = 'https://us-central1-technews-251304.cloudfunctions.net/oembed-parser';

export const extract = async (url) => {
  try {
    const target = `${API_BASE_URL}?url=${encodeURIComponent(url)}`;
    const cached = sessionStorage.getItem(target);
    if (cached) {
      return JSON.parse(cached);
    }
    const data = await fetch(target);
    const json = await data.json();
    sessionStorage.setItem(target, JSON.stringify(json));
    return json;
  } catch (err) {
    console.trace(err);
  }
  return false;
};

export default {
  extract,
};
