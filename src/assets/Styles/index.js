import {StyleSheet} from 'react-native';
export const AuthStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0f3350',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingTop: 20,
  },
  form: {
    padding: 15,
    flex: 1,
  },
  inputHolder: {
    backgroundColor: '#244662',
    margin: 0,
    marginBottom: 20,
    padding: 8,
    paddingBottom: 0,
    borderRadius: 10,
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    paddingLeft: 0,
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 10,
    margin: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 75,
    paddingLeft: 30,
    paddingRight: 30,
  },
  tools: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  },
  successMessage: {
    backgroundColor: '#29d682',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});

export const DownloadStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  oneContact: {
    minHeight: 60,
    marginLeft: 3,
    marginRight: 3,
    padding: 15,
    borderBottomColor: '#888',
    borderBottomWidth: 0.2,
  },
  thumbnails: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    margin: 0,
    marginRight: 7,
  },
  info: {
    width: '60%',
    justifyContent: 'center',
  },
  downloadButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    paddingLeft: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ShareStyles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  shareButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonWrapper: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    width: 30,
    right: 0,
    alignItems: 'center',
    position: 'absolute',
  },
  shareInput: {
    padding: 8,
    height: 40,
    backgroundColor: '#f0efef',
    marginTop: 5,
    borderRadius: 100,
    elevation: 1,
  },
  shareContactsWrapper: {
    flexDirection: 'row',
    marginTop: 8,
  },
  shareContacts: {
    padding: 5,
    color: 'gray',
    alignSelf: 'center',
  },
});

export const HomeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  oneContact: {
    minHeight: 60,
    marginLeft: 3,
    marginRight: 3,
    padding: 15,
  },
  thumbnails: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    margin: 4,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
  info: {
    width: '80%',
    justifyContent: 'center',
  },
  syncButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ContactProfileStyles = StyleSheet.create({
  icon: {
    margin: 5,
    marginLeft: 15,
    position: 'absolute',
    right: 10,
  },
  listOne: {
    flexDirection: 'row',
    // backgroundColor: 'greenyellow',
    padding: 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  profile: {
    backgroundColor: '#156485',
    height: 270,
  },
  profileTools: {
    padding: 10,
  },
  profilePicture: {
    overflow: 'hidden',
    backgroundColor: 'skyblue',
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contactDetails: {
    // backgroundColor: 'gray',
    padding: 5,
  },
});
