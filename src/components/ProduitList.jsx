import React from 'react'
import Produit from './Produit'

function ProduitList() {
    const produitData = [
        {
            title: "AirPods",
            description: "Écouteurs sans fil"
        },
        {
            image: "https://media.croma.com/image/upload/v1694674571/Croma%20Assets/Communication/Mobiles/Images/300749_0_y3aw57.png",
            title: "téléphone",
            description: "Smartphone élégant"
        },
        {
            image: "https://www.imagensempng.com.br/wp-content/uploads/2021/09/02-37.png",
            title: "télévision",
            description: "Écran haute définition"
        },
        {
            image: "https://www.kickgame.com/cdn/shop/products/sony-playstation-ps5-blu-ray-edition-console-uk-plug-white_1.png?v=1665665587",
            title: "PS5",
            description: "Console de jeu puissante"
        },
        {
            title: "montre",
            description: "Montre élégante"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Avant-Tower-Gaming-PC.png",
            title: "ordinateur",
            description: "PC de jeu performant"
        }
    ];

    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
        }
    }
    return (
        <div style={styles.container}>
            {produitData.map((produit, index) => (
                <Produit key={index} image={produit.image} title={produit.title} description={produit.description} />
            ))}
        </div>
    )
}

export default ProduitList