// import { Link } from "react-router-dom";
// import { site } from "@/data/site";

// /**
//  * Clicking the logo always returns to the home page top.
//  */
// export function Logo() {
//   return (
//     <Link
//       to="/"
//       onClick={() => {
//         if (window.location.pathname === "/") {
//           window.scrollTo({ top: 0, behavior: "smooth" });
//         }
//       }}
//       className="group flex items-center gap-2 font-mono-label text-[15px] font-medium text-[var(--text)]"
//       aria-label={`${site.name} — home`}
//     >
//       <span className="text-[var(--accent)] transition-transform duration-200 group-hover:-translate-x-0.5">
//         {"{"}
//       </span>
//       <span>{site.initials}</span>
//       <span className="text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5">
//         {"}"}
//       </span>
//     </Link>
//   );
// }


import { Link } from "react-router-dom";
import profile from '../../assets/profile.jpg'
export function Logo() {
  return (
    <Link
      to="/"
      onClick={() => {
        if (window.location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="flex items-center"
      aria-label="Home"
    >
      <img
        src={profile}
        alt="Pavan"
        className="h-15 w-auto transition-transform rounded-2xl duration-300 hover:scale-105"
      />
    </Link>
  );
}