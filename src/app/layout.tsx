import "../styles/global.css"; // ✅ Correct import for Next.js

export const metadata = {
    title: "AI Career Guidance System",
    description: "Login and Signup Flow with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-100 flex items-center justify-center min-h-screen">
                {children}
            </body>
        </html>
    );
}
