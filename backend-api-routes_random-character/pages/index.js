import useSWR from "swr";

export default function Home() {
  const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
  };
  const { data } = useSWR("/api/random-character", fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{`${data.firstName} ${data.lastName}`}</h1>
    </div>
  );
}
