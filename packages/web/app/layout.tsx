import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import './global.scss';

export const metadata = {
  title: 'sykofizz',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
