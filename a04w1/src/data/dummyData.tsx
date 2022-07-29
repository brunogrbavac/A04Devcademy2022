import { accommodationData, accommodationDetailData, cityData, placeData } from "../types/data";

export const accommodationDetailDefaultData: accommodationDetailData = {
    title: "Poseidon Hotel Suites",
    subtitle: "Stay in the heart of Mýkonos City",
    description: "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.",
    type: "Room",
    categorization: 5,
    personCount: 2,
    imageUrl: "",
    freeCancelation: true,
    price: 500,
    location: "Mýkonos City",
    postalCode: "846 00"
};

export const cityDefaultData: cityData[] = [{  
	name: "London",  
	count: "5102"  
},{  
	name: "New York",  
	count: "3102"  
},{  
	name: "Split",  
	count: "1102"  
},];

export const placeDefaultData: placeData[] = 	[{  
    title: "Treehouse",  
    location: "Hrusice",  
    subtitle: "Renting entire unit"  
},{  
    title: "Branch Villa",  
    location: "Kuterevo",  
    subtitle: "Renting entire unit"  
},{  
    title: "Leafhouse",  
    location: "Kutina",  
    subtitle: "Renting entire unit"  
},];

export const accommodationDefaultData: accommodationData[] = [{  
	title: "Sugar & Spice Apartments",
    location: "Split",
	price: 75,  
	categorization: 3,  
},{  
	title: "Villa 7 Lakes",
    location: "Imotski",
	price: 350,  
	categorization: 5,  
},{  
	title: "Seashell Apartments",
    location: "Omiš",
	price: 105,  
	categorization: 4,  
}];