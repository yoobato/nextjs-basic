// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)
// NextJS는 Server-side Rendering

export default function Home() {
  return (
    <div>
      <h1 className="active">Hello</h1>
      {/* Scope가 index 페이지인 styles */}
      <style jsx global>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
