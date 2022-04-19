import { useRouter } from "next/router";

// [id].js 이렇게 하면, /movies/:id가 Routing 된다.
export default function Detail() {
  const router = useRouter();

  // Home에서 클릭해서 들어왔을 때만 title이 있다.
  // 바로 상세 페이지로 접속하면 데이터 없음.
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
