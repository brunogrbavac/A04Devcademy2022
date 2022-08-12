export type cityData = {
    name: string,
    count: string,
}

export type accommodationData = {
    title: string,
    location: string,
    price: number,
    categorization: number,
}

export type placeData = {
    title: string,
    location: string,
    subtitle: string,
} 

export type accommodationDetailData = {
    title: string|null,
    subtitle: string|null,
    description: string|null,
    type: string|null,
    categorization: number|null,
    personCount: number|null,
    imageUrl: string|null,
    freeCancelation: boolean|null,
    price: number|null,
    location: string|null,
    postalCode: string|null,
}

export type navigationData = {
    name: string,
    url: string,
}

export type accommodationSearchData = {
    type: string|null,
    personCount: number|null,
    location: string|null,
    checkIn: Date|null,
    checkOut: Date|null,
}
