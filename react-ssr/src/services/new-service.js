export default class NewsServise {
  constructor() {
    this.apiBase = 'https://newsapi.org/v2/everything';
    this.apiKey = 'b803f864ff854a239952514f8bfdc13d';
    // this.apiKey = 'c1cb6e664a90485890169a95c58e7dfa';
  }

  async getResourse(q, sortBy, num, page) {
    if (q) {
      const response = await fetch(`
      ${this.apiBase}?q=${q}&sortBy=${sortBy}&apiKey=${this.apiKey}&pageSize=${num}&page=${page}
    `);

      if (!response.ok) {
        throw new Error(`Could not fetch ${q}, status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }
    return {};
  }

  async getResourseById(q, sort) {
    const response = await fetch(`
      ${this.apiBase}?q=${q}&sortBy=${sort}&apiKey=${this.apiKey}&pageSize=100&page=1`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${q}, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
