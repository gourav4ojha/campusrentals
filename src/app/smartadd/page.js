// const request = {
//     textQuery: "Tacos in Mountain View",
//     fields: ["displayName", "location", "businessStatus"],
//     includedType: "restaurant",
//     locationBias: { lat: 37.4161493, lng: -122.0812166 },
//     isOpenNow: true,
//     language: "en-US",
//     maxResultCount: 8,
//     minRating: 3.2,
//     region: "us",
//     useStrictTypeFiltering: false,
//   };

// const { places } = await Place.searchByText(request);
import Place from '@/components/Place';

export default async function Page() {
  const request = {
    textQuery: "Tacos in Mountain View",
    fields: ["displayName", "location", "businessStatus"],
    includedType: "restaurant",
    locationBias: { lat: 37.4161493, lng: -122.0812166 },
    isOpenNow: true,
    language: "en-US",
    maxResultCount: 8,
    minRating: 3.2,
    region: "us",
    useStrictTypeFiltering: false,
  };

  const { places } = await Place.searchByText(request);

  return (
    <div>
      <h1>Places:</h1>
      <pre>{JSON.stringify(places, null, 2)}</pre>
    </div>
  );
}
