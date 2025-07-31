// Typy pro svatební místa
export interface VenueType {
    id: string;
    name: string;
    location: string;
    capacity: {
        min: number;
        max: number;
    };
    pricePerPerson: number;
    basePrice: number;
    type: 'hotel' | 'chateau' | 'garden' | 'restaurant' | 'historic' | 'modern';
    features: string[];
    images: string[];
    contact: {
        phone: string;
        email: string;
        website?: string;
    };
    availability: string[];
    rating: number;
    reviews: Review[];
}

// Typy pro fotografy
export interface PhotographerType {
    id: string;
    name: string;
    specialization: 'traditional' | 'modern' | 'artistic' | 'documentary';
    location: string;
    pricePackages: {
        basic: PackageType;
        standard: PackageType;
        premium: PackageType;
    };
    portfolio: string[];
    experience: number;
    contact: {
        phone: string;
        email: string;
        website?: string;
    };
    availability: string[];
    rating: number;
    reviews: Review[];
}

export interface PackageType {
    name: string;
    price: number;
    hours: number;
    photos: number;
    includes: string[];
}

// Typy pro catering
export interface CateringType {
    id: string;
    name: string;
    type: 'traditional' | 'modern' | 'international' | 'vegetarian' | 'fusion';
    location: string;
    pricePerPerson: {
        appetizers: number;
        mainCourse: number;
        dessert: number;
        drinks: number;
    };
    menuOptions: MenuOption[];
    minGuests: number;
    maxGuests: number;
    services: string[];
    contact: {
        phone: string;
        email: string;
        website?: string;
    };
    rating: number;
    reviews: Review[];
}

export interface MenuOption {
    id: string;
    name: string;
    description: string;
    pricePerPerson: number;
    course: 'appetizer' | 'main' | 'dessert' | 'drink';
}

// Typy svateb
export interface WeddingStyleType {
    id: string;
    name: string;
    description: string;
    characteristics: string[];
    estimatedBudget: {
        min: number;
        max: number;
    };
    popularVenues: string[];
    recommendedServices: string[];
}

// Společné typy
export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
}

// Typy pro kalkulačku
export interface CalculatorState {
    guests: number;
    venue: VenueType | null;
    photographer: PhotographerType | null;
    photographerPackage: keyof PhotographerType['pricePackages'] | null;
    catering: CateringType | null;
    selectedMenus: MenuOption[];
    weddingStyle: WeddingStyleType | null;
    additionalServices: AdditionalService[];
    date: string | null;
}

export interface AdditionalService {
    id: string;
    name: string;
    price: number;
    category: 'decoration' | 'music' | 'transport' | 'flowers' | 'other';
    selected: boolean;
}

export interface CalculationResult {
    venueTotal: number;
    photographerTotal: number;
    cateringTotal: number;
    additionalServicesTotal: number;
    grandTotal: number;
    breakdown: {
        [key: string]: number;
    };
}
