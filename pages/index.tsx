import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function Home() {
  return (      
    <MainLayout>
      <h1>HOME</h1>

      <h1 className="title">Ir a {' '}
        <Link href="/about">About</Link>
        { /* <a href="/about" className='text-3xl text-blue-600/100 font-bold'>About</a> */}

      </h1>
      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/about.jsx</code>
      </p>
    </MainLayout>
  )
}
