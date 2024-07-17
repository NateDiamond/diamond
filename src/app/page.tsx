import { getColor } from "@/app/components/colors";

export default function Home() {
  return (
    <div className={getColor("bg", "lime", "900")}>
      <div>
        Hello, world!
      </div>
    </div>
  );
}
