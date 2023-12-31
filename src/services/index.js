const API_URL = "https://cataas.com";

export const CatsService = {
  async getCats() {
    const response = await fetch(`${API_URL}/api/cats`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  
  },

  async getFilteredCats(word) {
    const response = await fetch(`${API_URL}/cat/says/${word}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    return objectURL;

  },

  async getCatById(id) {
    const response = await fetch(`${API_URL}/cat/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    return objectURL;

  }
  

};
