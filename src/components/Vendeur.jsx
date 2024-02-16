import React from 'react'

function Vendeur({ image, nom, prenom, genre }) {
    const styles = {
        container: {
            width: "200px",
            height: "50px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            margin: "10px",
            border: "5px solid black",
            borderRadius: "3000px",
            gap: "10px",
            boxShadow: "10px 10px 20px grey",
            marginBottom: "50px"
        }
    }
    return (
        <div style={styles.container}>
            <img src={image ? image : (genre === "homme" ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" : "https://cdn-icons-png.flaticon.com/256/3135/3135789.png")} alt="" style={{ height: "100%", borderRadius: "50%" }} />
            <div>{nom} {prenom}</div>
        </div>
    )
}

export default Vendeur