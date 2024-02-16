import React from 'react'

function Produit({ image = "https://static.thenounproject.com/png/2503986-200.png", title = "produit", description = "pas de description" }) {
  const styles = {
    container: {
      width: "300px",
      border: "5px solid black",
      margin: "10px",
      borderRadius: "15px",
      boxShadow: "10px 10px 20px grey"
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "30px"
    },
    buttons: {
      color: 'white',
      padding: '5px',
      borderRadius: '5px'
    }
  }
  return (
    <>
      <div style={styles.container}>
        <img style={{ width: "100%" }} src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div style={styles.buttonsContainer}>
          <div style={{ ...styles.buttons, backgroundColor: "blue" }}>Afficher</div>
          <div style={{ ...styles.buttons, backgroundColor: "red" }}>Supprimer</div>
          <div style={{ ...styles.buttons, backgroundColor: "green" }}>Modifier</div>
        </div>
      </div>
    </>
  )
}

export default Produit