import { inter, montserrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      className={`${inter.className} antialiased`}
      >{children}</body>
      <footer className='py-10 flex justify-center items-center '>
        Hecho con ❤ por AppSolutions
      </footer>
    </html>
  );
}
