import s from "./L.module.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Nav from "@components/Nav";

export default function Layout({ children, hasNav = true }) {
  return (
    <LazyMotion features={domAnimation}>
      {hasNav && <Nav />}
      <main className={s.main}>{children}</main>
    </LazyMotion>
  );
}
