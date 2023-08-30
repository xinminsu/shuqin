import Head from 'next/head'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}

export default function ULayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
