export default function PortTable({ ports }) {
  const portRisk = { 22:"High", 80:"Low", 443:"Low", 3389:"Critical", 21:"Medium", 8080:"Low" };
  const riskColor = { Critical:"#ff8080", High:"#f85149", Medium:"#d29922", Low:"#3fb950" };

  return (
    <div className="p-table-wrap">
      <table className="p-table">
        <thead>
          <tr>
            <th>Port</th><th>State</th><th>Service</th><th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {ports.map((p, i) => (
            <tr key={i}>
              <td className="p-port-num">{p.port_number}/tcp</td>
              <td><span className={`p-pill ${p.status}`}>{p.status}</span></td>
              <td>{p.service}</td>
              <td style={{ fontSize:"11px", fontWeight:"700", color: p.status==="open" ? (riskColor[portRisk[p.port_number]] || riskColor.Low) : "var(--dim)" }}>
                {p.status === "open" ? (portRisk[p.port_number] || "Low") : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}