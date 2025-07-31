import type { WeddingStyleType, AdditionalService } from '../types';

export const weddingStyles: WeddingStyleType[] = [
    {
        id: 'traditional',
        name: 'Tradiční česká svatba',
        description: 'Klasická česká svatba s tradičními prvky, obřady a jídly',
        characteristics: [
            'Bílé šaty a smoking',
            'Tradiční česká kuchyně',
            'Folk hudba a tance',
            'Svatební koláčky',
            'Hodování a rodinné tradice'
        ],
        estimatedBudget: { min: 120000, max: 250000 },
        popularVenues: ['restaurant', 'chateau'],
        recommendedServices: ['traditional_catering', 'traditional_photography']
    },
    {
        id: 'modern',
        name: 'Moderní svatba',
        description: 'Současný styl s důrazem na eleganci a individualitu',
        characteristics: [
            'Moderní design a výzdoba',
            'Fusion kuchyně',
            'DJ a moderní hudba',
            'Stylové fotografie',
            'Personalizované prvky'
        ],
        estimatedBudget: { min: 180000, max: 400000 },
        popularVenues: ['modern', 'hotel'],
        recommendedServices: ['modern_catering', 'artistic_photography']
    }, {
        id: 'garden',
        name: 'Zahradní svatba',
        description: 'Romantická venkovní oslava v přírodním prostředí',
        characteristics: [
            'Venkovní obřad',
            'Květinová výzdoba',
            'Lehké letní menu',
            'Přírodní fotografie',
            'Boho nebo rustikální styl'
        ],
        estimatedBudget: { min: 100000, max: 200000 },
        popularVenues: ['garden', 'chateau'],
        recommendedServices: ['light_catering', 'nature_photography']
    },
    {
        id: 'destination',
        name: 'Destinační svatba',
        description: 'Svatba na exotickém nebo historickém místě',
        characteristics: [
            'Cestování hostů',
            'Unikátní lokace',
            'Místní kuchyně',
            'Dobrodružné fotografie',
            'Menší počet hostů'
        ],
        estimatedBudget: { min: 250000, max: 600000 },
        popularVenues: ['chateau', 'historic'],
        recommendedServices: ['international_catering', 'travel_photography']
    },
    {
        id: 'intimate',
        name: 'Intimní svatba',
        description: 'Malá oslava pouze s nejbližšími přáteli a rodinou',
        characteristics: [
            'Do 30 hostů',
            'Osobní atmosféra',
            'Kvalitní menu',
            'Detailní fotografie',
            'Klidné prostředí'
        ],
        estimatedBudget: { min: 70000, max: 150000 },
        popularVenues: ['restaurant', 'garden'],
        recommendedServices: ['boutique_catering', 'intimate_photography']
    }
];

export const additionalServices: AdditionalService[] = [
    {
        id: 'flowers-1',
        name: 'Svatební kytice a výzdoba',
        price: 12000,
        category: 'flowers',
        selected: false
    },
    {
        id: 'music-1',
        name: 'DJ s kompletním sound systemem',
        price: 10000,
        category: 'music',
        selected: false
    },
    {
        id: 'music-2',
        name: 'Živá hudba - kapela (4 hodiny)',
        price: 20000,
        category: 'music',
        selected: false
    },
    {
        id: 'decoration-1',
        name: 'Kompletní výzdoba místa',
        price: 16000,
        category: 'decoration',
        selected: false
    },
    {
        id: 'decoration-2',
        name: 'Osvětlení a světelné efekty',
        price: 6500,
        category: 'decoration',
        selected: false
    },
    {
        id: 'transport-1',
        name: 'Svatební auto s řidičem',
        price: 4000,
        category: 'transport',
        selected: false
    },
    {
        id: 'transport-2',
        name: 'Autobus pro hosty',
        price: 6500,
        category: 'transport',
        selected: false
    },
    {
        id: 'other-1',
        name: 'Svatební koordinátor',
        price: 15000,
        category: 'other',
        selected: false
    },
    {
        id: 'other-2',
        name: 'Make-up artistka a kadeřnice',
        price: 5000,
        category: 'other',
        selected: false
    },
    {
        id: 'other-3',
        name: 'Videograf',
        price: 18000,
        category: 'other',
        selected: false
    },
    {
        id: 'decoration-3',
        name: 'Fotobudka s rekvizitami',
        price: 5500,
        category: 'decoration',
        selected: false
    },
    {
        id: 'flowers-2',
        name: 'Živé květinové stěny',
        price: 9500,
        category: 'flowers',
        selected: false
    },
    {
        id: 'regional-1',
        name: 'Pardubický perník pro hosty',
        price: 2500,
        category: 'other',
        selected: false
    },
    {
        id: 'regional-2',
        name: 'Tradiční moravská cimbálová muzika',
        price: 15000,
        category: 'music',
        selected: false
    }
];
