import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      {/* <a href=""> 태그 대신에 Link 사용 (a 태그는 새로고침 발생) */}
      {/* Link는 결국 a 태그로 바뀌긴 하는데, className이나 style 등을 적용할 수 없음 */}
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>About</a>
      </Link>
    </nav>
  );
}