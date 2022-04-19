// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)
// NextJS는 Server-side Rendering

import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// https://www.themoviedb.org
const API_KEY = "5669791686b40d8fc307979dcfc483ad";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Looading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
