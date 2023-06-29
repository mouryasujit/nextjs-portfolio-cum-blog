import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/Context/ThemeContest";
import Authprovider from "@/components/Authprovider/Authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sujitkumar Mouryaa Portfolio cum Blog website",
  description: "Sujitkumar Mourya portfolio cum blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Authprovider>
            <div className="  flex flex-col min-h-screen max-w-7xl mx-auto justify-between py-5    ">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Authprovider>
        </ThemeProvider>
      </body>
    </html>
  );
}
