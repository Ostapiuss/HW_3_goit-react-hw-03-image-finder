import { HTTP, QUERY } from "./common";

export async function getImagesByCategory (category, perPage) {
  try {
    return await HTTP.get(`${QUERY}&per_page=${perPage}&category=${category}`);
  } catch (e) {
    console.log(e)
  }
}
