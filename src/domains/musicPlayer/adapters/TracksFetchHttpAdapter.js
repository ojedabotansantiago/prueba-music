// FetchHttpAdapter.js

class TracksFetchHttpAdapter {
  constructor (){}
  async get(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    });
    return response.json();
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  // Implementa otros métodos HTTP aquí según sea necesario
}

export default TracksFetchHttpAdapter;