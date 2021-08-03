export default class NewsServise {
  constructor() {
    this.apiBase = 'https://newsapi.org/v2/everything';
    this.apiKey = 'b803f864ff854a239952514f8bfdc13d';
  }

  async getResourse(q, sortBy) {
    const response = await fetch(`
      ${this.apiBase}?q=${q}&sortBy=${sortBy}&apiKey=${this.apiKey}&pageSize=5&page=1
    `);

    if (!response.ok) {
      throw new Error(`Could not fetch ${q}, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
