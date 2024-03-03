import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'xylodine',
  description: '@xylodine on everythng',
  icons: 'https://cdn.discordapp.com/attachments/1208672869039480853/1213651319114567740/95b3c4e67790b07c332549aabae7041f-removebg-preview.png?ex=65f63fdf&is=65e3cadf&hm=2e1ce43ff10cc594e7afc100e4ff50f42476b6d949ddbcb3f4dc681539242d2a&'
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
