const urlBase = 'https://api.github.com'

async function getAllUsersApi(): Promise<User[]> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
  
    const response = fetch(
      urlBase+"/users",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  
    return response;
  }
  
  export async function getAllUsers() {
    const data = await getAllUsersApi();
    return data;
  }

  //get users by name
  async function getUsersByNameApi({term}:{term : string}): Promise<SearchUser> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
  
    const response = fetch(
      `${urlBase}/search/users?q=${term}`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  
    return response;
  }
  
  export async function getUsersByName({term}:{term : string}) {
    const data = await getUsersByNameApi({term});
    return data.items;
  }

  //get user by username
  async function getUserByUserNameApi({username}:{username : string}): Promise<User> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
  
    const response = fetch(
      `${urlBase}/users/${username}`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  
    return response;
  }
  
  export async function getUserByUserName({username}:{username : string}) {
    const data = await getUserByUserNameApi({username});
    return data;
  }