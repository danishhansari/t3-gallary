import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={index} className="w-full md:max-w-60">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
