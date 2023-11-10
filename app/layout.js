import './globals.css'
import Provider from "../src/components/themes/Provider"

export const metadata = {
  title: 'Gildas Dossou',
  description: 'bienvenu sur le site web de gildas dossou',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="">
        <Provider>
          <main className="min-h-screen bg-bgLightPrimary dark:bg-bgDarkPrimary">
            {children}
          </main>
        </Provider>
        
      </body>
    </html>
  )
}
