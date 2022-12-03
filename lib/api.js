export function getItem(id) {
    let story = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => res.json())
    return story
}
export function getTopStoryIDs() {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(res => res.slice(0, 30))
}
export async function getTopStories() {
    let ids = await getTopStoryIDs()
    return Promise.all(ids.map(id => getItem(id)))
}