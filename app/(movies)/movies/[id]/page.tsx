export default async function MovieDetail({ params, searchParams }) {
    const { id } = await params;
    console.log('params:', { id });
    console.log('searchParams:', await searchParams);

    return <h1>Movie {id}</h1>;
}
