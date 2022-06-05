import React, { useState, useEffect } from "react";
import NewsTable from "./NewsTable";

import { Store } from "react-notifications-component";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newsWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (newsWatchlist === null) {
      alert("No coins in portfolio. Add some.");
    } else {
      setWatchlist(newsWatchlist);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("watchlist", JSON.stringify(items));
  };

  const removeFromWatchlist = (news) => {
    const newWatchlist = watchlist.filter((follow) => follow.id !== news.id);
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);

    Store.addNotification({
      title: `${news.title} removed`,
      type: "danger",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
      },
    });
  };

  const filterNews = watchlist.filter((news) => {
    return news.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <NewsTable
        filterNews={filterNews}
        search={search}
        setSearch={setSearch}
        handleWatchlistClick={removeFromWatchlist}
      />
    </div>
  );
};

export default Watchlist;