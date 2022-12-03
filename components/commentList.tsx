import { getItem } from "../lib/api";

// take all ids given and fetch the comments for each id
// then return the comments
export async function getComments(ids: number[]) {
    const comments = await Promise.all(ids.map((id) => getItem(id)));
    return comments;
}
