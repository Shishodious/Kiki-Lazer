import { Studio } from "sanity";
import config from "../../sanity.config";

export default function StudioPage() {
  return (
    <div className="studio-shell">
      <Studio config={config} />
    </div>
  );
}
