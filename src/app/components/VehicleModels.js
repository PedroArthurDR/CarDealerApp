'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import './VehicleModels.css' // Import the CSS file for animations

function VehicleModels({ makeId, year }) {
  const [vehicleModels, setVehicleModels] = useState([])
  const [selectedModel, setSelectedModel] = useState(null) // State to track the selected model
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      )
      .then((response) => setVehicleModels(response.data.Results))
      .catch((error) => setError('Error fetching vehicle models'))
  }, [makeId, year])

  if (error) return <div>{error}</div>

  return (
    <div className="flex flex-wrap justify-center items-center overflow-y-auto max-h-20vh mb-4 w-10/12 rounded-2xl p-4">
      {vehicleModels.map((model) => (
        <div
          className="notification flex-none w-60 mb-2 mr-2 p-4 bg-gray-800 text-white rounded-lg shadow-md"
          key={model.Model_ID}
        >
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle text-lg font-bold">{model.Make_Name}</div>
          <div className="notibody text-sm">{model.Model_Name}</div>
        </div>
      ))}
    </div>
  )
}

export default VehicleModels
