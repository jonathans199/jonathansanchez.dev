import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='dark'>
      <Head />
      <body>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
