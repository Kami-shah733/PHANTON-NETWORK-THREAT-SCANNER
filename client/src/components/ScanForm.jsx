import { useState } from "react";

export default function ScanForm({ onScan, loading }) {
  const [ip, setIp] = useState("");

  const handleSubmit = () => {
    if (!ip.trim()) return;
    onScan(ip.trim());
    setIp("");
  };

  return (
    <div className="p-scanbar">
      <input
        type="text"
        placeholder="Target IPv4 — e.g. 192.168.1.1"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <select>
        <option>-sT Fast</option>
        <option>-sT Full</option>
        <option>-sV Service</option>
      </select>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "SCANNING..." : "RUN SCAN"}
      </button>
    </div>
  );
}