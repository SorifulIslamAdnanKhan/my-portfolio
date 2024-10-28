import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import ReduxProviders from "@/lib/ReduxProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "K. M. Soriful Islam Adnan",
  description: "Portfolio of K. M. Soriful Islam Adnan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          <Providers>{children}</Providers>
        </ReduxProviders>
      </body>
    </html>
  );
}
