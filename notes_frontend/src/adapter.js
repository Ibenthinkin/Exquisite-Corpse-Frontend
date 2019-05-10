class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  fetchCorpses() {
    return this.get(`${this.baseUrl}/corpses`);
  }

  updateCorpse(id, body) {
    return this.patch(`${this.baseUrl}/corpses/${id}`, body);
  }

  fetchLines() {
    // console.log(this.get(`${this.baseUrl}/lines`))
    return this.get(`${this.baseUrl}/lines`);
  }

  updateLine(id, body) {
    return this.patch(`${this.baseUrl}/lines/${id}`, body);
  }



  get(url) {
    return fetch(url).then(res => res.json());
  }

  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json());
  }
}




// class Adapter {
//   constructor() {
//     this.baseUrl = 'http://localhost:3000/api/v1';
//   }
//   fetchCorpses() {
//     return fetch(`${this.baseUrl}/corpses`).then(res => res.json());
//   }
//
//   updateCorpse(id, body) {
//     return fetch(`${this.baseUrl}/corpses/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(body),
//     }).then(res => res.json());
//   }
// }
