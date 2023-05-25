import Nav from "./nav";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <div>
                <Nav />
            </div>
            {children}
            <div>
                <p>Footer</p>
            </div>
        </body>
      </html>
    );
  }
