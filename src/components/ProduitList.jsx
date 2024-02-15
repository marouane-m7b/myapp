import React from 'react'
import Produit from './Produit'

function ProduitList() {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
        }
    }
    return (
        <div style={styles.container}>
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
        </div>
    )
}

export default ProduitList