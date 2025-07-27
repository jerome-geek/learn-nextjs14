import Link from 'next/link';
import { useState } from 'react';

export const metadata = {
    title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

export default async function Page() {
    const movies = await getMovies();
    console.log('🚀 ~ Page ~ movies:', movies);
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
