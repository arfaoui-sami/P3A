import React from 'react'
import { useHistory, Link } from 'react-router-dom'

const Employee_details = () => {
    const history = useHistory();

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <h1>Details
                <Link onClick={() => history.goBack()}> Go Back</Link>
            </h1>
            <Link onClick={refreshPage}>refresh</Link>

        </div>
    )
}

export default Employee_details;
