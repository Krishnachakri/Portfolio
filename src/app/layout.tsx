import '../styles/globals.css';
import { ReactNode } from 'react';
import LenisProvider from '../components/LenisProvider';
import CustomCursorClient from '../components/CustomCursorClient';

export const metadata = {
  title: 'KRISHNA CHAKRI — Experience',
  description: 'Cinematic interactive experience for Krishna Chakri'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only p-2">Skip to content</a>
        <LenisProvider>
          <CustomCursorClient />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
