/** @type {import('next').NextConfig} */

// https://www.themoviedb.org
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // source, destination은 pattern matching도 가능
    // permanent 여부에 따라 브라우저가 이 redirect를 기억하냐 마냐가 결정됨.
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // Rewrites : Redirect 시키는데 주소창의 URL이 바뀌지 않음. (URL을 숨길 수 있다)
    // Pattern Matching 가능 (:id는 그대로 맵핑된다)
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
}

module.exports = nextConfig
