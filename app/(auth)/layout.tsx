import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import '../globals.css';

export const metadata = {
    title: "Threads",
    description: "Next JS Meta Threads App",
};

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`bg-dark-1 ${inter.className}`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}