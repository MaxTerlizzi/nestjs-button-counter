// app/page.js
import Counter from "../components/Counter";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Button Counter App</h1>

      {/* Default Counter */}
      <Counter />

      {/* Counter with custom initial values */}
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}
