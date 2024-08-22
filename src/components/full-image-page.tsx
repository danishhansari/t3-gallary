import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center gap-4">
      <div className="flex-shrink">
        <img
          src={image.url}
          className="max-w-[600px] flex-shrink object-contain"
          alt={image.userId}
        />
      </div>
      <div className="border-1 flex w-48 flex-shrink-0 flex-col">
        <p className="text-xl font-bold">{image.name}</p>
        <p>Uploaded by: {uploaderInfo.fullName}</p>
        <p>Created on: {image.createdAt.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
