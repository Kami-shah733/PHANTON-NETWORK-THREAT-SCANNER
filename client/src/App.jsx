import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ScanForm from "./components/ScanForm";
import PortTable from "./components/PortTable";
import ScanHistory from "./components/ScanHistory";
import RiskBadge from "./components/RiskBadge";
import { dummyHistory } from "./dummyData";

export default function App() {
  const [scanResult, setScanResult] = useState(null);
  const [history, setHistory]       = useState(dummyHistory);
  const [loading, setLoading]       = useState(false);
  const [loadText, setLoadText]     = useState("");
  const [scanStatus, setScanStatus] = useState("Idle");

  const loadMsgs = [
    "Starting Nmap 7.99 scan...",
    "Resolving target hostname...",
    "Initiating TCP Connect scan...",
    "Scanning ports 1-200...",
    "Detecting service versions...",
    "Running script scan...",
    "Analyzing results...",
    "Calculating risk score...",
  ];

  const handleScan = async (ip,scanType) => {
    setLoading(true);
    setScanResult(null);
    setScanStatus("Scanning...");
    let i = 0;
    setLoadText(loadMsgs[0]);
    const interval = setInterval(() => {
      i++;
      setLoadText(loadMsgs[Math.min(i, loadMsgs.length - 1)]);
    }, 350);
    try {
      const response = await axios.post("http://localhost:8000/scan", {
        target_ip: ip,
        scan_type: scanType,

      });
      clearInterval(interval);
      setScanResult(response.data);
      console.log("SCAN RESULT:", response.data);
      setHistory((prev) => [
        {
          id: prev.length + 1,
          target_ip: ip,
          scan_time: new Date().toLocaleString(),
          risk_level: response.data.risk_level,
          risk_score: response.data.risk_score,
        },
        ...prev,
      ]);
      setScanStatus("Complete");
    } catch (error) {
      clearInterval(interval);
      console.error(error);
      setScanStatus("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      <Navbar />

      {/* HERO */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "28px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
          <div>
            <h1 className="p-hero-title">
              Network <span>Threat</span> Scanner
            </h1>
            <p className="p-hero-sub">
              Performs TCP port scans on target hosts, detects running services,
              and evaluates security exposure using rule-based risk analysis.
              Built on Nmap 7.99.
            </p>
          </div>
          <div className="p-hero-meta">
            {["Nmap 7.99 engine", "TCP Connect scan", "Ports 1–200", "AI risk scoring"].map((m) => (
              <div key={m} className="p-meta-item">
                <div className="p-meta-dot"></div>
                {m}
              </div>
            ))}
          </div>
        </div>
        <ScanForm onScan={handleScan} loading={loading} />
      </div>

      {/* STATS BAR */}
      <div className="p-stats">
        <div className="p-stat">
          <div className="p-stat-label">Total Scans</div>
          <div className="p-stat-val c-blue">{history.length}</div>
          <div className="p-stat-sub">All time</div>
        </div>
        <div className="p-stat">
          <div className="p-stat-label">High Risk</div>
          <div className="p-stat-val c-red">
            {history.filter(h => h.risk_level === "High").length}
          </div>
          <div className="p-stat-sub">Hosts flagged</div>
        </div>
        <div className="p-stat">
          <div className="p-stat-label">Open Ports</div>
          <div className="p-stat-val c-yellow">
            {scanResult
              ? scanResult.ports.filter(p => p.status === "open").length
              : 0}
          </div>
          <div className="p-stat-sub">Last scan</div>
        </div>
        <div className="p-stat">
          <div className="p-stat-label">Safe Hosts</div>
          <div className="p-stat-val c-green">
            {history.filter(h => h.risk_level === "Low").length}
          </div>
          <div className="p-stat-sub">Low risk</div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="p-main">

        {/* LEFT CONTENT */}
        <div className="p-content">

          {/* SCAN OUTPUT HEADER */}
          <div className="p-sec-hdr">
            <div className="p-sec-title">
              <div className="p-sec-bar"></div>
              Scan Output
            </div>
            <span className="p-sec-badge">{scanStatus}</span>
          </div>

          {/* LOADING STATE */}
          {loading && (
            <div className="p-loading">
              <div className="p-load-row">
                <span className="p-load-prefix">[ STATUS ]</span>
                <span className="p-load-txt">{loadText}</span>
              </div>
              <div className="p-load-track">
                <div className="p-load-bar"></div>
              </div>
            </div>
          )}

          {/* SCAN RESULT */}
          {scanResult && !loading && (
            <div className="p-result">
              <div className="p-result-grid">
                <div className="p-rg-cell">
                  <div className="p-rg-label">Target</div>
                  <div className="p-rg-val">{scanResult.target_ip}</div>
                </div>
                <div className="p-rg-cell">
                  <div className="p-rg-label">Timestamp</div>
                  <div className="p-rg-val">{scanResult.scan_time}</div>
                </div>
                <div className="p-rg-cell">
                  <div className="p-rg-label">Risk Level</div>
                  <RiskBadge level={scanResult.risk_level} />
                </div>
              </div>

              {/* THREAT SCORE BAR */}
              <div className="p-score-row">
                <span className="p-score-label">Threat Score</span>
                <div className="p-score-track">
                  <div
                    className="p-score-fill"
                    style={{
                      width: `${scanResult.risk_score}%`,
                      background:
                        scanResult.risk_score >= 60 ? "var(--red)" :
                        scanResult.risk_score >= 40 ? "var(--yellow)" :
                        "var(--green)"
                    }}
                  ></div>
                </div>
                <span className="p-score-num">{scanResult.risk_score}/100</span>
              </div>
            </div>
          )}

          {/* EMPTY STATE */}
          {!scanResult && !loading && (
            <div className="p-empty">
              [ No scan data ]<br />
              Enter a target IP and run a scan to begin.
            </div>
          )}

          {/* PORT ANALYSIS HEADER */}
          <div className="p-sec-hdr">
            <div className="p-sec-title">
              <div className="p-sec-bar"></div>
              Port Analysis
            </div>
          <span className="p-sec-badge">
  {scanResult
    ? `${scanResult.ports.filter(p => p.status === "open").length} open / 
       ${scanResult.ports.filter(p => p.status === "filtered").length} filtered / 
       ${scanResult.ports.filter(p => p.status === "closed").length} closed / 
       ${scanResult.ports.length} total`
    : "—"}
</span>
          </div>

          {/* PORT TABLE */}
          {scanResult
            ? <PortTable ports={scanResult.ports} />
            : <div className="p-empty">Run a scan to detect ports</div>
          }

        </div>

        {/* SIDEBAR */}
        <div className="p-sidebar">

          {/* RISK DISTRIBUTION */}
          <div style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="p-sb-hdr">Risk Distribution</div>
            <div className="p-meter-item">
              <div className="p-meter-hdr">
                <span style={{ color: "var(--red)" }}>High Risk</span>
                <span style={{ color: "var(--dim)" }}>
                  {history.filter(h => h.risk_level === "High").length} hosts
                </span>
              </div>
              <div className="p-meter-track">
                <div className="p-meter-fill" style={{ width: "20%", background: "var(--red)" }}></div>
              </div>
            </div>
            <div className="p-meter-item">
              <div className="p-meter-hdr">
                <span style={{ color: "var(--yellow)" }}>Medium Risk</span>
                <span style={{ color: "var(--dim)" }}>
                  {history.filter(h => h.risk_level === "Medium").length} hosts
                </span>
              </div>
              <div className="p-meter-track">
                <div className="p-meter-fill" style={{ width: "40%", background: "var(--yellow)" }}></div>
              </div>
            </div>
            <div className="p-meter-item">
              <div className="p-meter-hdr">
                <span style={{ color: "var(--green)" }}>Low Risk</span>
                <span style={{ color: "var(--dim)" }}>
                  {history.filter(h => h.risk_level === "Low").length} hosts
                </span>
              </div>
              <div className="p-meter-track">
                <div className="p-meter-fill" style={{ width: "80%", background: "var(--green)" }}></div>
              </div>
            </div>
          </div>

          {/* SCAN HISTORY */}
          <div>
            <div className="p-sb-hdr">Recent Scans</div>
            <ScanHistory history={history} />
          </div>

        </div>
      </div>
    </div>
  );
}