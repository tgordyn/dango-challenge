import "./globals.css";
import Providers from "./store/provider";
import Navbar from "./components/Navbar/Index";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body >
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
