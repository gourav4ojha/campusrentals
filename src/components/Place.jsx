// components/Place.js

export default {
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

    const filtered = mockPlaces
      .filter((place, index) => index < (request.maxResultCount || 10))
      .filter((place) => request.minRating ? 4 >= request.minRating : true); // All mocked places have rating >= 4

    return { places: filtered };
  },
};
