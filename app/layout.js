import "./styles.css"

export const metadata = {
  title: 'fuck my fuck life',
  description: 'react is a stupid stupid frameowkr',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
