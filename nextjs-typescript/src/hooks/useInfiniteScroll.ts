import { useEffect, useState } from "react";

export function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  function handleScroll() {
    // console.log(
    //   "document.documentElement.scrollTop",
    //   document.documentElement.scrollTop
    // );
    // console.log("window.innerHeight", window.innerHeight);
    // console.log(
    //   "document.documentElement.scrollHeight",
    //   document.documentElement.scrollHeight
    // );
    if (
      document.documentElement.scrollTop + window.innerHeight + 300 >=
      document.documentElement.scrollHeight
    ) {
      setPage((p) => p + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return page;
}
