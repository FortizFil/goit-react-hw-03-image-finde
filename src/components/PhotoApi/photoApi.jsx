function fetchPhoto(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=22670946-2b796d5e22242051989a80e4c&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    return response.json();
  });
}

const api = {
  fetchPhoto,
};

export default api;
