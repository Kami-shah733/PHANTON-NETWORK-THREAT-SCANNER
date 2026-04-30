export default function RiskBadge({ level }) {
  return <span className={`p-badge ${level}`}>{level}</span>;
}