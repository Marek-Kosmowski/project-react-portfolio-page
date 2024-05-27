export default function Tabs({ children, buttons }) {
  return (
    <>
      <div>{buttons}</div>
      {children}
    </>
  );
}
