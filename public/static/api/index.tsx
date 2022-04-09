const baseUrl = 'http://localhost:3000';
// const baseUrl = 'https://omerald-mern-fe.vercel.app/';

// export const imagePath = 'http://omerald.com/public/uploads/articleimages/';
// export const getArticle = `http://localhost:3000/api/articles`;
// export const getAuthors = `http://localhost:3000/api/authors`;
// export const getTopics = `http://localhost:3000/api/topics`;

export const articleImagePath =
  'http://omerald.com/public/uploads/articleimages/';
export const topicImagePath = 'http://omerald.com/public/uploads/htimages/';
export const bannerImagePath =
  'http://omerald.com/public/uploads/bannerimages/';

export const getSearchItems = `${baseUrl}/api/search/getSearchArticles`;
export const searchByParams = `${baseUrl}/api/search/getByTitle`;
export const getArticle = `${baseUrl}/api/articles`;
export const getAuthors = `${baseUrl}/api/authors`;
export const getTopics = `${baseUrl}/api/topics`;
