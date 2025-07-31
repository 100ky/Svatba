import type { VenueType } from '../types';

export const venues: VenueType[] = [
    {
        id: 'zamek-litomysl',
        name: 'Zámek Litomyšl',
        location: 'Litomyšl, Pardubický kraj',
        capacity: { min: 40, max: 180 },
        pricePerPerson: 1800,
        basePrice: 45000,
        type: 'chateau',
        features: ['UNESCO památka', 'Renesanční arkády', 'Zámecká zahrada', 'Historické sály', 'Parkování'],
        images: ['/images/zamek-litomysl.jpg', '/images/zamek-litomysl-arkady.jpg'],
        contact: {
            phone: '+420 461 615 067',
            email: 'svatby@zamek-litomysl.cz',
            website: 'www.zamek-litomysl.cz'
        },
        availability: ['2026-05-15', '2026-06-20', '2026-09-10'],
        rating: 4.9,
        reviews: [
            {
                id: 'r1',
                author: 'Tereza a Marek',
                rating: 5,
                comment: 'Pohádkové místo s úžasnou atmosférou. Renesanční arkády jsou dokonalou kulisou.',
                date: '2024-08-15',
                verified: true
            }
        ]
    },
    {
        id: 'kuneticka-hora',
        name: 'Kunětická hora',
        location: 'Kunětická hora, Pardubický kraj',
        capacity: { min: 30, max: 120 },
        pricePerPerson: 1600,
        basePrice: 35000,
        type: 'chateau',
        features: ['Romantický hrad', 'Dechberoucí výhledy', 'Venkovní terasa', 'Wellness resort', 'Ubytování'],
        images: ['/images/kuneticka-hora.jpg', '/images/kuneticka-hora-vyhled.jpg'],
        contact: {
            phone: '+420 466 729 428',
            email: 'svatby@kunetickahora.cz',
            website: 'www.kunetickahora.cz'
        },
        availability: ['2026-04-12', '2026-07-25', '2026-10-05'],
        rating: 4.8,
        reviews: [
            {
                id: 'r2',
                author: 'Jana a Pavel',
                rating: 5,
                comment: 'Úžasné výhledy a romantická atmosféra. Wellness část je skvělá pro hosty.',
                date: '2024-09-20',
                verified: true
            }
        ]
    },
    {
        id: 'statek-100dola',
        name: 'Statek 100DOLA',
        location: 'Lanškroun, Pardubický kraj',
        capacity: { min: 25, max: 90 },
        pricePerPerson: 1100,
        basePrice: 22000,
        type: 'garden',
        features: ['Rustikální statek', 'Venkovní prostory', 'Autentické prostředí', 'Farma atmosféra', 'Ubytování'],
        images: ['/images/statek-100dola.jpg', '/images/statek-100dola-dvur.jpg'],
        contact: {
            phone: '+420 465 322 119',
            email: 'info@100dola.cz',
            website: 'www.100dola.cz'
        },
        availability: ['2026-05-30', '2026-06-15', '2026-08-20'],
        rating: 4.7,
        reviews: [
            {
                id: 'r3',
                author: 'Klára a Tomáš',
                rating: 5,
                comment: 'Krásný statek s autentickou atmosférou. Dokonalé pro rustikální svatbu.',
                date: '2024-05-25',
                verified: true
            }
        ]
    },
    {
        id: 'schejbalova-vila',
        name: 'Schejbalova vila',
        location: 'Choceň, Pardubický kraj',
        capacity: { min: 20, max: 80 },
        pricePerPerson: 1300,
        basePrice: 25000,
        type: 'restaurant',
        features: ['Historická vila', 'Elegantní interiéry', 'Zahrada', 'Parkování', 'Catering služby'],
        images: ['/images/schejbalova-vila.jpg', '/images/schejbalova-vila-zahrada.jpg'],
        contact: {
            phone: '+420 465 471 550',
            email: 'svatby@schejbalovavila.cz',
            website: 'www.schejbalovavila.cz'
        },
        availability: ['2026-03-20', '2026-11-15'],
        rating: 4.6,
        reviews: [
            {
                id: 'r4',
                author: 'Aneta a Jiří',
                rating: 4,
                comment: 'Elegantní prostředí s krásnou zahradou. Výborná kuchyně.',
                date: '2024-07-10',
                verified: true
            }
        ]
    },
    {
        id: 'hotel-renospond',
        name: 'Hotel a wellness Renospond',
        location: 'Zderaz, Pardubický kraj',
        capacity: { min: 40, max: 150 },
        pricePerPerson: 1400,
        basePrice: 28000,
        type: 'hotel',
        features: ['Wellness centrum', 'Spa služby', 'Ubytování hostů', 'Venkovní terasa', 'Konferenční sály'],
        images: ['/images/renospond.jpg', '/images/renospond-terasa.jpg'],
        contact: {
            phone: '+420 469 344 235',
            email: 'svatby@renospond.cz',
            website: 'www.renospond.cz'
        },
        availability: ['2026-04-18', '2026-07-12', '2026-12-08'],
        rating: 4.5,
        reviews: [
            {
                id: 'r5',
                author: 'Michala a David',
                rating: 5,
                comment: 'Skvělé wellness centrum a perfektní služby. Hosté si užili i pobyt.',
                date: '2024-11-10',
                verified: true
            }
        ]
    },
    {
        id: 'areal-samota-les',
        name: 'Areál na samotě u lesa',
        location: 'Kozašice, Pardubický kraj',
        capacity: { min: 30, max: 100 },
        pricePerPerson: 950,
        basePrice: 18000,
        type: 'garden',
        features: ['Přírodní prostředí', 'Venkovní obřad', 'Les v okolí', 'Klid a soukromí', 'Grilování'],
        images: ['/images/areal-samota.jpg', '/images/areal-samota-les.jpg'],
        contact: {
            phone: '+420 737 245 678',
            email: 'info@samotalesa.cz'
        },
        availability: ['2026-05-10', '2026-06-25', '2026-08-15'],
        rating: 4.4,
        reviews: [
            {
                id: 'r6',
                author: 'Lucie a Martin',
                rating: 4,
                comment: 'Klidné místo uprostřed přírody. Ideální pro milovníky lesa.',
                date: '2024-06-15',
                verified: true
            }
        ]
    },
    {
        id: 'lom-mokrysov',
        name: 'Lom Mokrýšov',
        location: 'Prosetín, Pardubický kraj',
        capacity: { min: 50, max: 200 },
        pricePerPerson: 850,
        basePrice: 15000,
        type: 'modern',
        features: ['Industriální design', 'Unikátní prostředí', 'Velká kapacita', 'Netradiční kulisa', 'Parkování'],
        images: ['/images/lom-mokrysov.jpg', '/images/lom-mokrysov-industrial.jpg'],
        contact: {
            phone: '+420 608 123 456',
            email: 'svatby@lommokrysov.cz'
        },
        availability: ['2026-04-20', '2026-07-30', '2026-09-25'],
        rating: 4.3,
        reviews: [
            {
                id: 'r7',
                author: 'Petra a Jan',
                rating: 4,
                comment: 'Velmi netradiční místo s industriálním charakterem. Originalita zaručena.',
                date: '2024-09-05',
                verified: true
            }
        ]
    },
    {
        id: 'penzion-na-rovince',
        name: 'Restaurace a Penzion Na Rovince',
        location: 'Dolní Újezd u Litomyšle, Pardubický kraj',
        capacity: { min: 35, max: 120 },
        pricePerPerson: 1200,
        basePrice: 20000,
        type: 'restaurant',
        features: ['Rodinné prostředí', 'Tradiční kuchyně', 'Ubytování', 'Zahrada', 'Parkování'],
        images: ['/images/na-rovince.jpg', '/images/na-rovince-zahrada.jpg'],
        contact: {
            phone: '+420 461 353 264',
            email: 'info@narovince.cz',
            website: 'www.narovince.cz'
        },
        availability: ['2026-03-15', '2026-10-20'],
        rating: 4.4,
        reviews: [
            {
                id: 'r8',
                author: 'Zuzana a Petr',
                rating: 4,
                comment: 'Rodinná atmosféra a výborná kuchyně. Velmi příjemný personál.',
                date: '2024-08-30',
                verified: true
            }
        ]
    }
];
