import { Site } from "@/components/site";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ params, searchParams }: PageProps) {
  const [{ slug = [] }, query] = await Promise.all([params, searchParams]);
  const value = (key: string) => {
    const entry = query[key];
    return Array.isArray(entry) ? entry[0] : entry;
  };

  return (
    <Site
      path={`/${slug.join("/")}`}
      planQuery={value("plan")}
      explained={value("explained") === "1"}
      highlight={value("highlight")}
    />
  );
}
