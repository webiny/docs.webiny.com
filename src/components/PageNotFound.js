export default function PageNotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 – Page Not Found</h1>
      <p>Sorry, we couldn’t find what you were looking for.</p>
      <br/>
      <a href="/docs/get-started/welcome" style={{ color: "orange", textDecoration: "underline" }}>Go back home</a>
    </div>
  );
}