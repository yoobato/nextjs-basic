// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)
// NextJS는 Server-side Rendering

import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}
