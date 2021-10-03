import React from 'react'
import Loader from "react-loader-spinner";
function Loading() {
    return (
        <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Loader type="ThreeDots"
                color="gray"
                height={50}
                width={50}
            />
        </div>
    )
}

export default Loading
