import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/provider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Panda's Food",
  description: "Order Your Food",
};

export default function RootLayout({ children }) {
  // const router = useRouter();
  // const { pathname } = router;
  // const hideNavbarFooter = pathname === '/login' || pathname === '/signup';
  return (
    <html lang="en">
      <body className={inter.className}>
      <Head>
        <link rel="icon" type="image/png" href="icon/icon.png" />
      </Head>
    <AuthProvider>
    <Navber></Navber>
        {children}
       <Footer></Footer>
    </AuthProvider>
      </body>
    </html>
  );
}
