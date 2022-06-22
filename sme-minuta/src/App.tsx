import { useMemo } from "react";
import NewsItem from "./NewsItem";
import { useGetNewsQuery } from "./services/smeApi";

export interface Artycle {
  title: string;
  content: string;
  url: string;
}

function App() {
  const { data, isLoading } = useGetNewsQuery(undefined, {
    pollingInterval: 30000,
  });

  const articles = useMemo(
    () =>
      isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.articles?.map((article: Artycle) => (
          <NewsItem article={article} />
        ))
      ),
    [data, isLoading]
  );

  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(
        45deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    )`,
        paddingTop: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      {articles}
    </div>
  );
}

export default App;
