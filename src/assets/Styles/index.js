import {StyleSheet} from 'react-native';
export const AuthStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0f3350',
    flex: 1,
    // alignItems: 'center'
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
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
  },
  oneContactFloating: {
    position: 'absolute',
    minHeight: 60,
    marginRight: 3,
    padding: 15,
    //zIndex: -100,
  },
  thumbnails: {
    width: 60,
    height: 60,
    borderRadius: 30,
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