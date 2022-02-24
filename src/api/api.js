const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xz0Alal3hWKxM6NgVoMM/books';

const getData = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const postData = async (data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteData = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    return await response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBooks = async () => getData();

export const postBook = async (data) => postData(data);

export const deleteBook = async (id) => deleteData(id);
