// 파일 이름 = URL Path
// Component 이름은 상관없고, export default를 해야한다.

import NavBar from "../components/NavBar";

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
    </div>
  );
}
