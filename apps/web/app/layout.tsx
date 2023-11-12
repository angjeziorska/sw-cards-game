import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@mui/joy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SW Card Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container sx={{ p: 4 }}>{children}</Container>
      </body>
    </html>
  );
}
