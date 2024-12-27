
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async() => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }
  return response.json();
}

export const getPostDetails = async(id: number) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts details: ${response.statusText}`);
  }
  return response.json();
}

export const getPostComments = async(postId: number) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts comments: ${response.statusText}`);
  }
  return response.json();
}
