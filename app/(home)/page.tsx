import Link from 'next/link';
import { API_URL } from '../../const';

export const metadata = {
    title: 'Home',
};

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

export default async function Page() {
    const movies = await getMovies();

    return (
        <div>
            {movies.map((movie) => (
                <li>
                    <Link key={movie.id} href={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </div>
    );
}
