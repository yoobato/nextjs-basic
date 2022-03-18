// 파일 이름은 무조건 _app.js로 해야한다.

import NavBar from "../components/NavBar";

// global style css는 _app.js에서만 import 할 수 있다.
// 다른데서 사용 불가능. (*.module.css 형태로 사용해야 함)
import "../styles/globals.css";


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
