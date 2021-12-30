const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        auther: "Colin R. Davis",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        auther: "Helen Keller",
    },
    {
        quote: "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
        auther: "Jackie Robinson",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        auther: "Thomas Jefferson",
    },
    {
        quote: "Do one thing every day that scares you.",
        auther: "Anonymous",
    },
    {
        quote: "What we dwell on is who we become.",
        auther: "Oprah Winfrey",
    },
    {
        quote: "The secret of success is to do the common things uncommonly well.",
        auther: "John D.Rockefeller",
    },
    {
        quote: "If people only knew how hard l've worked to gain my mastery, it wouldn't seem so wonderful at all.",
        auther: "Michelangelo",
    },
    {
        quote: "There is no substitute for hard work.",
        auther: "Thomas Edison",
    },
    {
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        auther: "Robert Collier",
    },
]

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;
