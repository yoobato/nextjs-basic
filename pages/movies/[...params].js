import { useRouter } from "next/router";
import Seo from "../../components/Seo";

// [...params].js 이렇게 하면, path로 구분된 모든게 params 배열로 들어온다.
//   ex) /abc/def/123 이면, params = ["abc", "def", "123"]
export default function Detail({ params }) {
  const router = useRouter();

  // router 객체는 백엔드 입장에서는 빈 array 다. (router는 프론트엔드에서만 사용)
  // const [title, id] = router.query.params || [];

  // 이렇게하면 서버에서 params를 가지고 온다. (pre-render되는 꼴임.)
  // SEO를 위해서는 Server-side가 더 좋다?
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// NextJS는 기본적으로 Server-side Context를 제공한다 (getServerSideProps 함수의 argument)
export function getServerSideProps({ params: {params} }) {
  return {
    props: {
      params,
    },
  };
}
