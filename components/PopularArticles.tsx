import { useArticleContext } from "@/hooks/useArticleContext";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function PopularArticles() {
  const { data } = useArticleContext();

  const popularEvents = data.flatMap((author) =>
    author.events
      .filter((event) => event.popular === true)
      .sort((a, b) => Number(a.popularity) - Number(b.popularity))
  );

  return (
    <article>
      <h2 className="uppercase font-semibold mt-16 mb-8">Most Popular</h2>
      {popularEvents.map((event, index) => (
        <article key={event.title}>
          <div className="grid grid-cols-[0fr_1fr] gap-8">
            <p className="text-2xl font-semibold">{`0${index + 1}`}</p>
            <article className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">
                <Link href={`/events/${event.slug}`}>{event.title}</Link>
              </h3>
              <span className="flex gap-2">
                <p className="font-semibold">Text</p>
                <p>{data[0].author}</p>
              </span>
            </article>
          </div>
          {index < popularEvents.length - 1 && (
            <Separator className="border border-black my-6" />
          )}
        </article>
      ))}
    </article>
  );
}
