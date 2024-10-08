
import "./globals.css";



export const metadata = {
  title: "Kogan ",
  description: "Clone of Kogan.com's nav and product details pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
