import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home - Yenssi</title>
        <meta name='descripcion' content='Home Page' />
      </Head>

      <Navbar />



      <main className={styles.main}>
        {children}
      </main>



    </div>
  )
}
