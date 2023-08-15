import { useRef } from "react";
import { loremIpsum } from "lorem-ipsum";
import { ViewportList } from "react-viewport-list";
import "./App.css";

const items = new Array(100000).fill(null).map(() => ({
  title: loremIpsum({
    units: "paragraph",
    paragraphLowerBound: 1,
    paragraphUpperBound: 10
  })
}));

const App = () => {
  const ref = useRef(null);

  return (
    <div className="list" ref={ref}>
      <ViewportList viewportRef={ref} items={items}>
        {(item, index) => (
          <div key={index} className={`item${index % 2 === 0 ? "" : " odd"}`}>
            {`${index + 1} ${item.title}`}
          </div>
        )}
      </ViewportList>
    </div>
  );
};

export default App;
