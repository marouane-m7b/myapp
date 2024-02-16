import React from 'react'
import Vendeur from './Vendeur'

function VendeurList() {
  const vendeurData = [
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      nom: "Smith",
      prenom: "John",
      genre : "homme"
    },
    {
      nom: "Johnson",
      prenom: "Jane",
      genre : "femme"
    },
    {
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      nom: "Doe",
      prenom: "Robert",
      genre : "homme"
    },
    {
      nom: "Williams",
      prenom: "Emily",
      genre : "femme"
    },
    {
      nom: "Davis",
      prenom: "Michael",
      genre : "homme"
    },
    {
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      nom: "Jones",
      prenom: "Amanda",
      genre : "femme"
    },
  ];
  
  return (
    <div>
      {vendeurData.map((vendeur) => (
        <Vendeur image={vendeur.image} nom={vendeur.nom} prenom={vendeur.prenom} genre={vendeur.genre} />
      ))}
    </div>
  )
}

export default VendeurList