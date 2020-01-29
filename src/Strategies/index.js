import Contacts from 'react-native-contacts';

import ContactsProcesses from './contacts';

const allContacts = ContactsProcesses.getContactsFromStorage(Contacts);

export {allContacts};
