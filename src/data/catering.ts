import type { CateringType } from '../types';

export const catering: CateringType[] = [
    {
        id: 'catering-pardubice-traditional',
        name: 'Pardubická tradice',
        type: 'traditional',
        location: 'Pardubický kraj',
        pricePerPerson: {
            appetizers: 220,
            mainCourse: 480,
            dessert: 180,
            drinks: 320
        },
        menuOptions: [
            {
                id: 'pt1',
                name: 'Pardubické předkrmy',
                description: 'Domácí paštiky, uzené maso, sýrová mísa s perníkem',
                pricePerPerson: 220,
                course: 'appetizer'
            },
            {
                id: 'pt2',
                name: 'Svíčková s perníkovou omáčkou',
                description: 'Tradiční svíčková s pardubickým perníkem',
                pricePerPerson: 480,
                course: 'main'
            },
            {
                id: 'pt3',
                name: 'Perníkový svatební dort',
                description: 'Originální dort z pardubického perníku',
                pricePerPerson: 180,
                course: 'dessert'
            },
            {
                id: 'pt4',
                name: 'Regionální nápoje',
                description: 'Moravské víno, pardubický Zlatopramen, domácí limonády',
                pricePerPerson: 320,
                course: 'drink'
            }
        ],
        minGuests: 25,
        maxGuests: 180,
        services: ['Obsluha', 'Výzdoba stolů', 'Zapůjčení nádobí', 'Úklid', 'Degustace'],
        contact: {
            phone: '+420 466 123 456',
            email: 'info@pardubickatradice.cz',
            website: 'www.pardubickatradice.cz'
        },
        rating: 4.8,
        reviews: [
            {
                id: 'cp1',
                author: 'Tereza a Jan',
                rating: 5,
                comment: 'Úžasná kombinace tradice s moderním pojetím. Perníkový dort byl hit!',
                date: '2024-08-20',
                verified: true
            }
        ]
    }, {
        id: 'catering-pardubice-modern',
        name: 'Východočeská elegance',
        type: 'modern',
        location: 'Pardubický kraj',
        pricePerPerson: {
            appetizers: 180,
            mainCourse: 420,
            dessert: 150,
            drinks: 280
        },
        menuOptions: [
            {
                id: 'pe1',
                name: 'Východočeské předkrmy',
                description: 'Tvarůžkový mousse, zvěřinové paštiky, region´ální sýry',
                pricePerPerson: 180,
                course: 'appetizer'
            },
            {
                id: 'pe2',
                name: 'Hovězí z bio farmy s regionální zeleninou',
                description: 'Steak z místního chovu s pečenou zeleninou z Pardubicka',
                pricePerPerson: 420,
                course: 'main'
            },
            {
                id: 'pe3',
                name: 'Perníkové tiramisu',
                description: 'Moderní pojetí tradičního pardubického perníku',
                pricePerPerson: 150,
                course: 'dessert'
            },
            {
                id: 'pe4',
                name: 'Regionální nápoje premium',
                description: 'Moravské víno, craft pivo z Pardubicka, regionální lihoviny',
                pricePerPerson: 280,
                course: 'drink'
            }
        ],
        minGuests: 20,
        maxGuests: 120,
        services: ['Profesionální obsluha', 'Regionální výzdoba', 'Kvalitní nádobí', 'Degustace'],
        contact: {
            phone: '+420 466 234 567',
            email: 'rezervace@vcelelegance.cz',
            website: 'www.vcelelegance.cz'
        },
        rating: 4.7,
        reviews: [
            {
                id: 'c2',
                author: 'Klára a Tomáš',
                rating: 5,
                comment: 'Skvělá kombinace moderního stylu s regionálními chutěmi. Velmi doporučujeme!',
                date: '2024-09-15',
                verified: true
            }
        ]
    }, {
        id: 'catering-pardubice-vegetarian',
        name: 'Bio Pardubicko',
        type: 'vegetarian',
        location: 'Pardubický kraj',
        pricePerPerson: {
            appetizers: 140,
            mainCourse: 320,
            dessert: 120,
            drinks: 200
        },
        menuOptions: [
            {
                id: 'bp1',
                name: 'Bio předkrmy z regionu',
                description: 'Regionální zelenina, bylinkové pomazánky, ořechové paštiky',
                pricePerPerson: 140,
                course: 'appetizer'
            },
            {
                id: 'bp2',
                name: 'Houbové rizoto s pardubickými houbami',
                description: 'Rizoto s regionálními houbami a bylinkami',
                pricePerPerson: 320,
                course: 'main'
            },
            {
                id: 'bp3',
                name: 'Ovocný koláč z místních surovin',
                description: 'Koláč s ovocem z východočeských sadů',
                pricePerPerson: 120,
                course: 'dessert'
            },
            {
                id: 'bp4',
                name: 'Bio nápoje',
                description: 'Bio víno, bylinkové čaje, domácí limonády, nealkoholické nápoje',
                pricePerPerson: 200,
                course: 'drink'
            }
        ],
        minGuests: 15,
        maxGuests: 80,
        services: ['Eco-friendly obsluha', 'Přírodní výzdoba', 'Kompostovatelné nádobí', 'Bio certifikáty'],
        contact: {
            phone: '+420 466 345 678',
            email: 'info@biopardubicko.cz',
            website: 'www.biopardubicko.cz'
        },
        rating: 4.5,
        reviews: [
            {
                id: 'c3',
                author: 'Marie a Pavel',
                rating: 4,
                comment: 'Krásné bio menu s regionálními surovinami. Velmi zdravé a chutné.',
                date: '2024-07-10',
                verified: true
            }
        ]
    }
];
