'use client'
import React from 'react'
import Nav from '../components/Nav'
import MarkdownReader from '../components/ReactMarkdown'

export default function page() {
    const markdownContent = `# Présentation du Projet Imya

## Vision

Imya est une plateforme de lecture en ligne innovante, dédiée à la promotion et à la diffusion de la littérature africaine. Notre mission est de mettre en lumière la richesse et la diversité des voix littéraires africaines, en commençant par le Gabon, puis en s'étendant progressivement à d'autres pays du continent.

## Objectifs

1. Démocratiser l'accès à la littérature africaine
2. Soutenir les auteurs et les maisons d'édition locales
3. Promouvoir la culture et l'identité africaines à travers la littérature
4. Encourager la lecture et l'alphabétisation numérique

## Fonctionnalités clés

1. **Catalogue diversifié** : Une vaste sélection d'œuvres africaines, des classiques aux auteurs contemporains.
2. **Modèle freemium** : Accès gratuit à une partie du contenu, avec des options d'abonnement pour le contenu premium.
3. **Lecture en ligne fluide** : Interface de lecture optimisée pour différents appareils (ordinateurs, tablettes, smartphones).
4. **Découverte personnalisée** : Algorithmes de recommandation basés sur les préférences de lecture des utilisateurs.
5. **Communauté littéraire** : Fonctionnalités sociales permettant aux lecteurs de partager leurs avis et recommandations.
6. **Support aux auteurs** : Outils pour les auteurs indépendants souhaitant publier leurs œuvres sur la plateforme.

## Technologie

- **Frontend** : Next.js pour une expérience utilisateur réactive et performante
- **Backend** : API RESTful (Node.js)
- **Base de données** : PostgreSQL
- **Stockage des livres** : Système de fichiers sécurisé avec CDN pour une distribution rapide
- **Authentification** : JWT pour une sécurité robuste
- **Paiements** : Intégration de solutions de paiement locales et internationales

## Protection du contenu

- Filigrane dynamique personnalisé
- Segmentation du contenu avec chargement progressif
- Mesures anti-copie et anti-capture d'écran
- Chiffrement des données côté client

## Modèle économique

1. **Abonnements** : Accès illimité au contenu premium
2. **Achats à l'unité** : Option d'achat pour des livres spécifiques
3. **Partenariats** : Collaborations avec des écoles, universités et bibliothèques
4. **Revenus publicitaires** : Publicités ciblées et non intrusives sur la version gratuite

## Phases de développement

1. **Phase 1 (0-6 mois)** :
   - Développement de la plateforme de base
   - Partenariats initiaux avec des auteurs et éditeurs gabonais
   - Lancement de la version bêta au Gabon

2. **Phase 2 (6-12 mois)** :
   - Ajout de fonctionnalités avancées (recommandations, communauté)
   - Expansion du catalogue
   - Lancement officiel au Gabon

3. **Phase 3 (12-24 mois)** :
   - Expansion dans d'autres pays d'Afrique centrale
   - Intégration de nouvelles langues
   - Développement d'applications mobiles natives

## Impact attendu

1. Augmentation de l'accessibilité à la littérature africaine
2. Stimulation de l'industrie éditoriale locale
3. Préservation et promotion des langues et cultures africaines
4. Création d'emplois dans le secteur technologique et culturel

## Besoins en collaboration

1. Développeurs full-stack expérimentés en Next.js et Node.js
2. Designers UX/UI spécialisés dans les interfaces de lecture
3. Spécialistes en marketing digital et growth hacking
4. Experts en droits d'auteur et contrats d'édition
5. Partenaires dans l'industrie de l'édition africaine

## Conclusion

Imya représente une opportunité unique de révolutionner l'accès à la littérature africaine tout en soutenant l'écosystème culturel local. Nous recherchons des collaborateurs passionnés et talentueux pour nous aider à concrétiser cette vision et à avoir un impact durable sur la scène littéraire africaine.
`;
  return (
    <div>
        <Nav/>
        <main className='w-full max-w-3xl mx-auto my-14 '>

        <MarkdownReader content={markdownContent}/>
        </main>
    </div>
  )
}
