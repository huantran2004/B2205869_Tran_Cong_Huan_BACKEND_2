const { ObjectId } = require("mongodb");

class ContactService {
  constructor(client) {
    this.Contact = client.db().collection("contacts");
  }
  // Bổ sung các phương thức CRUD ở đây lúc sau
}

module.exports = ContactService;