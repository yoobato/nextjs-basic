import NavBar from "./NavBar";

// children은 <Layout></Layout> 안에 있는 것들
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
