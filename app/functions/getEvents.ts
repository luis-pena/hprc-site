import events from "@/json/events.json";

export type ArticleType = {
  id: number;
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  events: Array<{
    title: string;
    popular: boolean;
    popularity: number;
    description: string;
    date: string;
    read: string;
    label: string;
    img: string;
    imgAlt: string;
    slug: string;
    content: Array<{
      img: string;
      summary: string;
      section1: string;
      quote: Array<string>;
      summary2: string;
      section2: string;
    }>;
  }>;
};

export async function getEvents() {
  const res = await fetch(
    "https://raw.githubusercontent.com/luis-pena/hprc-site/refs/heads/main/json/events.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch event data");
  }

  return res.json();
}
