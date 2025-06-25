import { useRef } from "react";

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Neo</button>
        <button onClick={() => scrollToIndex(1)}>Millie</button>
        <button onClick={() => scrollToIndex(2)}>Bella</button>
      </nav>
      <div>
        <ul ref={listRef} className="flex overflow-x-auto gap-4 p-4 snap-x">
          <li>
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              className="w-72 h-48 object-cover rounded-md"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              className="w-72 h-48 object-cover rounded-md"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              className="w-72 h-48 object-cover rounded-md"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
