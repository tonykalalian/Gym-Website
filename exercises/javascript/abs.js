const posts = [
  {
    id: 1,
    thumbUrl: "images/abs/1.jpg",
    postLink: "",
    category: "",
    categoryLink: "",
    title: "",
    summary: "",
    author: "Tony",
    datePublished: "17-7-2000",
  },

  {
    id: 2,
    thumbUrl: "images/abs/2.jpg",
    postLink: "#",
    category: "",
    categoryLink: "",
    title: "",
    summary: "",
    author: "",
    datePublished: "",
  },

  {
    id: 3,
    thumbUrl: "images/abs/3.jpg",
    postLink: "#",
    category: "",
    categoryLink: "",
    title: "",
    summary: "",
    author: "",
    datePublished: "",
  },

  {
    id: 4,
    thumbUrl: "images/abs/4.jpg",
    postLink: "",
    category: "",
    categoryLink: "",
    title: "",
    summary: "",
    author: "",
    datePublished: "",
  },

  {
    id: 5,
    thumbUrl: "images/abs/5.jpg",
    postLink: "",
    category: "",
    categoryLink: "",
    title: "",
    summary: "",
    author: "",
    datePublished: "",
  },

  {
    id: 6,
    thumbUrl: "images/abs/6.jpg",
    postLink: "",
    category: "",
    categoryLink: "",
    title: "",
    summary: "",
    author: "",
    datePublished: "",
  },
];

const blogPostsContainer = document.querySelector(".blog-posts-container");

const createPostDiv = (
  postLink,
  thumbUrl,
  category,
  categoryLink,
  title,
  summary,
  author,
  datePublished
) => {
  let HTMLCode = `<div class="post">
      <a href="${postLink}" class="post-link"></a>
      <div class="thumbnail">
        <img src="${thumbUrl}" alt="" />
      </div>
  
      <div class="title-container">
        <a href="${categoryLink}" class="category">${category}</a>
        <a href="${postLink}">
          <h2 class="title">${title}</h2>
        </a>
      </div>
  
      <div class="summary">
        ${summary}
      </div>
  
      <div class="meta-data">
        <div class="author">By ${author}</div>
        <div class="date">on ${datePublished}</div>
      </div>
    </div>`;

  blogPostsContainer.insertAdjacentHTML("beforeend", HTMLCode);
};

const populateAllPosts = () => {
  posts.forEach((post) => {
    let postLink = post.postLink;
    let thumbUrl = post.thumbUrl;
    let category = post.category;
    let categoryLink = post.categoryLink;
    let title = post.title;
    let summary = post.summary;
    let author = post.author;
    let datePublished = post.datePublished;

    createPostDiv(
      postLink,
      thumbUrl,
      category,
      categoryLink,
      title,
      summary,
      author,
      datePublished
    );
  });
};

populateAllPosts();
