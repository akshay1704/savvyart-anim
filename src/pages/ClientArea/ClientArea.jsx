// App.js
import React, { useState } from 'react';
import { Grid } from "../../components/grid/grid"
import './ClientArea.scss';

function ClientArea() {
  const [clientId, setClientId] = useState('');
  const [submittedClientId, setSubmittedClientId] = useState('');

  const handleClientIdChange = (event) => {
    setClientId(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedClientId(clientId);
  };

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
      {submittedClientId && <Grid
        images={images}
        mode="auto"
        width="100%"
        height="100%"
        gridLayout={"vertical"}
        submit={(images) => {}}
        clientId={submittedClientId} />}
    </div>
  );
}

export default ClientArea;


