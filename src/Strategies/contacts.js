class Contacts {
  getContactsFromStorage(contacts) {
    return new Promise((resolved, rejected) => {
      try {
        contacts.getAll((err, contacts) => {
          if (err) rejected(err);
          resolved(contacts);
        });
      } catch (err) {
        rejected(err);
      }
    });
  }
}

export default new Contacts();
