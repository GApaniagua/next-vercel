import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import { FC, ReactElement } from "react";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout title="About">
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
