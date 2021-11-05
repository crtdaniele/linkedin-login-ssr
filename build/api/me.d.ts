/**
  Method to get information about of the user from LinkedIn
  @params token: get the token from oauth method
  @params options: an example "projection=(id,localizedFirstName,profilePicture(displayImage~digitalmediaAsset:playableStreams))"
  @return user: is an object that contains the info about the user
*/
export declare const me: (token: string, options: string) => Promise<{}>;
