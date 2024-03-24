// App.js
import React, { useEffect, useState } from "react"
import { Grid } from "../../components/grid/grid"
import "./ClientArea.scss"
import { useAWS } from "../../hooks/aws"

function ClientArea() {
  const [clientId, setClientId] = useState("")
  const [submittedClientId, setSubmittedClientId] = useState("")
  const [loadedImages, setLoadedImages] = useState(false)
  const [images, setImages] = useState([])
  const { listImages } = useAWS()

  const handleClientIdChange = (event) => {
    setClientId(event.target.value)
  }

  const handleSubmit = () => {
    setSubmittedClientId(clientId)
    setImages([])
    listImages(clientId, setImages)
    setLoadedImages(true)
  }

  useEffect(() => {
    console.log(images)
  }, [images, loadedImages])

  const downloadImages = (images) => {
    //Write it here
  }

  return (
    <div className="ClientArea">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Client ID"
          value={clientId}
          onChange={handleClientIdChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {images.length > 0 && (
        <Grid
          gap={10}
          gridDimensions={{ columns: 8 }}
          gridLayout="vertical"
          height={"80%"}
          width={"80%"}
          images={images}
          mode="auto"
          enableDarkMode={false}
          submit={downloadImages}
        />
      )}
    </div>
  )
}

export default ClientArea;


