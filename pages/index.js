// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)
// NextJS는 Server-side Rendering

import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

// getServerSideProps()에서 return하는 props
// ReactJS는 NextJS가 넘긴 props를 Hydrate해서 화면에 그려줌.
export default function Home({ results }) {
  const router = useRouter();

  const onClick = (id, title) => {
    // Router hook 사용해서 수동으로 Navigating
    // 뒤에 as 부분을 쓰면 URL Masking 가능 (사용자에게 숨길 수 있음.)
    // 아래 예시에서는 ?title="~~"가 붙지만, 주소창에는 안보임.
    // But, 상세페이지의 router 객체에서는 확인이 가능하다.
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title,
      },
    }, `/movies/${id}`);
  }

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
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
