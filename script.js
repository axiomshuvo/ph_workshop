console.log("Loaded script.js");

// dynamic section list

const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((lesson) => displayLessons(lesson.data));
};

const displayLessons = (lessons) => {
  //   console.log(lessons);
  // get the container
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // loop through the lessons and create a card for each lesson
  lessons.forEach((lesson) => {
    console.log(lesson);
    // create a card
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary " > <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
    `;
    levelContainer.append(btnDiv);
  });
};

loadLesson();
