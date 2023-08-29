const API_URL = "https://cataas.com";

export const CatsService = {
  async getCats() {
    const response = await fetch(`${API_URL}/api/cats`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
   console.log(data);
    return data;
  
  },

  async getFilteredCats(word) {
    const response = await fetch(`${API_URL}/cats/says/${word}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    data.results.forEach((e) => {
      e.length = 0;
    });
    return data.results;
  },
};
