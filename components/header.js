export default function Header() {
  return (
    <div
      id="header"
      className="h-20 z-100 backdrop-blur-sm w-full fixed bg-transparent border border-transparent border-b-zinc-800"
    >
      <div className="icon p-5 absolute top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
  );
}
