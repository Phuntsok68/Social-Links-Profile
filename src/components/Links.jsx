export default function Links({ social_links }) {
  return (
    <div className="links">
      {social_links.map((social) => (
        <div>{social}</div>
      ))}
    </div>
  );
}
