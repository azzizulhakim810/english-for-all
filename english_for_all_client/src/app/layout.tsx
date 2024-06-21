import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// import wrapper
import ApolloClientProvider from "../components/Wrapper";
import { ApolloProvider } from "@apollo/client";
import { ClerkProvider } from "@clerk/nextjs";
import Wrapper from "./Wrapper";
import client from "@/lib/apolloClient";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "English For All",
  description: "English for Career Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloClientProvider>
      <ClerkProvider>
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.png" sizes="any" />
            <link
              rel="icon"
              href="/icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
          </head>
          <body className={`${poppins.className} bg-gray-100 relative`}>
            <Wrapper>{children}</Wrapper>
          </body>
        </html>
      </ClerkProvider>
    </ApolloClientProvider>
  );
}
