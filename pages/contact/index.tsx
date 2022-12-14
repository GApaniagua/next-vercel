import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function index() {
  return (
    <MainLayout title="Contact">
      <>
        <h1>Contact Page</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>
      </>
    </MainLayout>
  );
}
