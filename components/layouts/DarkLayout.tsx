import { FC, ReactElement } from "react";
interface props {
  children: ReactElement;
}

export const DarkLayout: FC<props> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
      <h3>Dark Layout</h3>
      {children}
    </div>
  );
};
