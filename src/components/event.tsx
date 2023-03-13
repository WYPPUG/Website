import React from "react";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/20/solid";

const formatDate = (dateString: string | null | undefined): string | null => {
  if (!dateString) {
    return null;
  }

  return new Date(dateString).toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const Event: React.FunctionComponent<{
  title?: string;
  displayDate?: string;
  endDate?: string;
  startDate?: string;
  location?: string;
  summary?: string;
  url?: string;
  preMeetingLinks?: { name: string; url: string }[] | null | undefined;
  postMeetingLinks?: { name: string; url: string }[] | null | undefined;
  hideTitle?: boolean;
  isFuture: boolean;
}> = ({
  title,
  displayDate,
  startDate,
  endDate,
  location,
  summary,
  url,
  preMeetingLinks,
  postMeetingLinks,
  hideTitle,
  isFuture
}) => {
  const date = displayDate?.length ? 
  displayDate :
    ((formatDate(startDate) ?? "TBC") +
    (endDate ? " - " + formatDate(endDate) : ""));

   const links = url ? [{name: "More details", url: url}] : ((isFuture? preMeetingLinks : postMeetingLinks) ?? []);

  function getLinkStyles(url: string) {
    if (url) {
      return "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600";
    } else {
      return "bg-gray-300";
    }
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
      {!hideTitle && (
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
      )}
      <p className="mb-3 text-gray-500">
        <CalendarDaysIcon className="h-6 w-6 inline-block align-top" /> {date}
        &nbsp;
        <MapPinIcon className="h-6 w-6 inline-block align-top" /> {location ?? "TBC"}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {summary}
      </p>
      <p className="mb-3">
        {links?.map((l) => (
          <a
            href={l.url}
            className={
              "mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +
              getLinkStyles(l.url)
            }
          >
            {l.name}
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        ))}
      </p>
    </div>
  );
};

export default Event;
