import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-7fxz-1y2.auth0.com',
  clientID: 'izHHkHFKNH15pgIQLhs1laQgCNChxONv',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could Not Get User Profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could Not Log In');
      }
    });
  });
};
