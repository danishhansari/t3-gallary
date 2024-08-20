const mockUrl = [
  "https://utfs.io/f/d3e015eb-2321-4b53-9520-a4c3495435aa-esyv0t.png",
  "https://utfs.io/f/5957183f-00c6-4810-b02c-4ab4589ecfee-ejizh7.jpg",
  "https://utfs.io/f/5e17ae90-a33a-4075-b691-07d6297f3163-mt1p01.png",
  "https://utfs.io/f/6974010d-43d1-47b7-a155-fbeec719aa9c-p10ukx.png",
  "https://utfs.io/f/d002f994-ebc2-478c-b437-30afd7a492d0-uualkn.png",
  "https://utfs.io/f/c074a3ad-eeef-4e5b-8715-fe73a00e3d59-p10uob.png",
];

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockUrl, ...mockUrl, ...mockUrl].map((image, index) => (
          <div key={index} className="w-full max-w-60">
            <img src={image} />
          </div>
        ))}
      </div>
    </main>
  );
}
