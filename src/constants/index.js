import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Fonctionnalités",
        url: "#features",
    },
    {
        id: "1",
        title: "Tarifs",
        url: "#pricing",
    },
    {
        id: "2",
        title: "Comment utiliser",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "Feuille de route",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "Créer un compte",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Se connecter",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
    "Génération de photos",
    "Amélioration de photos",
    "Intégration transparente",
];

export const brainwaveServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

export const roadmap = [
    {
        id: "0",
        title: "Reconnaissance vocale",
        text: "Permet au chatbot de comprendre et de répondre aux commandes vocales, facilitant ainsi l'interaction avec l'application sans utiliser les mains.",
        date: "Mai 2023",
        status: "terminé",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Ajouter des éléments ludiques, tels que des badges ou des classements, pour inciter les utilisateurs à interagir avec le chatbot plus fréquemment.",
        date: "Mai 2023",
        status: "en cours",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Personnalisation du chatbot",
        text: "Permettre aux utilisateurs de personnaliser l'apparence et le comportement du chatbot, rendant ainsi l'interaction plus engageante et amusante.",
        date: "Mai 2023",
        status: "terminé",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Intégration avec des API",
        text: "Permettre au chatbot d'accéder à des sources de données externes, telles que des API météorologiques ou des API de nouvelles, pour fournir des recommandations plus pertinentes.",
        date: "Mai 2023",
        status: "en cours",
        imageUrl: roadmap4,
    },
];

export const collabText =
    "Avec une automatisation intelligente et une sécurité de premier ordre, c'est la solution idéale pour les équipes cherchant à travailler plus efficacement.";

export const collabContent = [
    {
        id: "0",
        title: "Intégration transparente",
        text: "Avec une automatisation intelligente et une sécurité de premier ordre, c'est la solution idéale pour les équipes cherchant à travailler plus efficacement.",
    },
    {
        id: "1",
        title: "Automatisation intelligente",
    },
    {
        id: "2",
        title: "Sécurité de premier ordre",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Basique",
        description: "Chatbot IA, recommandations personnalisées",
        price: "0",
        features: [
            "Un chatbot IA capable de comprendre vos requêtes",
            "Recommandations personnalisées basées sur vos préférences",
            "Possibilité d'explorer l'application et ses fonctionnalités sans aucun coût",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Chatbot IA avancé, support prioritaire, tableau de bord analytique",
        price: "9.99",
        features: [
            "Un chatbot IA avancé capable de comprendre des requêtes complexes",
            "Un tableau de bord analytique pour suivre vos conversations",
            "Support prioritaire pour résoudre les problèmes rapidement",
        ],
    },
    {
        id: "2",
        title: "Entreprise",
        description: "Chatbot IA personnalisé, analyses avancées, compte dédié",
        price: "Contact",
        features: [
            "Un chatbot IA personnalisé capable de comprendre vos requêtes",
            "Analyses avancées pour des recommandations encore plus précises",
            "Compte dédié avec support complet",
        ],
    },
];

export const benefits = [
    {
        id: "0",
        title: "Posez toutes vos questions",
        text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à chercher dans plusieurs sources.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Amélioration continue",
        text: "L'application utilise le traitement du langage naturel pour comprendre les requêtes des utilisateurs et fournir des réponses précises et pertinentes.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Connectez-vous partout",
        text: "Connectez-vous avec le chatbot IA depuis n'importe où et sur n'importe quel appareil, rendant l'accès plus pratique et accessible.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Réponses rapides",
        text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à chercher dans plusieurs sources.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Posez toutes vos questions",
        text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à chercher dans plusieurs sources.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Amélioration continue",
        text: "L'application utilise le traitement du langage naturel pour comprendre les requêtes des utilisateurs et fournir des réponses précises et pertinentes.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];
