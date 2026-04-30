export default function PortTable({ ports }) {
  const portRisk = {
    22: "High", 80: "Low", 443: "Low",
    3389: "Critical", 21: "Medium",
    8080: "Low", 23: "High", 445: "High",
    3306: "High", 5900: "High"
  };

  const riskColor = {
    Critical: "#ff8080",
    High:     "#f85149",
    Medium:   "#d29922",
    Low:      "#3fb950"
  };

  const pillStyle = (status) => ({
    padding: "1px 6px",
    borderRadius: "2px",
    fontSize: "10px",
    fontWeight: "600",
    background:
      status === "open"     ? "#0a2010" :
      status === "filtered" ? "#2d2000" : "var(--surface2)",
    color:
      status === "open"     ? "#3fb950" :
      status === "filtered" ? "#d29922" : "var(--dim)",
    border:
      status === "open"     ? "1px solid #1a4020" :
      status === "filtered" ? "1px solid #4a3400" : "1px solid var(--border2)",
  });

  return (
    <div className="p-table-wrap">
      <table className="p-table">
        <thead>
          <tr>
            <th>Port</th>
            <th>State</th>
            <th>Service</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {ports.map((p, i) => (
            <tr key={i}>
              <td className="p-port-num">{p.port_number}/tcp</td>
              <td>
                <span style={pillStyle(p.status)}>{p.status}</span>
              </td>
              <td style={{ color: "var(--muted)" }}>{p.service}</td>
              <td style={{
                fontSize: "11px",
                fontWeight: "700",
                color: p.status === "open"
                  ? (riskColor[portRisk[p.port_number]] || riskColor.Low)
                  : "var(--dim)"
              }}>
                {p.status === "open"
                  ? (portRisk[p.port_number] || "Low")
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}