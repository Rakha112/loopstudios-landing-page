import React from 'react'
import dataCreations from '../components/data/dataCreations'
const Creations = () => {
    return (
        <div className="creations">
            <div className="isi_creation">
                <h2>our creations</h2>
                <button className="bt_D">see all</button>
            </div>
            <div className="creations_container">

            
            {
                dataCreations.map((data) => {
                    return (
                        <div className="creation_list"  key={data.id}>
                            <img className="imgM" src={data.imgM} alt="" />
                            <img className="imgD" src={data.imgD} alt="" />
                            <h3 id={data.id}>{data.h3}</h3>
                        </div>

                    )
                })
            }
            </div>
            <button className="bt_M">see all</button>
        </div>
    )
}

export default Creations
