import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />
            <main className={styles.main}>
              <>
                {children}
              </>
              <footer className={styles.footer}>
                <div className={`${styles.footerContainer}`}>
                  <h3>Moshi &copy; 2024</h3>
                  <div className={`${styles.linksContainer}`}>
                    <h5>Terms of Service</h5>
                    <h5>Privacy Policy</h5>
                  </div>
                </div>
              </footer>
            </main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
