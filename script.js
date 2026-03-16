console.log("Loaded script.js");

// dynamic section list

const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((lesson) => displayLessons(lesson.data));
};

const displayLessons = (lessons) => {
  // console.log(lessons);
  // get the container
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // loop through the lessons and create a card for each lesson
  lessons.forEach((lesson) => {
    console.log(lesson);
    // create a card
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
        <button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary " > <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
    `;
    levelContainer.append(btnDiv);
  });
};

// load the lessons when the page loads
const loadLevelWord = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((content) => displayLevelWords(content.data));
};

// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"

const displayLevelWords = (words) => {
  console.log(words);
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  lessonContainer.className = "";
  if (!words || words.length === 0) {
    console.log("No data found");
    lessonContainer.innerHTML = `
    <div
            class="flex flex-col items-center justify-center font-siliguri space-y-4"
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

  lessonContainer.classList.add(
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "gap-6",
  );

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-2xl shadow-sm text-center p-6 space-y-4">
            <h2 class="text-2xl font-medium">${word.word}</h2>
            <p class="">Meaning/Pronunciation</p>
            <div class="text-3xl font-medium font-siliguri">${word.pronunciation}/${word.meaning}</div>

            <div class="flex justify-between items-center mt-10">
              <button id="" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff50]">
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

loadLesson();
