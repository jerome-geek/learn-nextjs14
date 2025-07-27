import { API_URL } from '../const';

async function getVideos(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error('Something broke....');
    // const res = await fetch(`${API_URL}/${id}/videos`);
    // const json = await res.json();
    // return json;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);

    return <h6>{JSON.stringify(videos)}</h6>;
}
