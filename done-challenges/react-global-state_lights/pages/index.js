import Link from "../components/Link";
import useLightsStore from "./Lightstore";

export default function HomePage() {
  const lights = useLightsStore((state) => state.lights);
  const numberOfTurnedOnLights = lights.filter((light) => light.isOn).length;
  return (
    <div>
      <h1>Home</h1>
      <p>{numberOfTurnedOnLights} are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
