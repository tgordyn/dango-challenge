import "./globals.css";
import Providers from "./store/provider";
import Navbar from "./components/Navbar/Index";

export const metadata = {
  title: "Dango Challenge",
  description: "by Tomas Gordyn",
  favicon: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <Providers>
        <body>
          <Navbar />
          <main className='flex min-h-screen flex-col items-center  p-8 mt-8 md:p-24'>{children}</main>
        </body>
      </Providers>
    </html>
  );
}
