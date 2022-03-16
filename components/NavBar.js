import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      {/* <a href=""> 태그 대신에 Link 사용 (a 태그는 새로고침 발생) */}
      {/* Link는 결국 a 태그로 바뀌긴 하는데, className이나 style 등을 적용할 수 없음 */}
      <Link href="/">
        {/* 스타일 두 개 쓰려면 아래처럼 backtick 사용 */}
        <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
      </Link>
      <Link href="/about">
        {/* 스타일 두 개 쓰려면 아래처럼 array join 해도 됨. */}
        <a className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}>About</a>
      </Link>
    </nav>
  );
}
