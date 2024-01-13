import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'xylodine',
  description: '@xylodine on everythng',
  icons: 'https://cdn.discordapp.com/attachments/1176888417393573889/1195850489909219410/Peter_Griffins_Medallion_-_Medallion_-_Fortnite.png?ex=65b57d8e&is=65a3088e&hm=7e674393b630c10da84554f38158747bfa7be5c3162c34e74a761cceeb8dc02c&'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
