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
    title: string,
    subtitle: string,
    description: string,
    type: string,
    categorization: number,
    personCount: number,
    imageUrl: string,
    freeCancelation: boolean,
    price: number,
    location: string,
    postalCode: string
}

export type navigationData = {
    name: string,
    url: string,
}

export type accommodationSearchData = {
    type: string,
    personCount: number,
    location: string,
    checkIn: Date,
    checkOut: Date,
}
