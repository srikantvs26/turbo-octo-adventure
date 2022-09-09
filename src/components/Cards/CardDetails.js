import React from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {

    let { id } = useParams();

    return (
        <div>
            Details of Card are Here {id}
        </div>
    )
}

export default CardDetails