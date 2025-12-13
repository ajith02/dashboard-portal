import api from "../axiosInstance";
import { ENDPOINTS } from "../endpoints";

export const fetchDashboardService = async () => {
  const [users, products, posts, todos] = await Promise.all([
    api.get(ENDPOINTS.USERS),
    api.get(ENDPOINTS.PRODUCTS),
    api.get(ENDPOINTS.POSTS),
    api.get(ENDPOINTS.TODOS),
  ]);

  return {
    users: users.data.users,
    products: products.data.products,
    posts: posts.data.posts,
    todos: todos.data.todos,
  };
};
