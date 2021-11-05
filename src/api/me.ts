import { ME } from '../constants';

/**
  Method to get information about of the user from LinkedIn
  @params token: get the token from oauth method
  @params options: an example "projection=(id,localizedFirstName,profilePicture(displayImage~digitalmediaAsset:playableStreams))"
  @return user: is an object that contains the info about the user
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const me = async (token: string, options: string) => {
  if (token !== '') {
    const auth = `Bearer ${token}`;
    let user = {};
    const response = await fetch(`${ME}${options}`, {
      method: 'GET',
      headers: { Connection: 'Keep-Alive', Authorization: auth },
    });
    if (response.ok) user = await response.json();
    return user;
  }
  return 'Invalid token, please provide a valid token!';
};
