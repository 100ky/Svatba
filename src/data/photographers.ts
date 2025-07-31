import type { PhotographerType } from '../types';

export const photographers: PhotographerType[] = [{
    id: 'photo-1',
    name: 'Studio Pardubice - Jana Nováková',
    specialization: 'artistic',
    location: 'Pardubice',
    pricePackages: {
        basic: {
            name: 'Základní balíček',
            price: 12000,
            hours: 6,
            photos: 200,
            includes: ['Obřad a oslava', 'Digitální galerie', 'Základní retušování']
        },
        standard: {
            name: 'Standardní balíček',
            price: 20000,
            hours: 8,
            photos: 400,
            includes: ['Přípravy nevěsty', 'Obřad a oslava', 'Digitální galerie', 'Profesionální retušování', '50 tištěných fotografií']
        },
        premium: {
            name: 'Premium balíček',
            price: 32000,
            hours: 12,
            photos: 600,
            includes: ['Přípravy nevěsty a ženicha', 'Obřad a oslava', 'Digitální galerie', 'Luxusní retušování', '100 tištěných fotografií', 'Svatební album']
        }
    },
    portfolio: ['/images/jana-1.jpg', '/images/jana-2.jpg', '/images/jana-3.jpg'],
    experience: 8,
    contact: {
        phone: '+420 466 123 456',
        email: 'jana@studiopardubice.cz',
        website: 'www.studiopardubice.cz'
    },
    availability: ['2026-05-15', '2026-06-20', '2026-09-10'],
    rating: 4.8,
    reviews: [
        {
            id: 'p1',
            author: 'Eliška a Jakub',
            rating: 5,
            comment: 'Jana skvěle zná všechna krásná místa v Pardubickém kraji. Fotky jsou úžasné!',
            date: '2024-07-15',
            verified: true
        }
    ]
}, {
    id: 'photo-2',
    name: 'Východočeský objektivv - Martin Černý',
    specialization: 'documentary',
    location: 'Litomyšl',
    pricePackages: {
        basic: {
            name: 'Základní balíček',
            price: 10000,
            hours: 5,
            photos: 150,
            includes: ['Obřad', 'Digitální galerie', 'Základní úpravy']
        },
        standard: {
            name: 'Standardní balíček',
            price: 16000,
            hours: 7,
            photos: 300,
            includes: ['Přípravy', 'Obřad a oslava', 'Digitální galerie', 'Profesionální úpravy', 'USB s fotografiemi']
        },
        premium: {
            name: 'Premium balíček',
            price: 25000,
            hours: 10,
            photos: 500,
            includes: ['Celý den', 'Všechny momenty', 'Digitální galerie', 'Luxusní úpravy', 'Tištěné fotografie', 'Fotobox']
        }
    },
    portfolio: ['/images/martin-1.jpg', '/images/martin-2.jpg'],
    experience: 12,
    contact: {
        phone: '+420 461 234 567',
        email: 'martin@vcobjektiv.cz',
        website: 'www.vcobjektiv.cz'
    },
    availability: ['2026-04-12', '2026-07-25', '2026-10-05'],
    rating: 4.7,
    reviews: [
        {
            id: 'p2',
            author: 'Petra a Milan',
            rating: 5,
            comment: 'Martin má skvělé oko pro detail a perfektně využívá krásná místa na východě Čech.',
            date: '2024-06-08',
            verified: true
        }
    ]
},
{
    id: 'photo-3', name: 'Foto Hlinsko - Tereza Svobodová',
    specialization: 'traditional',
    location: 'Hlinsko',
    pricePackages: {
        basic: {
            name: 'Základní balíček',
            price: 14000,
            hours: 6,
            photos: 250,
            includes: ['Obřad a hostina', 'Online galerie', 'Barevné úpravy']
        },
        standard: {
            name: 'Standardní balíček',
            price: 22000,
            hours: 8,
            photos: 400,
            includes: ['Přípravy a obřad', 'Celá oslava', 'Online galerie', 'Retušování', 'Tištěné fotografie 20x30']
        },
        premium: {
            name: 'Premium balíček',
            price: 35000,
            hours: 12,
            photos: 700,
            includes: ['Dva fotografové', 'Celý den', 'Všechny akce', 'Profesionální retušování', 'Luxusní album', 'Canvas obrazy']
        }
    },
    portfolio: ['/images/tereza-1.jpg', '/images/tereza-2.jpg', '/images/tereza-3.jpg'],
    experience: 10,
    contact: {
        phone: '+420 469 345 678',
        email: 'tereza@fotohlinsko.cz',
        website: 'www.fotohlinsko.cz'
    },
    availability: ['2026-05-30', '2026-08-20', '2026-11-15'],
    rating: 4.6,
    reviews: [
        {
            id: 'p3',
            author: 'Veronika a Radek',
            rating: 5,
            comment: 'Tereza má skvělý cit pro tradiční atmosféru a krásně zachytila naši svatbu.',
            date: '2024-09-12',
            verified: true
        }
    ]
}
];
