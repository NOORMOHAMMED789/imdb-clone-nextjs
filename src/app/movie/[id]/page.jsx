import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <div>
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity trasition-300"
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="image"
            width={500}
            height={300}
            style={{ maxWidth: "100%", height: "100%" }}
          />
          <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">
              {movie.title || movie.name}
            </h2>
            <p className="text-lg mb-3">{movie.overview}</p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
