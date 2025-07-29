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
      quote: "“For TTG 2025. I'm still updating for now.”",
      author: "Rerel'Oluwa Tooki",
      category: "Quote",
      url: "https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/",
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
