import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
};

// Sets the theme before first paint to avoid a flash. Defaults to dark.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
