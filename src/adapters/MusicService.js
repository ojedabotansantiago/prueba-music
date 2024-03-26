// FetchHttpAdapter.js
import HttpPort from '../ports/HttpPort.js';

class TracksFetchHttpAdapter extends HttpPort {
  async get(url) {
    const response = await fetch(url);
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