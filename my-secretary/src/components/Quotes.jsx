const Quotes = () => {
  const quotes = [
    {
      quote:
        "Do not go gentle into that good night; Old age should burn and rave at close of day. Rage, rage against the dying of the light.",
      author: "- Professor Brand, 'Interstellar'",
    },
    {
      quote: "Mankind was born on Earth. It was never meant to die here.",
      author: "- 'Interstellar'",
    },
    {
      quote:
        "Do you know why people like violence? It is because it feels good. Humans find violence deeply satisfying. But remove the satisfaction, and the act becomes... hollow.",
      author: "- Alan Turing, 'The Imitation Game",
    },
    {
      quote:
        "It's an entire world of just 64 squares. I feel safe in it. I can control it, I can dominate it. and It's predictable. so, if I get hurt, I only have myself to blame.",
      author: "- Beth Harmon, 'Queen's Gambit'",
    },
    {
      quote: "May the odds be ever in your favor",
      author: "- Katniss Everdeen ,'The Hunger Game'",
    },
    {
      quote:
        "I really hope that when I leave, my last trace will be beautiful.",
      author: "- Yuna Kim",
    },
    {
      quote:
        "When I came back on the rink in 2012, I set a goal of wrapping up my career well rather than just winning medals. I'm not preparing for any special skills for Sochi because I don't feel like they are necessary.",
      author: "- Yuna Kim",
    },
    {
      quote: "There is no gene for the human spirit.",
      author: "- 'Gattaca'",
    },
    {
      quote:
        "You want to know how I did it? This is how I did it. I never saved anything for the swim back.",
      author: "- 'Gattaca'",
    },
    {
      quote: "Average is a failing formula.",
      author: "- Grant Cardone",
    },
  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  return (
    <>
      {" "}
      <div>quotes</div>
    </>
  );
};

export default Quotes;
