import { useEffect } from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import { invoke } from '@tauri-apps/api/core';
import { NextUIProvider } from '@nextui-org/react';
import NiceModal from '@ebay/nice-modal-react';
import './tailwind.css';
import toast, { Toaster } from 'react-hot-toast';
import { I18nextProvider } from 'react-i18next';

import i18n from './translations/i18n';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];
// clientLoader.hydrate = true;

// export function HydrateFallback() {
//   return <p>Loading user preferences...</p>;
// }

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      invoke('close_splashscreen', {
        userId: localStorage.getItem('userID') ?? '',
      })
        .then(() => {
          console.log('Splash screen closed successfully.');
        })
        .catch((error) => {
          console.error('Failed to close splash screen:', error);
        });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <NextUIProvider>
            <Toaster
              reverseOrder={false}
              position="top-right"
              toastOptions={{
                className: 'dark:bg-[#121212] dark:text-white',
              }}
            />
            <NiceModal.Provider>
              <div id="font-wrapper">
                <Outlet />
              </div>
            </NiceModal.Provider>
            <ScrollRestoration />
            <Scripts />
          </NextUIProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>Loading...</p>
        <Scripts />
      </body>
    </html>
  );
}
