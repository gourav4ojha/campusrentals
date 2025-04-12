// components/Place.jsx

const Place = {
  async searchByText(request) {
    const mockPlaces = [
      {
        displayName: "Tasty Tacos",
        location: { latitude: 37.4219999, longitude: -122.0840575 },
        businessStatus: "OPERATIONAL",
      },
      {
        displayName: "El Taco Loco",
        location: { latitude: 37.4224764, longitude: -122.0842499 },
        businessStatus: "OPERATIONAL",
      },
      {
        displayName: "Mountain Taco House",
        location: { latitude: 37.4230012, longitude: -122.0852073 },
        businessStatus: "OPERATIONAL",
      },
    ];

    // Filter the list if needed
    const filtered = mockPlaces.slice(0, request.maxResultCount || 10);

    return { places: filtered };
  },
};

export default Place;
