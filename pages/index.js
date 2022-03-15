// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)

import { useState } from "react";

// NextJS는 Server-side Rendering

export default function Home() {
  // Hydration 예시
  // cf) Hydration: react.js를 프론트엔드 안에서 실행하는거
  // NextJS는 react.js를 백엔드에서 렌더링해서 HTML로 만들어 리턴하고, (static pre-rendering)
  // 브라우저가 react.js를 로딩하면 NextJS가 렌더링한 것과 연결되어서 react.js 앱이 된다.
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
