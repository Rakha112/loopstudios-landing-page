import React from 'react'
import dataCreations from '../components/data/dataCreations'
const Creations = () => {
    return (
        <div className="creations">
            <h2>our creations</h2>
            {
                dataCreations.map((data) => {
                    return (
                        <div className="creation_list"  key={data.id}>
                            <img src={data.imgM} alt="" />
                            <h3 id={data.id}>{data.h3}</h3>
                        </div>

                    )
                })
            }
            <button>see all</button>
        </div>
    )
}

export default Creations
