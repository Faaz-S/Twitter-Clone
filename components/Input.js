import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";

function Input() {
  // Initializes input with empty string and does not persist on refresh
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const addImageToPost = () => {};

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="https://lh3.googleusercontent.com/a/AATXAJwCsuneWAkKlHwMPxOmLNjFACEvbtN8QPwbUsZ-=s96-cc"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      {/* divide-y basically puts the border after every child div so we do not need to repeat it again and again */}
      <div w-full divide-y divide-gray-700>
        <div className={``}>
          <textarea
            value={input}
            rows="2"
            /* This function decides what happens when text input is given. */
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full minn-h-[50px]"
          />
          {/* If selected file is true */}
          {selectedFile && (
            <div className="relative">
              <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                <XIcon className="text-white h-5 " />
              </div>
              <img
                src={selectedFile}
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-2.5">
          <div className="flex items-center">
            {/* We gave the reference of the input field to the icon. This way we can keep the input file element hidden and the choose file option will open automatically when the icon itself is clicked. */}
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />

              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <div className="icon rotate-90 ">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px] " />
            </div>
            {/* setShowEmojis:If true then it shows the emoji panel otherwise it makes it hidden. */}

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px] " />
            </div>
            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
