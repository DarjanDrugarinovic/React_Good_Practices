const service = async (url, DTO) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: bearer
    },
    body: JSON.stringify(DTO)
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
