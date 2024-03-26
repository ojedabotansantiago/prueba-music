// HttpPort.js
class HttpPort {
  async get(url) {
    throw new Error('get() method not implemented');
  }

  async post(url, data) {
    throw new Error('post() method not implemented');
  }

  // Otros métodos HTTP (PUT, DELETE, etc.) pueden ser definidos aquí según sea necesario
}

export default HttpPort;