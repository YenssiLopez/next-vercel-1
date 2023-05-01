import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function PrincingPage() {
  return (
    <MainLayout>

      <h1>Princing Page</h1>

      <h1 className="title">Ir a {' '}
        {     /*<a href="/" className='text-3xl text-blue-600/100 font-bold'>Home</a> */}
        <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/pricing/princing.jsx</code>
      </p>



    </MainLayout>
  )
}