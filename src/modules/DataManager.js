const remoteURL = "http://localhost:5002";

export default {
  get(tab, id) {
    return fetch(`${remoteURL}/${tab}/${id}`).then((data) => data.json());
  },
  getAll(tab) {
    return fetch(`${remoteURL}/${tab}`).then((data) => data.json());
  },
  // getWithLocations(tab, id) {
  //   return fetch(
  //     `${remoteURL}/${tab}/${id}?_embed=productLocations`
  //   ).then((data) => data.json());
  // },
};
