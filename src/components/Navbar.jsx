import React from 'react'

function Navbar() {
    const styles = {
        flex : {
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center",
            gap: "20px"
        },
        container: {
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center",
            gap: "20px",
            padding: "0 30px",
            backgroundColor: "gray",
            color: "white",
            height: "72px"

        }
    }
  return (
    <div style={styles.container}>
        <div>Home</div>
        <div style={styles.flex}>
            <div>Produit</div>
            <div>A propos</div>
            <div>Contact</div>
            <div>FAQ</div>
        </div>
        <div style={styles.flex}>
            <div>S'authentifier</div>
            <div>S'inscrire</div>
        </div>
    </div>
  )
}

export default Navbar