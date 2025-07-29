import React, { useRef } from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { MdOutlineQuestionAnswer, MdSkipPrevious } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiFilter2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AlertModal from "./AlertModal";
import AlertModal2 from "./AlertModal2";
import { Switch } from "@headlessui/react";
import { HiNewspaper } from "react-icons/hi2";

type Item = {
  id: number;
  name: string;
  quote: string;
  category: string;
  author: string;
  url: string;
};

const TMCCard = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 0,
      name: "Item 0",
      quote: "“Welcome to the TTG 2025 study hub!”",
      author: "Rerel'Oluwa Tooki",
      category: "Quote",
      url: "https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/",
    },
    {
      id: 1,
      name: "Item 1",
      quote: "“Life is not a funfair; it is a warfare.”",
      author: "David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 2,
      name: "Item 2",
      quote:
        "“Knowing what God has promised is information, but knowing what to do to actualize it is revelation.”",
      author: "David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 3,
      name: "Item 3",
      quote: "“You cannot fake it to make it.”",
      author: "David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 4,
      name: "Item 4",
      quote: "“You are either spiritual or carnal; you cannot be neutral.”",
      author: "David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 5,
      name: "Item 5",
      quote: "“Until you begin to work, nothing works.”",
      author: "David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 6,
      name: "Item 6",
      quote: "“A glorious result demands a serious approach.”",
      author: "David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 7,
      name: "Item 7",
      quote:
        "“It is the blessing of God that makes rich, not the smartness of man.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 8,
      name: "Item 8",
      quote:
        "“You cannot be truly sold out to God and not stand out on earth.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 9,
      name: "Item 9",
      quote: "“You are not a failure till you start looking for who to blame.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 10,
      name: "Item 10",
      quote:
        "“The ‘if I perish I perish’ companies are the ones that flourish.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 11,
      name: "Item 11",
      quote: "Ruling Your World",
      author: "By: David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/en/book/show/33797838",
    },
    {
      id: 12,
      name: "Item 12",
      quote: "Born to Win",
      author: "By: David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/20063428-born-to-win?from_search=true&from_srp=true&qid=9U0MQ0dtX3&rank=5",
    },
    {
      id: 13,
      name: "Item 13",
      quote: "In Pursuit of Vision",
      author: "By: David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/33875574-in-pursuit-of-vision?ref=nav_sb_ss_1_20",
    },
    {
      id: 14,
      name: "Item 14",
      quote: "Understanding Your Potential - Discovering the Hidden You",
      author: "By: Myles Munroe",
      category: "Book",
      url: "https://www.goodreads.com/book/show/802310.Understanding_Your_Potential_Discovering_the_Hidden_You?ref=nav_sb_ss_1_24",
    },
    {
      id: 15,
      name: "Item 15",
      quote: "In Pursuit of Purpose",
      author: "By: Myles Munroe",
      category: "Book",
      url: "https://www.goodreads.com/book/show/1405322.In_Pursuit_of_Purpose?ref=nav_sb_ss_1_21",
    },
    {
      id: 16,
      name: "Item 16",
      quote: "God’s Masterplan for Your Life",
      author: "By: Gloria Copeland",
      category: "Book",
      url: "https://www.goodreads.com/book/show/3311813-god-s-master-plan-for-your-life?from_search=true&from_srp=true&qid=dcoy5NScoR&rank=1",
    },
    {
      id: 17,
      name: "Item 17",
      quote: "“I am how I am because of why I am.”",
      author: "Myles Munroe",
      category: "Quote",
      url: "https://www.google.com/search?gs_ssp=eJzj4tLP1TcwLcs2Tq40YPTiya3MSS1WyC3NK8pPBQBrMAic&q=myles+munroe&oq=myles&gs_lcrp=EgZjaHJvbWUqDwgBEC4YQxixAxiABBiKBTISCAAQABhDGOMCGLEDGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyBggCEEUYOTIMCAMQABhDGIAEGIoFMgwIBBAuGEMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgYIBxBFGDzSAQgxOTk1ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 18,
      name: "Item 18",
      quote:
        "“All you can do is all you can do, but all you can do is enough ”",
      author: "Art Williams",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/595983-all-you-can-do-is-all-you-can-do-but",
    },
    {
      id: 19,
      name: "Item 19",
      quote:
        "Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.",
      author: "Jeremiah 1:5",
      category: "Bible",
      url: "https://www.bible.com/bible/59/JER.1.5",
    },
    {
      id: 20,
      name: "Item 20",
      quote:
        "The greatest of all discoveries in life is the discovery of self.",
      author: "Dr. David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 21,
      name: "Item 21",
      quote: "Until you find yourself, you will always be someone else.",
      author: "Dr. Myles Munroe",
      category: "Quote",
      url: "https://www.azquotes.com/quote/808474",
    },
    {
      id: 22,
      name: "Item 22",
      quote:
        "Many people spend their whole lifetime trying to change who God has made them.",
      author: "John Mason",
      category: "Quote",
      url: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDMvKjc3LEwzYPTiysrPyFPITSzOzwMAbsMIdg&q=john+mason&oq=ohn+mason&gs_lcrp=EgZjaHJvbWUqDAgBEC4YChjUAhiABDIGCAAQRRg5MgwIARAuGAoY1AIYgAQyDAgCEC4YChjUAhiABDIMCAMQLhgKGNQCGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABNIBCDMzMzlqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 23,
      name: "Item 23",
      quote:
        "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
      author: "Jeremiah 33:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/JER.33.3",
    },
    {
      id: 24,
      name: "Item 24",
      quote:
        "Any faith that expects God to do everything is an irresponsible faith.",
      author: "Dr. David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 25,
      name: "Item 25",
      quote:
        "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
      author: "Jeremiah 29:11",
      category: "Bible",
      url: "https://www.bible.com/bible/1/JER.29.11",
    },
    {
      id: 26,
      name: "Item 26",
      quote: "For God shows no partiality.",
      author: "Romans 2:11",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ROM.2.11",
    },
    {
      id: 27,
      name: "Item 27",
      quote: "You were born an original. Don't die a copy!",
      author: "By: John Mason",
      category: "Book",
      url: "https://www.goodreads.com/en/book/show/39177",
    },
    {
      id: 28,
      name: "Item 28",
      quote: "A man's gift makes room for him and brings him before the great.",
      author: "Proverbs 18:16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.18.16",
    },
    {
      id: 29,
      name: "Item 29",
      quote:
        "“If you don’t know your purpose in life, then follow your passions.”",
      author: "T.D. Jakes",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/636989-if-you-can-t-figure-out-your-purpose-figure-out-your",
    },
    {
      id: 30,
      name: "Item 30",
      quote: "“Man is the only creature who refuses to be what he is.”",
      author: "Albert Camus",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/6759-man-is-the-only-creature-who-refuses-to-be-what",
    },
    {
      id: 31,
      name: "Item 31",
      quote:
        "In those days when you pray, I will listen. If you look for me wholeheartedly, you will find me.",
      author: "Jeremiah 29:12-13",
      category: "Bible",
      url: "https://www.bible.com/bible/1/JER.29.12-13",
    },
    {
      id: 32,
      name: "Item 32",
      quote:
        "That the LORD thy God may shew us the way wherein we may walk, and the thing that we may do.",
      author: "Jeremiah 42:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/JER.42.3",
    },
    {
      id: 33,
      name: "Item 33",
      quote: "Pay attention to your Passion - David",
      author: "1 Samuel 17:34-37",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1SA.17.34-37",
    },
    {
      id: 34,
      name: "Item 34",
      quote: "Pay attention to your Passion - Moses",
      author: "Exodus 2:11-12",
      category: "Bible",
      url: "https://www.bible.com/bible/1/EXO.2.11-12",
    },
    {
      id: 35,
      name: "Item 35",
      quote: "Pay attention to your Passion - Joseph",
      author: "Genesis 37:5-7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/GEN.37.5-7",
    },

    /*New Notes start*/

    {
      id: 36,
      name: "Item 36",
      quote:
        "“When the Spirit of truth comes, he will guide you into all truth.”",
      author: "John 16:13",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%2016:13&version=NIV",
    },
    {
      id: 37,
      name: "Item 37",
      quote:
        "“You saw me before I was born. Every day of my life was recorded in your book. Every moment was laid out before a single day had passed.”",
      author: "Psalm 139:16",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Psalm%20139:16&version=NIV",
    },
    {
      id: 38,
      name: "Item 38",
      quote:
        "“This is what the Sovereign Lord, the Holy One of Israel, says: “Only in returning to me and resting in me will you be saved. In quietness and confidence is your strength. But you would have none of it.”",
      author: "Isaiah 30:15",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Isaiah%2030:15&version=NIV",
    },
    {
      id: 39,
      name: "Item 39",
      quote:
        "The most outstanding human feat is nothing compared to what God can do for and through them",
      author: "1 Corinthians 1:25",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Corinthians%201:25&version=NIV",
    },
    {
      id: 40,
      name: "Item 40",
      quote:
        "But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him",
      author: "1 Corinthians 2:9",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Corinthians%202:9&version=KJV",
    },
    {
      id: 41,
      name: "Item 41",
      quote:
        "“And it is impossible to please God without faith. Anyone who wants to come to him must believe that God exists and that he rewards those who sincerely seek him”",
      author: "Hebrews 11:6",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%2011:6&version=NIV",
    },
    {
      id: 42,
      name: "Item 42",
      quote:
        "“Faith is a living, daring confidence in God’s grace, so sure and certain that a man could stake his life on it a thousand times”",
      author: "Martin Luther",
      category: "Quote",
      url: "",
    },
    {
      id: 43,
      name: "Item 43",
      quote: "Whosoever shall say to this mountain….",
      author: "Mark 11:23",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Mark%2011:23&version=NIV",
    },
    {
      id: 44,
      name: "Item 44",
      quote: "… As a man thinks in his heart, so is he.",
      author: "Proverbs 23:7",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%2023:7&version=NIV",
    },
    {
      id: 45,
      name: "Item 45",
      quote:
        "Guard your heart above all else, for it determines the course of your life.",
      author: "Proverbs 4:23",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%204:23&version=NIV",
    },
    {
      id: 46,
      name: "Item 46",
      quote: "…. I can never poor",
      author: "The Chancellor (Implied)",
      category: "Quote",
      url: "",
    },
    {
      id: 47,
      name: "Item 47",
      quote:
        "if two of you shall agree… (your desire and your imagination; your conscious and subscious mind)",
      author: "Matthew 18:19 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Matthew%2018:19&version=NIV",
    },
    {
      id: 48,
      name: "Item 48",
      quote: "You are your thoughts!",
      author: "Proverbs 23:7 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%2023:7&version=NIV",
    },
    {
      id: 49,
      name: "Item 49",
      quote:
        "“Every time you think a specific thought, a specific pathway of neurons fires up, neurotransmitters are released and synapses are subtly altered. With repetition this pathway is strengthened,”",
      author: "Marie Pasinski, MD",
      category: "Quote",
      url: "",
    },
    {
      id: 50,
      name: "Item 50",
      quote: "There are no limits to the mind of Christ",
      author: "1 Corinthians 2:16 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Corinthians%202:16&version=NIV",
    },
    {
      id: 51,
      name: "Item 51",
      quote: "The fool says in his heart, “There is no God.”",
      author: "Psalm 14:1",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Psalm%2014:1&version=NIV",
    },
    {
      id: 52,
      name: "Item 52",
      quote:
        "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      author: "Proverbs 3:5-6",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%203:5-6&version=NIV",
    },
    {
      id: 53,
      name: "Item 53",
      quote:
        "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us,",
      author: "Ephesians 3:20",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Ephesians%203:20&version=NIV",
    },
    {
      id: 54,
      name: "Item 54",
      quote:
        "“I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
      author: "John 15:5",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%2015:5&version=NIV",
    },
    {
      id: 55,
      name: "Item 55",
      quote: "I can do all things through Christ who strengthens me.",
      author: "Philippians 4:13",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Philippians%204:13&version=NIV",
    },
    {
      id: 56,
      name: "Item 56",
      quote: "Jesus Christ is the same yesterday and today and forever.",
      author: "Hebrews 13:8",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%2013:8&version=NIV",
    },
    {
      id: 57,
      name: "Item 57",
      quote:
        "For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.",
      author: "Romans 10:10",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%2010:10&version=KJV",
    },
    {
      id: 58,
      name: "Item 58",
      quote:
        "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
      author: "2 Corinthians 5:17",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=2%20Corinthians%205:17&version=KJV",
    },
    {
      id: 59,
      name: "Item 59",
      quote:
        "Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin.",
      author: "Romans 6:6",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%206:6&version=KJV",
    },
    {
      id: 60,
      name: "Item 60",
      quote:
        "And that ye put on the new man, which after God is created in righteousness and true holiness.",
      author: "Ephesians 4:24",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Ephesians%204:24&version=KJV",
    },
    {
      id: 61,
      name: "Item 61",
      quote:
        "And have put on the new man, which is renewed in knowledge after the image of him that created him",
      author: "Colossians 3:10",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Colossians%203:10&version=KJV",
    },
    {
      id: 62,
      name: "Item 62",
      quote:
        "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.",
      author: "1 John 5:4",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20John%205:4&version=KJV",
    },
    {
      id: 63,
      name: "Item 63",
      quote:
        "Who is he that overcometh the world, but he that believeth that Jesus is the Son of God?",
      author: "1 John 5:5",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20John%205:5&version=KJV",
    },
    {
      id: 64,
      name: "Item 64",
      quote: "For all have sinned, and come short of the glory of God",
      author: "Romans 3:23",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%203:23&version=KJV",
    },
    {
      id: 65,
      name: "Item 65",
      quote:
        "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.",
      author: "2 Corinthians 5:21",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=2%20Corinthians%205:21&version=KJV",
    },
    {
      id: 66,
      name: "Item 66",
      quote:
        "All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all",
      author: "Isaiah 53:6",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Isaiah%2053:6&version=KJV",
    },
    {
      id: 67,
      name: "Item 67",
      quote:
        "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
      author: "Galatians 5:22-23",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Galatians%205:22-23&version=KJV",
    },
    {
      id: 68,
      name: "Item 68",
      quote: "Love - Romans 5:5, 1 Cor. 13:13",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%205:5;%201%20Corinthians%2013:13&version=NIV",
    },
    {
      id: 69,
      name: "Item 69",
      quote: "Joy - Neh. 8:10, Isa. 12:13",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Nehemiah%208:10;%20Isaiah%2012:13&version=NIV",
    },
    {
      id: 70,
      name: "Item 70",
      quote: "Peace - Jn. 14:27, Phil. 4:7, Jn.16:33",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%2014:27;%20Philippians%204:7;%20John%2016:33&version=NIV",
    },
    {
      id: 71,
      name: "Item 71",
      quote: "Long suffering - Gal. 6:9, 2 Tim. 2:3",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Galatians%206:9;%202%20Timothy%202:3&version=NIV",
    },
    {
      id: 72,
      name: "Item 72",
      quote: "Gentleness - Matt. 10:16",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Matthew%2010:16&version=NIV",
    },
    {
      id: 73,
      name: "Item 73",
      quote: "Goodness - Ps. 33:5, Ps 23:6",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Psalm%2033:5;%20Psalm%2023:6&version=NIV",
    },
    {
      id: 74,
      name: "Item 74",
      quote: "Faith - Rom. 12:3, Hebs. 11:6",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%2012:3;%20Hebrews%2011:6&version=NIV",
    },

    {
      id: 75,
      name: "Item 75",
      quote: "Meekness - 1 Tim. 6:11, Ps. 22:26",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Timothy%206:11;%20Psalm%2022:26&version=NIV",
    },
    {
      id: 76,
      name: "Item 76",
      quote: "Temperance - Prov. 25:28.",
      author: "The fruit of the Spirit",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%2025:28&version=NIV",
    },
    {
      id: 77,
      name: "Item 77",
      quote:
        "“For there are three that bear record in heaven, the Father, the Word and the Holy Spirit; and these three are one”",
      author: "1 John 5:7",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20John%205:7&version=KJV",
    },
    {
      id: 78,
      name: "Item 78",
      quote: "God is SPIRIT",
      author: "John 4:24",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%204:24&version=NIV",
    },
    {
      id: 79,
      name: "Item 79",
      quote: "that which is born of the spirit is spirit",
      author: "John 3:6",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%203:6&version=NIV",
    },
    {
      id: 80,
      name: "Item 80",
      quote: "THEN MAN IS A SPIRIT",
      author: "John 1:12-13 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%201:12-13&version=NIV",
    },
    {
      id: 81,
      name: "Item 81",
      quote:
        "The Word of God provides access to the new World to which you now belong",
      author: "John 1:1, 4, 9 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%201:1,4,9&version=NIV",
    },
    {
      id: 82,
      name: "Item 82",
      quote:
        "Study the example of those who have got to where you desire to be – through their books etc.",
      author: "Hebrews 6:12 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%206:12&version=NIV",
    },
    {
      id: 83,
      name: "Item 83",
      quote:
        "That ye be not slothful, but followers of them who through faith and patience inherit the promises.",
      author: "Hebrews 6:12",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%206:12&version=KJV",
    },
    {
      id: 84,
      name: "Item 84",
      quote: "disposition, because…as you think, so you will be",
      author: "Proverbs 23:7 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%2023:7&version=NIV",
    },
    {
      id: 85,
      name: "Item 85",
      quote: "“It is not the mountain we conquered, but ourselves.",
      author: "Hillary Edmond",
      category: "Quote",
      url: "",
    },
    {
      id: 86,
      name: "Item 86",
      quote:
        "“only 10% of humans think, 25% think that they think and 65% would rather die than think”",
      author: "unknown",
      category: "Quote",
      url: "",
    },
    {
      id: 87,
      name: "Item 87",
      quote:
        "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:",
      author: "1 Peter 2:9",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Peter%202:9&version=KJV",
    },
    {
      id: 88,
      name: "Item 88",
      quote:
        "Every Child Of God Carries God’s Image. You must recognize that you are created in God’s image.",
      author: "Genesis 1:27, Psalm 139:14 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Genesis%201:27;%20Psalm%20139:14&version=NIV",
    },
    {
      id: 89,
      name: "Item 89",
      quote:
        "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
      author: "3 John 2",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=3%20John%202&version=KJV",
    },
    {
      id: 90,
      name: "Item 90",
      quote:
        "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
      author: "Jeremiah 29:11",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Jeremiah%2029:11&version=KJV",
    },
    {
      id: 91,
      name: "Item 91",
      quote: "Every Child Of God Is meant for the top.",
      author: "Deuteronomy 28:13 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Deuteronomy%2028:13&version=NIV",
    },
    {
      id: 92,
      name: "Item 92",
      quote: "Every Child Of God Is Ordained to be Royalty.",
      author: "1 Peter 2:9 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Peter%202:9&version=NIV",
    },
    {
      id: 93,
      name: "Item 93",
      quote: "Every child of God is protected by God daily and everywhere.",
      author: "Isaiah 41:10 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Isaiah%2041:10&version=NIV",
    },
    {
      id: 94,
      name: "Item 94",
      quote: "Your Identity is that of Christ after salvation",
      author: "Galatians 2:20 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Galatians%202:20&version=NIV",
    },
    {
      id: 95,
      name: "Item 95",
      quote:
        "By studying and meditating upon the bible daily, as the Bible Is our Living Manual.",
      author: "2 Timothy 3:16, 2 Timothy 2:15, Joshua 1:8 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=2%20Timothy%203:16;%202%20Timothy%202:15;%20Joshua%201:8&version=NIV",
    },
    {
      id: 96,
      name: "Item 96",
      quote: "Search and see what God’s Word says about You.",
      author: "Jeremiah 29:11, Matthew 5:13-14 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Jeremiah%2029:11;%20Matthew%205:13-14&version=NIV",
    },
    {
      id: 97,
      name: "Item 97",
      quote: "Believe and Confess His Word At All Times.",
      author: "Romans 10:9-10 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%2010:9-10&version=NIV",
    },
    {
      id: 98,
      name: "Item 98",
      quote: "Take Steps Of Faith By Putting Gods Word to Work In Your Doings.",
      author: "James 2:17-20 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=James%202:17-20&version=NIV",
    },
    {
      id: 99,
      name: "Item 99",
      quote: "Confidence in God’s love.",
      author: "Hebrews 13:6, Jeremiah 17:7 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%2013:6;%20Jeremiah%2017:7&version=NIV",
    },
    {
      id: 100,
      name: "Item 100",
      quote: "Resilience in trials.(not giving up in the face of challenges)",
      author: "James 1:2-4, 2 Timothy 1:7 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=James%201:2-4;%202%20Timothy%201:7&version=NIV",
    },
    {
      id: 101,
      name: "Item 101",
      quote: "Healthy relationships.",
      author: "John 13:34, Colossians 3:13-14, Ephesians 4:2-3 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%2013:34;%20Colossians%203:13-14;%20Ephesians%204:2-3&version=NIV",
    },
    {
      id: 102,
      name: "Item 102",
      quote: "Courage and faith.",
      author: "Deuteronomy 31:6, Psalm 56:3-4 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Deuteronomy%2031:6;%20Psalm%2056:3-4&version=NIV",
    },
    {
      id: 103,
      name: "Item 103",
      quote: "Freedom from comparison and envy.",
      author: "Ecclesiastes 4:4, Exodus 20:17, Galatians 6:4, Proverbs 14:30 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Ecclesiastes%204:4;%20Exodus%2020:17;%20Galatians%206:4;%20Proverbs%2014:30&version=NIV",
    },
    {
      id: 104,
      name: "Item 104",
      quote:
        "A discovery of one’s self from scriptures is vital to fulfilling one’s glorious destiny",
      author: "Interpretation",
      category: "Bible",
      url: "",
    },
    {
      id: 105,
      name: "Item 105",
      quote: "Ye shall know the truth, and the truth shall make you free",
      author: "John 8:32",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%208:32&version=KJV",
    },
    {
      id: 106,
      name: "Item 106",
      quote: "I am redeemed a lion to prevail where others travail",
      author: "Interpretation based on Proverbs 30:29-30",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%2030:29-30&version=KJV",
    },
    {
      id: 107,
      name: "Item 107",
      quote:
        "There be three things which go well, yea, four are comely in going: A lion which is strongest among beasts, and turneth not away for any;",
      author: "Proverbs 30:29-30",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Proverbs%2030:29-30&version=KJV",
    },
    {
      id: 108,
      name: "Item 108",
      quote:
        "As thou hast sent me into the world, even so have I also sent them into the world.",
      author: "John 17:18",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=John%2017:18&version=KJV",
    },
    {
      id: 109,
      name: "Item 109",
      quote: "We are in the last days",
      author: "2 Timothy 3:1-10 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=2%20Timothy%203:1-10&version=NIV",
    },
    {
      id: 110,
      name: "Item 110",
      quote: "Many shall depart from the faith",
      author: "1 Timothy 4:1-2 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Timothy%204:1-2&version=NIV",
    },
    {
      id: 111,
      name: "Item 111",
      quote: "Many shall go after other gods, especially the god of gold",
      author: "Exodus 32:26-31; Matthew 6:24 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Exodus%2032:26-31;%20Matthew%206:24&version=NIV",
    },
    {
      id: 112,
      name: "Item 112",
      quote: "It is covetousness that leads to things like stealing and fraud",
      author: "Zechariah 5:4 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Zechariah%205:4&version=NIV",
    },
    {
      id: 113,
      name: "Item 113",
      quote: "destruction of great destinies",
      author: "Joshua 7:20-27; 2 Kings 5:26; Acts 1:16-19; Jeremiah 17:11 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Joshua%207:20-27;%202%20Kings%205:26;%20Acts%201:16-19;%20Jeremiah%2017:11&version=NIV",
    },
    {
      id: 114,
      name: "Item 114",
      quote: "Therefore, beware of covetousness",
      author: "Luke 12:15",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Luke%2012:15&version=NIV",
    },
    {
      id: 115,
      name: "Item 115",
      quote:
        "Holding faith, and a good conscience; which some having put away concerning faith have made shipwreck:",
      author: "1 Timothy 1:19",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Timothy%201:19&version=KJV",
    },
    {
      id: 116,
      name: "Item 116",
      quote: "Anointing is no substitute for a clear conscience",
      author: "Romans 9:1 (Implied)",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%209:1&version=NIV",
    },
    {
      id: 117,
      name: "Item 117",
      quote: "Monitors thoughts and hearts",
      author: "Acts 23:1; 2 Corinthians 1:12 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Acts%2023:1;%202%20Corinthians%201:12&version=NIV",
    },
    {
      id: 118,
      name: "Item 118",
      quote: "Living honestly",
      author: "Implied Principle",
      category: "Bible",
      url: "",
    },
    {
      id: 119,
      name: "Item 119",
      quote: "Not living only for earthly gain",
      author: "1 Corinthians 15:19 ",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Corinthians%2015:19&version=NIV",
    },
    {
      id: 120,
      name: "Item 120",
      quote: "Everyone must give account before God",
      author: "Romans 14:12",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Romans%2014:12&version=NIV",
    },
    {
      id: 121,
      name: "Item 121",
      quote: "Avoid unfruitful works of darkness",
      author: "Ephesians 5:11",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Ephesians%205:11&version=NIV",
    },
    {
      id: 122,
      name: "Item 122",
      quote: "And you were dead in the trespasses and sins...",
      author: "Ephesians 2:1",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Ephesians%202:1&version=NIV",
    },
    {
      id: 123,
      name: "Item 123",
      quote:
        "Let us draw near... having our hearts sprinkled from an evil conscience...",
      author: "Hebrews 10:22",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%2010:22&version=NIV",
    },
    {
      id: 124,
      name: "Item 124",
      quote:
        "...speaking lies in hypocrisy; having their own conscience seared with a hot iron...",
      author: "1 Timothy 4:2",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=1%20Timothy%204:2&version=NIV",
    },
    {
      id: 125,
      name: "Item 125",
      quote: "...even their mind and conscience are defiled.",
      author: "Titus 1:15",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Titus%201:15&version=NIV",
    },
    {
      id: 126,
      name: "Item 126",
      quote: "I serve with a pure conscience...",
      author: "2 Timothy 1:3",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=2%20Timothy%201:3&version=NIV",
    },
    {
      id: 127,
      name: "Item 127",
      quote: "Cleansed by Christ’s blood, leads to sincere faith",
      author: "Hebrews 9:14 (Implied)",
      category: "Bible",
      url: "https://www.biblegateway.com/passage/?search=Hebrews%209:14&version=NIV",
    },

    /*New notes end */

    /*new ids start*/

    {
      id: 128,
      name: "Item 128",
      quote:
        "For the Holy Spirit makes God’s fatherhood real to us as he whispers into our innermost being, “You are God’s beloved child!”",
      author: "Romans 8:16 (TPT)",
      category: "Bible",
      url: "https://www.bible.com/bible/1849/ROM.8.16.TPT",
    },
    {
      id: 129,
      name: "Item 129",
      quote:
        "That is why, when Christ came into the world, he said to God, “You did not want animal sacrifices or sin offerings. But you have given me a body to offer… Then I said, ‘Look, I have come to do your will, O God— as is written about me in the Scriptures.’”",
      author: "Hebrews 10:5,7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/HEB.10.5-7",
    },
    {
      id: 130,
      name: "Item 130",
      quote:
        "“Self-discovery is the first step to living a life of impact and fulfilment. Until you understand who you are and discover your potentials, you may never live up to your highest capabilities.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=Bi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc1ODhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 131,
      name: "Item 131",
      quote: "“Nothing finishes until you finish it with your mouth.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=Bi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc1ODhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 132,
      name: "Item 132",
      quote: "“You cannot fail with facts.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=Bi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc1ODhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 133,
      name: "Item 133",
      quote: "The Road Back to You: An Enneagram Journey to Self-Discovery",
      author: "By: Ian Morgan Cron, Suzanne Stabile",
      category: "Book",
      url: "https://www.goodreads.com/book/show/28268515-the-road-back-to-you?ref=nav_sb_ss_1_20",
    },
    {
      id: 134,
      name: "Item 134",
      quote: "Understanding Divine Direction",
      author: "By: Bishop David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/9497975-understanding-divine-direction?ref=nav_sb_ss_1_30",
    },
    {
      id: 135,
      name: "Item 135",
      quote: "“The Devil Made Me Do It!”",
      author: "Flip Wilson Geraldine",
      category: "Quote",
      url: "https://www.google.com/search?q=the+devil+made+me+do+it+Flip+Wilson+Geraldine&sca_esv=33d761b251b7bc29&ei=yPdMZtaZHqCrhbIPn6eSgAQ&ved=0ahUKEwjWnfz-vp-GAxWgVUEAHZ-TBEAQ4dUDCBA&uact=5&oq=the+devil+made+me+do+it+Flip+Wilson+Geraldine&gs_lp=Egxnd3Mtd2l6LXNlcnAiLXRoZSBkZXZpbCBtYWRlIG1lIGRvIGl0IEZsaXAgV2lsc29uIEdlcmFsZGluZTIGEAAYFhgeMggQABiABBiiBEjXO1DCDVi7OnABeAGQAQCYAboCoAGUD6oBBzAuNy4yLjG4AQPIAQD4AQGYAgqgAoYOwgIKEAAYsAMY1gQYR8ICBxAuGIAEGA3CAgcQABiABBgNwgILEC4YgAQYkQIYigXCAgUQABiABJgDAIgGAZAGB5IHBzEuNi4yLjGgB-o3&sclient=gws-wiz-serp",
    },
    {
      id: 136,
      name: "Item 136",
      quote:
        "“A conscience is that still, small voice that people won't listen to”",
      author: "Jiminy Cricket",
      category: "Quote",
      url: "https://www.google.com/search?q=A+conscience+is+that+still%2C+small+voice+that+people+won%27t+listen+to&oq=A+conscience+is+that+still%2C+small+voice+that+people+won%27t+listen+to&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzU2N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1",
    },
    {
      id: 137,
      name: "Item 137",
      quote:
        "“EVERY HUMAN BEING HAS FOUR ENDOWMENTS- SELF AWARENESS, CONSCIENCE, INDEPENDENT WILL, AND CREATIVE IMAGINATION. THESE GIVE US THE ULTIMATE HUMAN FREEDOM: THE POWER TO CHOOSE, TO RESPOND, TO CHANGE.”",
      author: "Stephen R. Covey",
      category: "Quote",
      url: "https://www.brainyquote.com/quotes/stephen_covey_138246",
    },
    {
      id: 138,
      name: "Item 138",
      quote:
        "I thank God, whom I serve from my forefathers with pure conscience, that without ceasing I have remembrance of thee in my prayers night and day",
      author: "2 Timothy 1:3",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2TI.1.3",
    },
    {
      id: 139,
      name: "Item 139",
      quote:
        "The heart is deceitful above all things, and desperately wicked: who can know it? I the LORD search the heart, I try the reins, even to give every man according to his ways, and according to the fruit of his doings.",
      author: "Jeremiah 17:9-10",
      category: "Bible",
      url: "https://www.bible.com/bible/1/JER.17.9-10",
    },
    {
      id: 140,
      name: "Item 140",
      quote:
        "Keep thy heart with all diligence; for out of it are the issues of life. - Proverbs 4:23 (KJV)",
      author: "Proverbs 4:23 (KJV)",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.4.23.KJV",
    },
    {
      id: 141,
      name: "Item 141",
      quote: "Click the link",
      author: "Romans 7:19-25",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ROM.7.19-25",
    },
    {
      id: 142,
      name: "Item 142",
      quote:
        "Afterward, David was conscience-stricken for having cut off a corner of his robe.",
      author: "1 Samuel 24:5",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1SA.24.5",
    },
    {
      id: 143,
      name: "Item 143",
      quote: "Conscience is universal",
      author: "Romans 2:14-16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ROM.2.14-16",
    },
    {
      id: 144,
      name: "Item 144",
      quote: "Conscience can be conditioned. - Click the link",
      author: "Romans 14:1-12",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ROM.14.1-12",
    },
    {
      id: 145,
      name: "Item 145",
      quote:
        "“Holding faith, and a good conscience; which some having put away concerning faith have made shipwreck.”",
      author: "1 Timothy 1:19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1TI.1.19",
    },
    {
      id: 146,
      name: "Item 146",
      quote:
        "And Paul, earnestly beholding the council, said, Men and brethren, I have lived in all good conscience before God until this day.",
      author: "Acts 23:1",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ACT.23.1",
    },
    {
      id: 147,
      name: "Item 147",
      quote:
        "Howbeit there is not in every man that knowledge: for some with conscience of the idol unto this hour eat it as a thing offered unto an idol; and their conscience being weak is defiled.",
      author: "1 Corinthians 8:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1CO.8.7",
    },
    {
      id: 148,
      name: "Item 148",
      quote:
        "Speaking lies in hypocrisy; having their conscience seared with a hot iron",
      author: "1 Timothy 4:2b",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1TI.4.2",
    },
    {
      id: 149,
      name: "Item 149",
      quote:
        "How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?",
      author: "Hebrews 9:14",
      category: "Bible",
      url: "https://www.bible.com/bible/1/HEB.9.14",
    },
    {
      id: 150,
      name: "Item 150",
      quote:
        "“But when God, who set me apart from my mother’s womb and called me by his grace, was pleased”.",
      author: "Galatians 1:15",
      category: "Bible",
      url: "https://www.bible.com/bible/1/GAL.1.15",
    },
    {
      id: 151,
      name: "Item 151",
      quote:
        "For as he thinketh in his heart, so is he: Eat and drink, saith he to thee; But his heart is not with thee.",
      author: "Proverbs 23:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.23.7",
    },
    {
      id: 152,
      name: "Item 152",
      quote: "“Divine plan is useless without divine insights.”",
      author: "Dr. David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAuGLEDGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMjgyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 153,
      name: "Item 153",
      quote:
        "“The greatest discovery in life is self-discovery. Until you find yourself you will always be someone else. Become yourself.”",
      author: "Myles Munroe",
      category: "Quote",
      url: "https://www.google.com/search?gs_ssp=eJzj4tLP1TcwLcs2Tq40YPTiya3MSS1WyC3NK8pPBQBrMAic&q=myles+munroe&oq=My&gs_lcrp=EgZjaHJvbWUqDAgBEC4YQxiABBiKBTIGCAAQRRg5MgwIARAuGEMYgAQYigUyEggCEC4YQxjHARjRAxiABBiKBTIMCAMQABhDGIAEGIoFMg0IBBAAGLEDGIAEGIoFMgYIBRBFGD0yBggGEEUYPTIGCAcQRRg90gEIMjA2MWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 154,
      name: "Item 154",
      quote:
        "“The secret to a full and fulfilled life is discovery, Understanding, and Application of Kingdom of Heave on Earth”",
      author: "Myles Munroe",
      category: "Quote",
      url: "https://www.google.com/search?gs_ssp=eJzj4tLP1TcwLcs2Tq40YPTiya3MSS1WyC3NK8pPBQBrMAic&q=myles+munroe&oq=My&gs_lcrp=EgZjaHJvbWUqDAgBEC4YQxiABBiKBTIGCAAQRRg5MgwIARAuGEMYgAQYigUyEggCEC4YQxjHARjRAxiABBiKBTIMCAMQABhDGIAEGIoFMg0IBBAAGLEDGIAEGIoFMgYIBRBFGD0yBggGEEUYPTIGCAcQRRg90gEIMjA2MWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 155,
      name: "Item 155",
      quote:
        "“I was once afraid of people saying; Who does she think she is? Now I have the courage to stand and say, “This is who I am.”",
      author: "Oprah Winfrey",
      category: "Quote",
      url: "https://www.google.com/search?q=oprah+winfrey&oq=Oprah+Winfrey&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxjjAhixAxiABBiKBTISCAAQABhDGOMCGLEDGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyBwgCEC4YgAQyBwgDEAAYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYjwIyBwgJEAAYjwKoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 156,
      name: "Item 156",
      quote:
        "“The biggest adventure you can ever take is to live the life of your dreams”",
      author: "Oprah Winfrey",
      category: "Quote",
      url: "https://www.google.com/search?q=oprah+winfrey&oq=Oprah+Winfrey&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxjjAhixAxiABBiKBTISCAAQABhDGOMCGLEDGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyBwgCEC4YgAQyBwgDEAAYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYjwIyBwgJEAAYjwKoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 157,
      name: "Item 157",
      quote:
        "“Be sincere with yourself and Identify the Gifts and Talents within you”",
      author: "David Olukanni",
      category: "Quote",
      url: "https://www.google.com/search?q=david+olukanni&oq=David+Olukanni&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYogQYiQUyCggFEAAYogQYiQUyCggGEAAYgAQYogTSAQc0MDJqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 158,
      name: "Item 158",
      quote:
        "“You can identify and nurture that which is in you than anyone else”",
      author: "David Olukanni",
      category: "Quote",
      url: "https://www.google.com/search?q=david+olukanni&oq=David+Olukanni&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYogQYiQUyCggFEAAYogQYiQUyCggGEAAYgAQYogTSAQc0MDJqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 159,
      name: "Item 159",
      quote:
        "“You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level. Pleasure is always derived from something outside you, whereas joy arises from within.”",
      author: "Eckhart Tolle",
      category: "Quote",
      url: "https://www.google.com/search?q=eckhart+tolle&oq=Eckhart+Tolle&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxjjAhixAxiABBiKBTISCAAQABhDGOMCGLEDGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyBwgCEC4YgAQyBwgDEAAYgAQyBwgEEC4YgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYjwIyBwgJEC4YgASoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 160,
      name: "Item 160",
      quote:
        "“It is better to be prepared and not have an opportunity than to have an opportunity and not be prepared”",
      author: "Les Brown",
      category: "Quote",
      url: "https://www.google.com/search?q=les+brown&oq=Les+Brow&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQLhiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 161,
      name: "Item 161",
      quote: "“Don’t let someone else opinion of you become your reality”",
      author: "Les Brown",
      category: "Quote",
      url: "https://www.google.com/search?q=les+brown&oq=Les+Brow&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQLhiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 162,
      name: "Item 162",
      quote: "“You must remain focused on your journey to greatness”",
      author: "Les Brown",
      category: "Quote",
      url: "https://www.google.com/search?q=les+brown&oq=Les+Brow&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQLhiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 163,
      name: "Item 163",
      quote:
        "“Reputation is what others know about you. Honor is what you know about yourself”",
      author: "Lois McMaster Bujold",
      category: "Quote",
      url: "https://www.google.com/search?q=lois+mcmaster+bujold&oq=Lois+McMaster+Bujo&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBggCEEUYOTIHCAMQLhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQLhiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    /*new ids end */

    {
      id: 164,
      name: "Item 164",
      quote: "“What you are is a question that only you can answer”",
      author: "Lois McMaster Bujold",
      category: "Quote",
      url: "https://www.google.com/search?q=lois+mcmaster+bujold&oq=Lois+McMaster+Bujo&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBggCEEUYOTIHCAMQLhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQLhiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 165,
      name: "Item 165",
      quote: "The Force of Freedom",
      author: "By: Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/en/book/show/18113743",
    },
    {
      id: 166,
      name: "Item 166",
      quote: "Understanding Divine Direction",
      author: "By: Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/9497975-understanding-divine-direction?ref=nav_sb_ss_1_30",
    },
    {
      id: 167,
      name: "Item 167",
      quote: "Understanding your Potential",
      author: "By: Dr. Myles Munroe",
      category: "Book",
      url: "https://www.goodreads.com/book/show/802310.Understanding_Your_Potential_Discovering_the_Hidden_You?ref=nav_sb_ss_1_28rul",
    },
    {
      id: 168,
      name: "Item 168",
      quote: "Ruling your World",
      author: "By: Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/33797838-ruling-your-world?ref=nav_sb_ss_2_17",
    },
    {
      id: 169,
      name: "Item 169",
      quote: "The Force of Freedom",
      author: "By: Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/en/book/show/18113743",
    },
    {
      id: 170,
      name: "Item 170",
      quote: "No Excuses: The Power of Self-Discipline",
      author: "By: Brian Tracy",
      category: "Book",
      url: "https://www.goodreads.com/book/show/8112865-no-excuses?ref=nav_sb_ss_1_40",
    },
    {
      id: 171,
      name: "Item 171",
      quote: "Understanding Vision",
      author: "By: Dr. David Oyedepo",
      category: "Book",
      url: "https://www.goodreads.com/book/show/4914798-understanding-vision?ref=nav_sb_ss_3_20",
    },
    {
      id: 172,
      name: "Item 172",
      quote: "In pursuit of Purpose",
      author: "By: Dr. Myles Munroe",
      category: "Book",
      url: "https://www.goodreads.com/book/show/1405322.In_Pursuit_of_Purpose?ref=nav_sb_ss_1_21",
    },
    {
      id: 173,
      name: "Item 173",
      quote: "Plans, Purpose and Pursuit",
      author: "By: Kenneth E. Hagin",
      category: "Book",
      url: "https://www.goodreads.com/book/show/1812405.Plans_Purposes_Pursuits?ref=nav_sb_ss_1_26",
    },
    {
      id: 174,
      name: "Item 174",
      quote: "Following God’s plan for your life",
      author: "By: Kenneth E. Hagin",
      category: "Book",
      url: "https://www.goodreads.com/en/book/show/2767466",
    },
    {
      id: 175,
      name: "Item 175",
      quote: "Defending the Christian Faith",
      author: "By: John G. Leslie",
      category: "Book",
      url: "https://www.goodreads.com/book/show/144105683-defending-the-faith-in-the-last-days?ref=nav_sb_ss_2_21",
    },
    {
      id: 176,
      name: "Item 176",
      quote: "The Power of Self-Confidence",
      author: "By: Brian Tracy",
      category: "Book",
      url: "https://www.goodreads.com/book/show/15791188-the-power-of-self-confidence?ref=nav_sb_ss_1_28",
    },
    {
      id: 177,
      name: "Item 177",
      quote:
        "For the creation waits in eager expectation for the children of God to be revealed",
      author: "Romans 8:19 NIV",
      category: "Bible",
      url: "https://www.bible.com/bible/111/ROM.8.19.NIV",
    },
    {
      id: 178,
      name: "Item 178",
      quote:
        "“There is no mountain anywhere; everybody's mountain is his ignorance.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 179,
      name: "Item 179",
      quote:
        "“God has a place prepared for you in life; a discovery of it is what is called vision.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 180,
      name: "Item 180",
      quote:
        "“Anything that Christ paid for that is still tormenting you is illegal”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 181,
      name: "Item 181",
      quote: "“If you do not have a dream, you are doomed”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 182,
      name: "Item 182",
      quote: "“Praying without working is playing without knowing”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 183,
      name: "Item 183",
      quote: "God did not create anyone to be unimportant and useless.",
      author: "Psalm 8:5-6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PSA.8.5-6",
    },
    {
      id: 184,
      name: "Item 184",
      quote:
        "“You have been redeemed as priests and kings to reign on the earth, not to roam about in it.”",
      author: "Bishop David Oyedepo",
      category: "Quote",
      url: "https://www.google.com/search?q=Bishop+David+Oyedepo&oq=B&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQc2ODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 185,
      name: "Item 185",
      quote: "“Be faithful to that which exists within yourself.”",
      author: "André Gide",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/181427-be-faithful-to-that-which-exists-nowhere-but-in-yourself-",
    },
    {
      id: 186,
      name: "Item 186",
      quote: "The Believer's Authority",
      author: "By: Kenneth E. Hagin",
      category: "Book",
      url: "https://www.goodreads.com/book/show/821561.The_Believer_s_Authority?ac=1&from_search=true&qid=iDILbaD6wX&rank=1",
    },
    {
      id: 187,
      name: "Item 187",
      quote:
        "For as he thinketh in his heart, so is he: Eat and drink, saith he to thee; But his heart is not with thee.",
      author: "Proverbs 23:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.23.7",
    },
    {
      id: 188,
      name: "Item 188",
      quote:
        "“Every time you think a specific thought, a specific pathway of neurons fires up, neurotransmitters are released and synapses are subtly altered. With repetition this pathway is strengthened.”",
      author: "Marie Pasinski, MD",
      category: "Quote",
      url: "https://www.google.com/search?q=Marie+Pasinski%2C+MD&oq=Marie+Pasinski%2C+MD&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDINCAIQABiGAxiABBiKBTIKCAMQABiABBiiBNIBBzI3OWowajmoAgCwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 189,
      name: "Item 189",
      quote:
        "For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ.",
      author: "1 Corinthians 2:16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1CO.2.16",
    },
    {
      id: 190,
      name: "Item 190",
      quote:
        "“Men are disturbed, not by things, but by the principles and notions which they form concerning things.”",
      author: "Epictetus (ENCHIRIDION, 135)",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/7146787-men-are-disturbed-not-by-things-but-by-the-principles",
    },
    {
      id: 191,
      name: "Item 191",
      quote:
        "“When a reinforcement is perceived by the subject as ... not being entirely contingent upon his action, then, in our culture, it is typically perceived as the result of luck, chance, fate, as under the control of powerful others, or as unpredictable because of the great complexity of the forces surrounding him. When the event is interpreted in this way by an individual, we have labelled this a belief in external control. If the person perceived that the event is contingent upon his own behaviour or his own relatively permanent characteristics, we have termed this a belief in internal control.”",
      author: "Rotter, 1966, p. 1",
      category: "Quote",
      url: "https://www.google.com/search?q=Rotter%2C+1966&oq=Rotter%2C+1966&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIKCAgQABgPGBYYHjINCAkQABiGAxiABBiKBdIBBzQ0NWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 192,
      name: "Item 192",
      quote:
        "“Death isn't the greatest loss in life. The greatest loss is what dies inside of us while we live.”",
      author: "Norman Cousins",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/41499-death-is-not-the-greatest-loss-in-life-the-greatest",
    },
    {
      id: 193,
      name: "Item 193",
      quote:
        "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us.",
      author: "2 Corinthians 4:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2CO.4.7",
    },

    {
      id: 194,
      name: "Item 194",
      quote:
        "According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue.",
      author: "2 Peter 1:3 KJV",
      category: "Bible",
      url: "https://www.bible.com/bible/1/2PE.1.3.KJV",
    },
    {
      id: 195,
      name: "Item 195",
      quote:
        "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
      author: "Proverbs 25:2",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.25.2",
    },
    {
      id: 196,
      name: "Item 196",
      quote:
        "“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.”",
      author: "Albert Einstein",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/8136665-everybody-is-a-genius-but-if-you-judge-a-fish",
    },
    {
      id: 197,
      name: "Item 197",
      quote:
        "And it came to pass, when the evil spirit from God was upon Saul, that David took an harp, and played with his hand: so Saul was refreshed, and was well, and the evil spirit departed from him.",
      author: "1 Samuel 16:23",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1SA.16.23",
    },
    {
      id: 198,
      name: "Item 198",
      quote:
        "“No matter how big the world is, there's a place for you in it when you discover and manifest your gift.”",
      author: "Myles Munroe",
      category: "Quote",
      url: "https://www.google.com/search?q=No+matter+how+big+the+world+is,+there's+a+place+for+you+in+it+when+you+discover+and+manifest+your+gift.",
    },
    {
      id: 199,
      name: "Item 199",
      quote:
        "“The meaning of life is to find your gift. The purpose of life is to give it away.”",
      author: "Pablo Picasso",
      category: "Quote",
      url: "https://www.goodreads.com/quotes/607827-the-meaning-of-life-is-to-find-your-gift-the",
    },
    {
      id: 200,
      name: "Item 200",
      quote:
        "At that moment the Spirit of the LORD came powerfully upon him, and he ripped the lion's jaws apart with his bare hands. He did it as easily as if it were a young goat. But he didn't tell his father or mother about it.",
      author: "Judges 14:6",
      category: "Bible",
      url: "https://www.bible.com/bible/1/JDG.14.6",
    },
    {
      id: 201,
      name: "Item 201",
      quote:
        "The Philistines grabbed Samson and poked out his eyes. They took him to the prison in Gaza and chained him up. Then they put him to work, turning a millstone to grind grain.",
      author: "Judges 16:21 CEV",
      category: "Bible",
      url: "https://www.bible.com/bible/392/JDG.16.21.CEV",
    },
    {
      id: 202,
      name: "Item 202",
      quote:
        "“Talent is talent until it meets SKILL to become ability. Moreover, ability needs CAPACITY to become capability.”",
      author: "Faith Aizegbemi",
      category: "Quote",
      url: "https://www.google.com/search?q=Talent+is+talent+until+it+meets+SKILL+to+become+ability.+Moreover%2C+ability+needs+CAPACITY+to+become+capability+-+Faith+Aizegbemi&sca_esv=bd0d05e7905db8d3&ei=GMNOZvTEGL-BhbIP_I28oAg&ved=0ahUKEwj0sKyD9aKGAxW_QEEAHfwGD4QQ4dUDCBA&uact=5&oq=Talent+is+talent+until+it+meets+SKILL+to+become+ability.+Moreover%2C+ability+needs+CAPACITY+to+become+capability+-+Faith+Aizegbemi&gs_lp=Egxnd3Mtd2l6LXNlcnAigAFUYWxlbnQgaXMgdGFsZW50IHVudGlsIGl0IG1lZXRzIFNLSUxMIHRvIGJlY29tZSBhYmlsaXR5LiBNb3Jlb3ZlciwgYWJpbGl0eSBuZWVkcyBDQVBBQ0lUWSB0byBiZWNvbWUgY2FwYWJpbGl0eSAtIEZhaXRoIEFpemVnYmVtaUgAUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQH4AQKYAgCgAgCYAwCSBwCgBwA&sclient=gws-wiz-serp",
    },
    {
      id: 203,
      name: "Item 203",
      quote:
        "For the earnest expectation of the creation eagerly waits for the manifestation of the sons of God.",
      author: "Romans 8:19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/ROM.8.19",
    },
    {
      id: 204,
      name: "Item 204",
      quote: "Click the link.",
      author: "1 Samuel 17:33-37",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1SA.17.33-37",
    },
    {
      id: 205,
      name: "Item 205",
      quote:
        "“Talent alone does not bring fulfilment, 'well-plugged' talents do.”",
      author: "Abraham Owoseni",
      category: "Quote",
      url: "https://www.linkedin.com/in/abrahamowoseni/",
    },
    {
      id: 206,
      name: "Item 206",
      quote:
        "But whatever I am now, it is all because God poured out his special favour on me—and not without results. For I have worked harder than any of the other apostles; yet it was not I but God who was working by his grace through me.",
      author: "1 Corinthians 15:10 NLT",
      category: "Bible",
      url: "https://www.bible.com/bible/116/1CO.15.10.NLT",
    },
    {
      id: 207,
      name: "Item 207",
      quote: "Maximizing Your Potential: The Keys to Dying Empty",
      author: "By: Myles Munroe",
      category: "Book",
      url: "https://www.goodreads.com/book/show/1405319.Maximizing_Your_Potential?ref=nav_sb_ss_1_31",
    },
    {
      id: 208,
      name: "Item 208",
      quote: "Releasing Your Potential: Exposing the Hidden You",
      author: "By: Myles Munroe",
      category: "Book",
      url: "https://www.goodreads.com/book/show/1405377.Releasing_Your_Potential",
    },
    {
      id: 209,
      name: "Item 209",
      quote: "Whosoever shall say to this mountain...",
      author: "Mark 11:23",
      category: "Bible",
      url: "https://www.bible.com/bible/1/MRK.11.23",
    },
    {
      id: 210,
      name: "Item 210",
      quote: "As he thinketh in his heart, so is he.",
      author: "Prov 23:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.23.7",
    },
    {
      id: 211,
      name: "Item 211",
      quote:
        "Keep thy heart with all diligence; for out of it are the issues of life.",
      author: "Prov 4:23",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.4.23",
    },
    {
      id: 212,
      name: "Item 212",
      quote: "I can never be poor.",
      author: "The Chancellor - Bishop David Oyedepo",
      category: "Quote",
      url: "",
    },
    {
      id: 213,
      name: "Item 213",
      quote:
        "Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.",
      author: "Matt 18:19",
      category: "Bible",
      url: "https://www.bible.com/bible/1/MAT.18.19",
    },
    {
      id: 214,
      name: "Item 214",
      quote:
        "For as he thinketh in his heart, so is he: Eat and drink, saith he to thee; But his heart is not with thee.",
      author: "Prov 23:7",
      category: "Bible",
      url: "https://www.bible.com/bible/1/PRO.23.7",
    },
    {
      id: 215,
      name: "Item 215",
      quote:
        "For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ.",
      author: "1 Cor 2:16",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1CO.2.16",
    },
    {
      id: 216,
      name: "Item 216",
      quote:
        "But as it is, God arranged the members in the body, each one of them, as he chose. If all were a single member, where would the body be? As it is, there are many parts, yet one body. The eye cannot say to the hand, “I have no need of you,” nor again the head to the feet, “I have no need of you.” On the contrary, the parts of the body that seem to be weaker are indispensable.",
      author: "1 Cor 12:18-22",
      category: "Bible",
      url: "https://www.bible.com/bible/1/1CO.12.18-22",
    },

    {
      id: 217,
      name: "Item 217",
      quote:
        "Please Fill The Survey of The TMC-DLD Hub for my Final Year Project",
      author: "Click Here",
      category: "Quote",
      url: "https://forms.gle/idXSFn5NGUbiFGha9",
    },

    {
      id: 218,
      name: "Item 218",
      quote: "“Thank You!”",
      author: "Rerel'Oluwa Tooki",
      category: "Quote",
      url: "https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/",
    },
  ]);

  const [displayTextArea, setDisplayTextArea] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  // Function to send feedback email
  const sendFeedbackEmail = (e: any) => {
    e.preventDefault();
    if (feedbackMessage.trim() !== "") {
      emailjs
        .send(
          "service_u4hp1mr",
          "template_8hjpcrt",
          {
            from_name: "User",
            to_name: "Your Name",
            message: feedbackMessage,
          },
          "x5ittGCaJN71qzFuY"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Show alert that feedback has been sent
            alert("Feedback sent!");
            // Hide the input field
            setDisplayTextArea(false);
            // Reset feedback message
            setFeedbackMessage("");
          },
          (error) => {
            console.log(error.text);
            // Show alert for error
            alert("Error sending feedback. Please try again later.");
          }
        );
    } else {
      // Show alert if feedback message is blank
      alert("Insufficient character length!");
    }
  };

  // Function to toggle display of input field
  const toggleDisplay = () => {
    setDisplayTextArea(!displayTextArea);
    setFeedbackMessage(""); // Reset feedback message
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Define the state to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Define the state to keep track of the visibility of the input box
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Define the state to keep track of the visibility of the search results box
  const [isVisible2, setIsVisible2] = useState<boolean>(false);

  // Define the state to keep track of the visibility of the options box
  const [optionsIsVisible, setOptionsIsVisible] = useState<boolean>(false);

  // Define the state to update the text of the options box
  const [optionsBoxText, setOptionsBoxText] = useState<string>("Option");

  // Define the state to keep track of the visibility of the list options box
  const [optionsListIsVisible, setOptionsListIsVisible] =
    useState<boolean>(false);

  // Define the state for the search input and search results
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  // Use useEffect to focus on the input field when it becomes visible
  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  // Function to handle the next button click and iterate through the array
  const handleNextButtonClick = () => {
    console.log("sr length is:");
    console.log(searchResults.length);
    if (searchResults.length > 0) {
      console.log("sr >0");
      // Find the index of the current item in searchResults
      const currentIndexInSearch = searchResults.findIndex(
        (item) => item.id === items[currentIndex].id
      );

      // Calculate the next index in searchResults
      const nextIndexInSearch =
        (currentIndexInSearch + 1) % searchResults.length;

      // Find the corresponding item in items array
      const nextItemInSearchResults = searchResults[nextIndexInSearch];

      // Find the index of nextItemInSearchResults in the items array
      const nextIndexInItems = items.findIndex(
        (item) => item.id === nextItemInSearchResults.id
      );

      // Set the currentIndex to the next index in items array
      setCurrentIndex(nextIndexInItems);
    } else {
      // If searchResults is empty, simply increment the index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      console.log("sr equals to 0");
    }
  };

  // Function to handle the previous button click and iterate through the array
  const handlePrevButtonClick = () => {
    if (searchResults.length > 0) {
      console.log("sr >0");
      // Find the index of the current item in searchResults
      const currentIndexInSearch = searchResults.findIndex(
        (item) => item.id === items[currentIndex].id
      );

      // Calculate the next index in searchResults
      const nextIndexInSearch =
        (currentIndexInSearch - 1) % searchResults.length;

      // Find the corresponding item in items array
      const nextItemInSearchResults = searchResults[nextIndexInSearch];

      // Find the index of nextItemInSearchResults in the items array
      const nextIndexInItems = items.findIndex(
        (item) => item.id === nextItemInSearchResults.id
      );

      // Set the currentIndex to the next index in items array
      setCurrentIndex(nextIndexInItems);
    } else {
      // If searchResults is empty, simply increment the index
      if (currentIndex !== 0) {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
      } else {
        setCurrentIndex(items.length - 1);
      }
    }
  };

  // Function to handle the search button clicks
  const handleSearchButtonClick = () => {
    isVisible == false
      ? setIsVisible(true)
      : searchText
      ? setIsVisible(true)
      : setIsVisible(false);

    searchText && setIsVisible2(true);

    optionsIsVisible && setOptionsIsVisible(false);
    // Filter the items based on the search text or show all if no text
    const results = searchText
      ? items.filter(
          (item) =>
            item.quote.toLowerCase().includes(searchText.toLowerCase()) ||
            item.author.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];
    console.log("results length:");
    console.log(results.length);
    console.log("search results length1: ");
    console.log(searchResults.length);

    setSearchResults(results);
    console.log("search results length2: ");
    console.log(searchResults.length);

    setOptionsBoxText("Option");
    !searchText && setIsVisible2(false);

    // !searchText && setOptionsBoxText("ALL");
  };

  // Function to handle the list button click. It also acts as a clear search button
  const handleListButtonClick = (id: number) => {
    setCurrentIndex(id);
    setIsVisible2(false);
  };

  // Function to handle the filter button click. Displays the option button
  const handleFilterButtonClick = () => {
    console.log("filter button");
    isVisible && setIsVisible(false);
    !optionsIsVisible ? setOptionsIsVisible(true) : setOptionsIsVisible(false);
    optionsListIsVisible && setOptionsListIsVisible(false);
  };

  // Function to handle the options button click. Displays the list of options
  const handleOptionsButtonClick = () => {
    console.log("options button");
    !optionsListIsVisible
      ? setOptionsListIsVisible(true)
      : setOptionsListIsVisible(false);
  };

  // Function to handle the All button click. Displays everything.
  const handleAllButtonClick = () => {
    console.log("ALL button");
    setOptionsListIsVisible(false);
    const allResults = items;
    setSearchResults(allResults);
    setOptionsBoxText("ALL");
    console.log(allResults);
    setIsVisible2(true);
  };

  // Function to handle the books button click. Displays all the books.
  const handleBooksButtonClick = () => {
    console.log("Books button");
    setOptionsListIsVisible(false);
    const bookResults = items.filter((item) => item.category === "Book");
    setSearchResults(bookResults);
    setOptionsBoxText("Book");
    setIsVisible2(true);
  };

  // Function to handle the quotes button click. Displays all the quotes.
  const handleQuotesButtonClick = () => {
    console.log("Quotes button");
    setOptionsListIsVisible(false);
    const quoteResults = items.filter((item) => item.category === "Quote");
    setSearchResults(quoteResults);
    setOptionsBoxText("Quote");
    setIsVisible2(true);
  };

  // Function to handle the scriptures button click. Displays all the scriptures.
  const handleScripturesButtonClick = () => {
    console.log("Scriptures button");
    setOptionsListIsVisible(false);
    setOptionsBoxText("Scripture");
    const scriptureResults = items.filter((item) => item.category === "Bible");
    setSearchResults(scriptureResults);
    setIsVisible2(true);
    //     const scriptureResults = items.filter((item) => item.category === "Bible");
    // setSearchResults(scriptureResults);
  };

  // Function to handle Enter key press in the input field
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      handleSearchButtonClick();
    }
  };

  /* New Additions */
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);

  // Function to toggle display of input field
  const toggleDisplay2 = () => {
    setIsOpen2(true);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="bg-dark-brown flex flex-col items-center justify-center min-h-screen">
        <AlertModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <AlertModal2 isOpen2={isOpen2} onClose={() => setIsOpen2(false)} />
        <div className="whitespace-nowrap text-[4.5vw] md:text-[3.15vw] lg:text-[2.25vw] text-light-cyans tracking-normal select-none mb-[2.5vw] flex flex-row w-[85vw] md:w-[75vw] lg:w-[80vw]">
          <div className="sborder-2 flex flex-row sml-[36%] md:sml-[39%] lg:sml-[43%] w-[100%] justify-between items-center">
            {/* Toggle Switch */}
            <div
              className="invisible lg:visible text-[16px] xl"
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`group relative flex w-14 h-8 xl:w-16 xl:h-8 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10 ${
                  enabled ? "shadow-[0_0_8px_2px_rgba(255,254,237,0.5)]" : ""
                }`}
              >
                <p className="absolute text-white mix-blend-difference">Quiz</p>

                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full transition duration-200 ease-in-out group-data-[checked]:translate-x-6 h-6 w-6 xl:w-8  ${
                    enabled ? "bg-white/80" : "bg-white/40"
                  }`}
                />
              </Switch>
            </div>
            <div
              className="xl:underline underline-offset-4 tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] sborder-2 flex flex-col justify-center"
              data-aos="zoom-out"
              data-aos-duration="1200"
            >
              TTG 2025
            </div>
            {/* Search input and button */}
            <div className="flex flex-row gap-[2vw] justify-between pl-[2vw] sborder-2 items-center h-full">
              {isVisible && (
                <div className="" data-aos="zoom-in" data-aos-duration="700">
                  <input
                    id="signUp"
                    type="text"
                    ref={inputRef}
                    placeholder="Search..."
                    value={searchText}
                    onKeyDown={handleInputKeyPress}
                    className="w-[100%] xl:h-[90%] max-h-[35px] text-black px-[1.2vw] nxl:px-[0.8vw] pb-[0.2vw] nxl:pb-[0.4vw] nxl:pt-[0.3vw] rounded-md"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              )}
              {optionsIsVisible && (
                <div className="relative text-left ">
                  <div className="w-[100%]">
                    <div
                      className=""
                      data-aos="zoom-in"
                      data-aos-duration="700"
                    >
                      <button
                        onClick={handleOptionsButtonClick}
                        className="flex flex-row w-full items-center gap-x-1.5 rounded-md bg-white gap-[2vw] px-[1.2vw] py-[1.5vw] md:py-[0.8vw] lg:py-[0.4vw] xl:py-[0.8vw] nxl:px-3 nxl:py-2 nxl:text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 w-[100%] text-[2.8vw] md:text-[12px] lg:text-[14px] max-h-[35px]"
                      >
                        <div className="borsder-2">
                          {optionsBoxText === "ALL"
                            ? optionsBoxText
                            : optionsBoxText + "s"}
                        </div>
                        <FaChevronDown
                          className="-msr-1  text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>{" "}
                  {optionsListIsVisible && (
                    <div
                      className="absolute right-0 mt-2.5 md:mt-[2.1vw] lg:mt-[1.8vw] min-w-[25vw] lg:min-w-[20vw] xl:min-w-[15vw] rounded-lg bg-white leading-snug nxl:leading-tight text-[5.5vw] md:text-[17px] lg:text-[21px] nxl:text-[24px] xl:text-[26px] text-[#5e5d64] z-30 shadow-2xl border-2  "
                      data-aos="zoom-in"
                      data-aos-duration="700"
                    >
                      <div className="border-t2 hover:text-light-cyans hover:bg-dark-brown/80 hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleAllButtonClick}
                          className=" w-full"
                        >
                          All
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-light-cyans hover:bg-dark-brown/80 hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleBooksButtonClick}
                          className="w-full"
                        >
                          Books
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-light-cyans hover:bg-dark-brown/80 hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleQuotesButtonClick}
                          className=" w-full "
                        >
                          Quotes
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-light-cyans hover:bg-dark-brown/80 hover:rounded-md border-light-cyans text-[4.8vw] md:text-[17px] lg:text-[19px] nxl:text-[24px] xl:text-[26px]">
                        <button
                          onClick={handleScripturesButtonClick}
                          className="w-full "
                        >
                          Scriptures
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div
                className="border-2s flex "
                data-aos="zoom-out"
                data-aos-duration="1200"
              >
                <button
                  className="h-[100%] hover:scale-[1.08] transition ease-in-out duration-500 delay-10"
                  onClick={handleSearchButtonClick}
                >
                  <IoMdSearch
                    color="hsl(332, 80%, 92%)"
                    title="Search for any Book, Quote or Scripture"
                  />
                </button>
              </div>
              <div
                className="border-2s flex "
                data-aos="zoom-out"
                data-aos-duration="1200"
              >
                <button
                  className="h-[100%] hover:scale-[1.08] transition ease-in-out duration-500 delay-10"
                  onClick={handleFilterButtonClick}
                >
                  <RiFilter2Line
                    color="hsl(332, 80%, 92%)"
                    title="Sort by Books, Quotes or Scriptures"
                  />
                </button>
              </div>
              <div
                className="absolute top-4 right-6 lg:hidden text-[15px]"
                data-aos="zoom-in"
                data-aos-duration="700"
              >
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`group relative flex w-12 h-6 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10 ${
                    enabled ? "shadow-[0_0_8px_2px_rgba(255,254,237,0.5)]" : ""
                  }`}
                >
                  <p className="absolute translate-y-[-4px] text-white mix-blend-difference">
                    Quiz
                  </p>

                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full transition duration-200 ease-in-out group-data-[checked]:translate-x-6 h-4 w-4 ${
                      enabled ? "bg-white/80" : "bg-white/40"
                    }`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mb-[5vw] bg-light-brown w-[85vw] md:w-[75vw] lg:w-[80vw] mx-[7.5vw] md:mx-[12.5vw] rounded-[1.8vw] flex flex-col items-center justify-center px-[4vw] md:px-[2.8vw] lg:px-[2vw] pt-[6vw] md:pt-[19px] nxl:pt-[35px] text-[5.5vw] md:text-[17px] lg:text-[21px] nxl:text-[28px] xl:text-[37px] leading-snug lg:leading-normal nxl:leading-snug"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          {" "}
          {/* <TextAnalyzer /> */}
          <div className="font-manrope mb-[6vw] md:mb-[18px] nxl:mb-[30px] xl:mb-[35px]  text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none">
            <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[21.5vw] md:w-[20.5vw] lg:w-[26.7vw] border-light-cyans"></div>
              <div>
                {/* Change this part to display the category */}
                {optionsBoxText === "ALL" || optionsBoxText === "Option"
                  ? items[currentIndex].category.toUpperCase()
                  : optionsBoxText.toUpperCase()}
                {/* {optionsBoxText === "ALL" || optionsBoxText === "Option"
                ? "ADVICE"
                : optionsBoxText.toUpperCase()} */}
              </div>

              <div className="text-mid-pink underline underline-offset-4 tracking-wider decoration-light-cyans/70">
                #{items[currentIndex].id}
              </div>
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[21.5vw] md:w-[20.3vw] lg:w-[26.7vw] border-mid-pink"></div>
            </div>
          </div>
          {/* Display quotes/all results */}
          {(searchResults.length == 0 || isVisible2 == false) && (
            <div
              className="scroll pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.04vw] text-light-cyans text-center selection:bg-light-cyans selection:text-black overflow-y-auto max-h-[28.8vh] "
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <div>{items[currentIndex].quote}</div>
            </div>
          )}
          {/* Display search results */}
          {isVisible2 == true && searchResults.length !== 0 && (
            <div
              className="border-2 absoluste overflow-x-hidden overflow-y-scroll w-full scroll rounded-md bg-white text-dark-grayish-blues z-20 scroll pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.04vw]  text-center selection:text-black selection:bg-dark-grayish-blues max-h-[28.8vh] text-[5.5vw] md:text-[17px] lg:texts-[21px] nxl:text-[22px] xl:text-[25px]"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <h2>Search Results:</h2>
              <ul className="list-decimal list-inside flex flex-col ">
                {searchResults.map((result) => (
                  <button
                    onClick={() => handleListButtonClick(result.id)}
                    className="border-t-2 border-light-cyans w-[100%] text-start hover:text-light-cyans hover:bg-dark-brown/80 hover:rounded-md transition ease-in-out"
                  >
                    <li
                      className="whitespace-nowrap text-ellipsis overflow-hidden "
                      key={result.id}
                    >
                      {optionsBoxText === "ALL" || optionsBoxText === "Option"
                        ? result.quote
                        : result.author + " - " + result.quote}
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          )}
          <div
            className="flex self-end mr-[1.5vw] md:mr-[4.8vw] lg:mr-[3.3vw] select-none sborder-2"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="border-t-[0.2vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] w-[10vw] md:w-[7vw] lg:w-[5vw] border-mid-pink mr-[1.5vw] md:mr-[1vw] "></div>
            {/* Conditionally Blurred Author Name */}
            <div
              className={`text-light-cyans text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] underline underline-offset-4 tracking-wider decoration-mid-pink/70 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 ${
                enabled ? "blur-md" : ""
              }`}
            >
              <a
                href={items[currentIndex].url}
                target="_blank"
                title={items[currentIndex].author}
              >
                {items[currentIndex].author}
              </a>
            </div>
          </div>
          <div className="relative top-[5vw] md:top-[3.9vw] lg:top-[2.5vw] select-none flex flex-row gap-[3.5vw] lg:gap-[2vw]">
            <div
              className="hover:scale-[1.08] transition ease-in-out duration-500 delay-10"
              title="Previous"
            >
              <button
                className="bg-mid-pink w-[12vw] md:w-[7.8vw] lg:w-[5vw] h-[12vw] md:h-[7.8vw] lg:h-[5vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-mid-pink cursor-pointer"
                onClick={handlePrevButtonClick}
              >
                <MdSkipPrevious />
              </button>
            </div>
            <div
              className="hover:scale-[1.08] transition ease-in-out duration-500 delay-10"
              title="Next"
            >
              <button
                className="bg-mid-pink w-[12vw] md:w-[7.8vw] lg:w-[5vw] h-[12vw] md:h-[7.8vw] lg:h-[5vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-mid-pink cursor-pointer"
                onClick={handleNextButtonClick}
              >
                <MdSkipNext />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 ml-[2vw] pb-[1.2vw] text-light-cyans underline-offset-2 nxl:underline-offset-4 md:pb-[1.2vw] text-[2vw] nsm:text-[1.2vw] xl:text-[1vw] select-none hover:scale-[1.04] transition ease-in-out duration-500 delay-10">
          © 2024{" "}
          <a
            href="https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/"
            target="_blank"
            className="underline text-mid-pink tracking-wide"
            title="About Rerel'Oluwa Tooki"
          >
            Rerel'Oluwa Tooki
          </a>
        </div>
        <div className="fixed bottom-0 right-0 mr-[2vw] pb-[1.2vw] text-light-cyans md:underline-offset-2 nxl:underline-offset-4 md:pb-[1.2vw] text-[2vw] nsm:text-[1.2vw] xl:text-[1vw] select-none flex sborder-4 gap-4">
          <div className="cursor-pointer hover:scale-[1.08] transition ease-in-out duration-500 delay-10">
            {" "}
            <a
              href="https://forms.gle/idXSFn5NGUbiFGha9"
              target="_blank"
              title="My FYP Form"
              className=" "
            >
              {" "}
              <HiNewspaper
                fill="hsl(332, 80%, 92%)"
                className="w-[6vw] h-[6vw] max-w-[25px] max-h-[25px]"
                title="Please Fill This Form"
              />
            </a>
          </div>
          {displayTextArea && (
            <div className="flex flex-col md:flex-row gap-[10px] md:gap-auto">
              <textarea
                placeholder="Got A Message?"
                className="overflow-y-auto border border-gray-400 px-2 pt-[1.5%] xl:pt-[1%] w-[40vw] max-w-[330px] h-auto max-h-[25px] rounded-md text-black text-[10px] "
                value={feedbackMessage}
                name="message"
                onChange={(e) => setFeedbackMessage(e.target.value)}
              />
              <div className="self-end md:self-auto">
                <button
                  onClick={sendFeedbackEmail}
                  className="ml-2 px-4 py-[2px] bg-mid-pink sborder-4 stext-light-cyans h-full max-h-[25px] text-black rounded-sm md:rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          <div
            onClick={toggleDisplay2}
            className="cursor-pointer hover:scale-[1.08] transition ease-in-out duration-500 delay-10"
          >
            <MdApps
              fill="hsl(332, 80%, 92%)"
              className="w-[6vw] h-[6vw] max-w-[25px] max-h-[25px]"
            />
          </div>
          {!displayTextArea && (
            <div
              onClick={toggleDisplay}
              className="cursor-pointer hover:scale-[1.08] transition ease-in-out duration-500 delay-10"
            >
              <MdOutlineQuestionAnswer
                fill="hsl(332, 80%, 92%)"
                className="w-[6vw] h-[6vw] max-w-[25px] max-h-[25px]"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TMCCard;
