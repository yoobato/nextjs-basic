// 파일 이름은 무조건 _app.js로 해야한다.

import NavBar from "../components/NavBar";

// 렌더링하려는 Page가 Component, pageProps로 들어간다.
export default function App({Component, pageProps}) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      {/* Global styles */}
      <style jsx global>{`
        a {
          color: orange;
        }
      `}</style>
    </>
  );
}
