console.log("Loaded script.js");

// dynamic section list

const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((lesson) => displayLessons(lesson.data));
};

// "id": 102,
// "level_no": 2,
// "lessonName": "Everyday Words"
const displayLessons = (lessons) => {
  // console.log(lessons);
  // get the container
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // loop through the lessons and create a card for each lesson
  lessons.forEach((lesson) => {
    // console.log(lesson);
    // create a card
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
        <button id="lesson-${lesson.level_no}" onClick="loadLevelWord(${lesson.level_no})" class="lesson-btn btn btn-outline btn-primary " > <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
    `;
    levelContainer.append(btnDiv);
  });
};

const removeActive = () => {
  const allBtn = document.querySelectorAll(".lesson-btn");
  allBtn.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
};

// load the lessons when the page loads
const loadLevelWord = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((content) => {
      removeActive();
      const clickBTn = document.getElementById(`lesson-${id}`);
      clickBTn.classList.add("btn-active");
      displayLevelWords(content.data);
    });
};

// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"

const displayLevelWords = (words) => {
  // console.log(words);
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  if (!words || words.length === 0) {
    // console.log("No data found");
    lessonContainer.innerHTML = `
    <div
            class="col-span-full font-siliguri space-y-4"
          >
            <span
              ><i
                class="text-9xl text-gray-400 fa-solid fa-triangle-exclamation"
              ></i
            ></span>
            <p class="font-light">
              এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h2 class="text-4xl font-bold">নেক্সট Lesson এ যান</h2>
          </div>
    `;
    return;
  }

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <h2 class="text-2xl font-medium">${word.word ? word.word : "শব্দ পাওয়া যায় নাই"}</h2>
            <p class="">Meaning/Pronunciation</p>
            <div class="text-3xl font-medium font-siliguri">${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায় নাই"}/${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নাই"}</div>

            <div class="flex justify-between items-center mt-10">
              <button onClick="loadWordDetails(${word.id})" id="" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff50]">
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff50]">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>
    `;
    lessonContainer.appendChild(card);
  });
};

// load word details when click on info button

loadWordDetails = async (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  const res = await fetch(url);
  const wordDetails = await res.json();
  displayWordDetails(wordDetails.data);

  // showModal(
};

// "word": "Eager",
// "meaning": "আগ্রহী",
// "pronunciation": "ইগার",
// "level": 1,
// "sentence": "The kids were eager to open their gifts.",
// "points": 1,
// "partsOfSpeech": "adjective",
// "synonyms": [
// "enthusiastic",
// "excited",
// "keen"
// ],
// "id": 5

displayWordDetails = (wordDetails) => {
  // console.log(wordDetails);
  const detailsBox = document.getElementById("word-details");
  detailsBox.innerHTML = `<div class="">
          <div class="border border-gray-200 rounded-lg space-y-4 p-2.5 mb-5">
            <h2 class="text-3xl font-semibold">
              ${wordDetails.word} (<i class="fa-solid fa-microphone-lines"></i>:${wordDetails.pronunciation})
            </h2>
            <div>
              <h4 class="font-semibold text-xl">Meaning</h4>
              <p>${wordDetails.meaning}</p>
            </div>
            <div>
              <h4 class="font-semibold text-xl">Example</h4>
              <p class="font-light">${wordDetails.sentence}</p>
            </div>
            <div>
              <h4 class="font-light">সমার্থক শব্দ গুলো</h4>
              <ul
                class="flex gap-5 [&>li]:p-2 [&>li]:rounded-lg [&>li]:bg-blue-100 [&>li]:font-light"
              >
              ${wordDetails.synonyms.map((synonym) => `<li>${synonym}</li>`).join("")}
              </ul>
            </div>
          </div>
          <button class="btn btn-primary">Complete Learning</button>
        </div>
  `;
  document.getElementById("word_modal").showModal();
};

loadLesson();
