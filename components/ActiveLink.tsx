import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface props {
  text: string;
  href: string;
}

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
