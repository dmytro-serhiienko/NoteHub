import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "12px",
      }}
    >
      <ScaleLoader color="#c0c522" />
      <p>Loading, please wait...</p>
    </div>
  );
}
