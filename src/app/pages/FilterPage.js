'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function FilterPage() {
  const [vehicleTypes, setVehicleTypes] = useState([])
  const [selectedVehicleType, setSelectedVehicleType] = useState('')
  const [selectedVehicleName, setSelectedVehicleName] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [years, setYears] = useState([])

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}vehicles/GetMakesForVehicleType/car?format=json`,
      )
      .then((response) => setVehicleTypes(response.data.Results))
      .catch((error) => console.error('Error fetching vehicle types', error))

    const currentYear = new Date().getFullYear()
    const yearOptions = []
    for (let year = 2015; year <= currentYear; year++) {
      yearOptions.push(year)
    }
    setYears(yearOptions)
  }, [])

  const handleVehicleTypeChange = (e) => {
    const selectedMakeId = e.target.value
    const selectedType = vehicleTypes.find(
      (type) => String(type.MakeId) === selectedMakeId,
    )
    setSelectedVehicleType(selectedMakeId)
    setSelectedVehicleName(selectedType ? selectedType.MakeName : '')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center bg-[url('/images/backgroundCar.png')]">
      <h1 className="text-5xl font-extrabold mb-8 text-transparent text-center drop-shadow-lg text-stroke">
        CAR DEALER APP
      </h1>

      <div className="p-8 rounded-md shadow-lg bg-white bg-opacity-90">
        <div className="mb-4">
          <label className="block text-lg text-gray-800">
            Select Vehicle Type:
          </label>
          <select
            className="border rounded-md p-2 w-full bg-white bg-opacity-80 text-gray-800"
            value={selectedVehicleType}
            onChange={handleVehicleTypeChange}
          >
            <option value="">Select a vehicle type</option>
            {vehicleTypes.map((type) => (
              <option key={type.MakeId} value={type.MakeId}>
                {type.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-800">
            Select Model Year:
          </label>
          <select
            className="border rounded-md p-2 w-full bg-white bg-opacity-80 text-gray-800"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <Link
          href={{
            pathname: `/result/${selectedVehicleType}/${selectedYear}`,
            query: { makeName: selectedVehicleName },
          }}
        >
          <button
            className={`bg-blue-500 text-white p-2 rounded w-full ${
              !selectedVehicleType || !selectedYear
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            disabled={!selectedVehicleType || !selectedYear}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  )
}
