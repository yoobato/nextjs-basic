import { useRouter } from "next/router";

// [id].js 이렇게 하면, /movies/[id]가 Routing 된다.
export default function Detail() {
  const router = useRouter();
  console.log(router);

  return "detail";
}
