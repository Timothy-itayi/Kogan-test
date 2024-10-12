import NavBar from '../components/nav/NavBar';
import "./globals.css";

export const metadata = {
  title: "Kogan",
  description: "Clone of Kogan.com's nav and product details pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white"> {/* Added background color for better contrast */}
        <NavBar />
        <div className="container mx-auto px-4 py-6"> {/* Added container with padding */}
          <main className="  mx-auto"> {/* Set max-width and center align */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
