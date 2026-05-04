import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Review & Messages Agent',
  description: 'Your AI employee replies to customers 24/7.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
