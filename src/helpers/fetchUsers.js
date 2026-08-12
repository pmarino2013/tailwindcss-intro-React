const url = "https://devsapihub.com/api-users";
const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserByCountry = async (country) => {
  try {
    const response = await fetch(url + "/country/" + country);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await fetch(url + "/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, getUserByCountry, getUserById };
