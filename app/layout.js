import './globals.css';
// import AuthSessionProvider from './providers/SessionProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AuthSessionProvider> */}
          <Navbar />
          {children}
          <Footer />
        {/* </AuthSessionProvider> */}
      </body>
    </html>
  );
}
