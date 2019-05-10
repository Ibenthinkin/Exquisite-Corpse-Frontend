class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1';
  }
  fetchCorpses() {
    return fetch(`${this.baseUrl}/corpses`).then(res => res.json());
  }

  updateCorpse(id, body) {
    return fetch(`${this.baseUrl}/corpses/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json());
  }
}
