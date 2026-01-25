
interface BangumiData {
  items: { end?: string }[];
}

export function filterOnAir(bangumi_data: BangumiData): BangumiData {
  const end = Date.now() - 8 * 24 * 60 * 60 * 1000;
  bangumi_data.items = bangumi_data.items.filter((item) => !item.end || new Date(item.end).getTime() >= end);
  return bangumi_data;
}

if (import.meta.main) {
    const data = await Deno.readTextFile("./dist/data.json");
    const onair = filterOnAir(JSON.parse(data));
    await Deno.writeTextFile("./dist/onair.json", JSON.stringify(onair));
}