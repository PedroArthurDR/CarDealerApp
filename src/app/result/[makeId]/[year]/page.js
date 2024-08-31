import { Suspense } from 'react'
import Link from 'next/link'
import VehicleModels from '../../../components/VehicleModels'

export async function generateStaticParams() {
  const res = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
  )
  const data = await res.json()

  const paths = data.Results.map((make) => ({
    makeId: String(make.MakeId),
    year: '2021',
  }))

  return paths
}

export default function ResultPage({ params }) {
  const { makeId, year } = params

  if (!makeId || !year) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center bg-[url('/images/backgroundCar.png')]">
      <h1 className="text-6xl font-bold mb-4 text-stroke">
        Vehicle Models for {makeId} in {year}
      </h1>

      <Suspense fallback={<div>Loading vehicle models...</div>}>
        <VehicleModels makeId={makeId} year={year} />
      </Suspense>

      <Link href="/" passHref>
        <button className="bg-gray-500 text-white p-2 rounded">
          Go Back to Main Page
        </button>
      </Link>
    </div>
  )
}
