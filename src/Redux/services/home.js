export const getAllPosts = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=20"
    );
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
    return error;
  }
};
