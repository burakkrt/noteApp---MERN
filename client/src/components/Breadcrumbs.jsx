import { useMatches } from "react-router-dom";
import classNames from "classnames";

function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  if (crumbs.length > 1) {
    return (
      <ul className="flex flex-row w-full py-2 mb-5">
        {crumbs.map((crumb, index) => {
          return (
            <li
              key={index}
              className={classNames(
                "hover:text-neutral-500 duration-150 select-none",
                {
                  "after:content-['/'] after:mx-1.5":
                    index !== crumbs?.length - 1,
                  "text-neutral-500 pointer-events-none":
                    index === crumbs?.length - 1,
                }
              )}
            >
              {crumb}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Breadcrumbs;
