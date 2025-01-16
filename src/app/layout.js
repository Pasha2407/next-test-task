import { Header } from "./components/header/header";
import "./globals.css";

export const metadata = {
  title: "next-test-task",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header><Header /></header>
        <main> {children}</main>
      </body>
    </html>
  );
}
