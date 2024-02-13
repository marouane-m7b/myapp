import React from 'react'

function Vendeur() {
    return (
        <div style={{ width: "200px", height:"50px", display: "flex", justifyContent: "left", alignItems: "center", margin:"10px", border:"5px solid black", borderRadius:"3000px", gap:"10px", boxShadow:"10px 10px 20px grey", marginBottom:"50px" }}>
            <img src="/profile.png" alt=""style={{height:"100%"}} />
            <div>Nom Prénom</div>
        </div>
    )
}

export default Vendeur