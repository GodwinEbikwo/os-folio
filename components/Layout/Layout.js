import s from "./L.module.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Nav from "@components/Nav";
import Link from "next/link";

export default function Layout({ children, hasNav = true, hasFooter = false }) {
  return (
    <LazyMotion features={domAnimation}>
      {hasNav && <Nav />}
      <main className={s.main}>{children}</main>
      {hasFooter && (
        <div
          style={{
            margin: "0 auto",
            maxWidth: "85rem",
            width: "100%",
            padding: "1rem 0 2rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            backgroundColor: "inherit",
          }}
        >
          <div style={{ margin: "1rem 0 1rem .5rem" }}>
            <Link href="/">
              <a
                aria-label="go back home"
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                ← Back home
              </a>
            </Link>
          </div>
        </div>
      )}
    </LazyMotion>
  );
}
