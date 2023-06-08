import MyApp from "../components/MyApp"

export const metadata = {
    title: 'Learn Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MyApp>
                    {children}
                </MyApp>
            </body>
        </html>
    );
}
