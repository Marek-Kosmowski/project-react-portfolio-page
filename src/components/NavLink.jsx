export default function NavLink({ title, path }) {
  return (
    <li className="text-white opacity-100">
      <a  href={path}>{title}</a>
    </li>
  );
}
