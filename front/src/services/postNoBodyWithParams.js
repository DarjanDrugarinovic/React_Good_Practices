const service = async (url) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: bearer
    }
  })
    .then(async (response) => {
      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.message);
      }

      return res;
    })
    .catch((err) => {
      console.log(err + ': ' + url);
      throw err;
    });
};

export default service;
