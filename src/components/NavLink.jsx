export default function NavLink({ title, path }) {
  return (
    <li>
      <a href={path}>{title}</a>
    </li>
  );
}
