import Link from "next/link";
import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";

export const index = () => {
  return (
    <MainLayout title="Pricing">
      <>
        <h1>Pricing Page</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>
      </>
    </MainLayout>
  );
};

export default index;
