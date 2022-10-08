import firebase from 'firbase ';

class AuthService {
  login(authProviderName) {
    const authProvider = new firebase.auth[`${authProviderName}Authprovider`]();
    return firebase.auth().signInWithPopup(authProvider).then(console.log);
  }
}

export default AuthService;
