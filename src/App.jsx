import { useState } from "react";
import { Switch } from "./Switch";

export default function SwitchSizes() {
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(true);
  const [lg, setLg] = useState(false);

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Switch
       varient="outline"
        checked={sm}
        onChange={(e) => setSm(e.target.checked)}
      />

      <Switch
        size="md"
        label="Medium"
        checked={md}
        onChange={(e) => setMd(e.target.checked)}
      />

      <Switch
        size="lg"
        label="Large"
        checked={lg}
        onChange={(e) => setLg(e.target.checked)}
      />
    </div>
    {/* size */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Switch
        size="sm"
        label="Small"
        checked={sm}
        onChange={(e) => setSm(e.target.checked)}
      />

      <Switch
        size="md"
        label="Medium"
        checked={md}
        onChange={(e) => setMd(e.target.checked)}
      />

      <Switch
        size="lg"
        label="Large"
        checked={lg}
        onChange={(e) => setLg(e.target.checked)}
      />
    </div>
    
    </>
  );
}
