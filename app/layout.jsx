import App from "/components/App"

export const metadata = {
    title: 'Learn Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <App>
                    {children}
                </App>
            </body>
        </html>
    );
}
