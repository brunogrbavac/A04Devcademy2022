export type locationData = {
    name: string,
    imageUrl: string,
    id: string,
    postalCode: number,
    properties: number,
}

export type accommodationData = {
    id: string|null,
    title: string|null,
    subtitle: string|null,
    description: string|null,
    shortDescription: string|null,
    location: locationData|null,
    locationID: string|null,
    capacity: number|null,
    personCount: number|null,
    price: number|null,
    categorization: number|null,
    type: string|null,
    freeCancelation: boolean|null,
    imageUrl: string|null,
}

export type navigationData = {
    name: string,
    url: string,
}

export type accommodationSearchData = {
    type: string|null,
    personCount: number|null,
    location: locationData|null,
    checkIn: Date|null,
    checkOut: Date|null,
}

export type bookingData = {
    id?: string|null,
    name?: string|null,
    email: string|null,
    accomodaionId: string|null,
    accomodation: accommodationData,
    checkIn: Date|null,
    checkOut: Date|null,
    personCount: number|null,
    confirmed?: boolean|null,
}

export type userData = {
    email: string,
    password: string,
}
