// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)
// NextJS는 Server-side Rendering

import Seo from "../components/Seo";

// getServerSideProps()에서 return하는 props
// ReactJS는 NextJS가 넘긴 props를 Hydrate해서 화면에 그려줌.
export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이 안의 코드는 백엔드(server)에서만 작동함.
export async function getServerSideProps() {
  // 데이터를 먼저 받은 다음에 렌더링함. -> 로딩 불필요.
  // But, 아래 작업이 오래 걸리면 사용자가 흰 화면을 보는 시간이 길어짐.
  const { results } = await (await fetch("http://localhost:3000/api/movies")).json();
  return {
    props: {
      results,
    },
  };
}
