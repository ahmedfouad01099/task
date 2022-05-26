export const getAllPosts = async () => {
  try {
    const res = await fetch("https://task-00.herokuapp.com/posts/get");
    const posts = await res.json();
    return posts;
  } catch (error) {
    return error;
  }
};

// ===================================================================

export const onAddingPostService = async (postForm) => {
  try {
    const res = await fetch("https://task-00.herokuapp.com/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postForm.title.value,
        desc: postForm.desc.value,
        url: postForm.url.value,
      }),
    });

    const resData = await res.json();
    return resData;
  } catch (error) {
    return error;
  }
};
