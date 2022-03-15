// ReactJS는 Library (개발자가 React를 사용)
// NextJS는 Framework (NextJS framework가 개발자의 코드를 호출)

import { useState } from "react";
import NavBar from "../components/NavBar";

// NextJS는 Server-side Rendering

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}
