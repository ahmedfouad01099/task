export const getAllPosts = async () => {
  try {
    const res = await fetch("https://task-00.herokuapp.com/posts/get");
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// ===================================================================

export const onAddingPostService = async (postForm) => {
  console.log("17--=", postForm);
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
    console.log("30--", resData);
    return resData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
