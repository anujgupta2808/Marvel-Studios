/**
 * Marvel Quiz Page Script
 * Multi-difficulty selection, 20+ questions, dynamic score calculation,
 * explanations, superhero rank assignment, and answer review mode.
 */

document.addEventListener("DOMContentLoaded", () => {
  initQuizPage();
});

function initQuizPage() {
  const startScreen = document.querySelector("#quizStartScreen");
  const playScreen = document.querySelector("#quizPlayScreen");
  const resultScreen = document.querySelector("#quizResultScreen");
  const reviewScreen = document.querySelector("#quizReviewScreen");

  const startBtn = document.querySelector("#startQuizBtn");
  const difficultyButtons = document.querySelectorAll(".quiz-diff-btn");

  const progressBar = document.querySelector("#quizProgressBar");
  const questionCount = document.querySelector("#quizQuestionCount");
  const scoreBadge = document.querySelector("#quizCurrentScore");
  const questionText = document.querySelector("#quizQuestionText");
  const optionsList = document.querySelector("#quizOptionsList");
  const explanationBox = document.querySelector("#quizExplanationBox");
  const nextBtn = document.querySelector("#quizNextBtn");

  const finalScoreEl = document.querySelector("#quizFinalScore");
  const rankTitleEl = document.querySelector("#quizRankTitle");
  const rankDescEl = document.querySelector("#quizRankDesc");
  const retakeBtn = document.querySelector("#retakeQuizBtn");
  const reviewBtn = document.querySelector("#reviewQuizBtn");
  const backToResultsBtn = document.querySelector("#backToResultsBtn");
  const reviewList = document.querySelector("#quizReviewList");

  if (!startScreen || typeof QUIZ_QUESTIONS === "undefined") return;

  let selectedDifficulty = "all";
  let activeQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let userAnswers = []; // records { question, selected, correct, isCorrect }

  // Difficulty selection
  difficultyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      difficultyButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedDifficulty = btn.getAttribute("data-diff");
    });
  });

  // Start quiz
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (selectedDifficulty === "all") {
        activeQuestions = [...QUIZ_QUESTIONS];
      } else {
        activeQuestions = QUIZ_QUESTIONS.filter(
          (q) => q.difficulty === selectedDifficulty
        );
      }

      // Shuffle active questions
      activeQuestions.sort(() => Math.random() - 0.5);

      // Reset states
      currentIndex = 0;
      score = 0;
      userAnswers = [];

      startScreen.style.display = "none";
      resultScreen.style.display = "none";
      reviewScreen.style.display = "none";
      playScreen.style.display = "block";

      renderQuestion();
    });
  }

  function renderQuestion() {
    const q = activeQuestions[currentIndex];
    if (!q) return;

    // Update progress
    const progressPercent = ((currentIndex) / activeQuestions.length) * 100;
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (questionCount) {
      questionCount.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
    }
    if (scoreBadge) {
      scoreBadge.textContent = `Score: ${score}`;
    }

    // Set question text & category badge
    if (questionText) {
      questionText.innerHTML = `
        <span class="section-tag" style="font-size: 0.72rem; padding: 2px 10px; margin-bottom: 0.8rem; display: inline-block;">${q.category}</span><br>
        ${q.question}
      `;
    }

    // Hide explanation & next button until answered
    if (explanationBox) {
      explanationBox.style.display = "none";
      explanationBox.innerHTML = "";
    }
    if (nextBtn) {
      nextBtn.style.display = "none";
    }

    // Render options
    const prefixes = ["A", "B", "C", "D"];
    if (optionsList) {
      optionsList.innerHTML = q.options
        .map(
          (opt, i) => `
          <button class="quiz-option-btn" data-index="${i}">
            <span class="option-prefix">${prefixes[i]}</span>
            <span>${opt}</span>
          </button>
        `
        )
        .join("");

      optionsList.querySelectorAll(".quiz-option-btn").forEach((btn) => {
        btn.addEventListener("click", () => handleSelectOption(btn, q));
      });
    }
  }

  function handleSelectOption(btn, q) {
    const selectedIndex = parseInt(btn.getAttribute("data-index"), 10);
    const isCorrect = selectedIndex === q.answer;

    if (isCorrect) {
      score += 10;
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect");
      // Highlight correct option
      const correctBtn = optionsList.querySelector(
        `.quiz-option-btn[data-index="${q.answer}"]`
      );
      if (correctBtn) correctBtn.classList.add("correct");
    }

    // Record answer
    userAnswers.push({
      question: q.question,
      options: q.options,
      selected: selectedIndex,
      correct: q.answer,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    // Disable all options
    optionsList.querySelectorAll(".quiz-option-btn").forEach((b) => {
      b.disabled = true;
    });

    // Display explanation
    if (explanationBox) {
      explanationBox.innerHTML = `
        <div style="font-weight: 700; color: ${isCorrect ? "#2ECC71" : "#E74C3C"}; margin-bottom: 4px;">
          ${isCorrect ? "✓ Marvel Canon Confirmed!" : "✗ Incorrect Lore"}
        </div>
        <p style="margin: 0; color: #ddd;">${q.explanation}</p>
      `;
      explanationBox.style.display = "block";
    }

    // Show next button
    if (nextBtn) {
      nextBtn.textContent =
        currentIndex + 1 >= activeQuestions.length
          ? "Complete Mission & See Rank →"
          : "Next Question →";
      nextBtn.style.display = "inline-flex";
    }
  }

  // Next question handler
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex < activeQuestions.length) {
        renderQuestion();
      } else {
        showResults();
      }
    });
  }

  function showResults() {
    playScreen.style.display = "none";
    resultScreen.style.display = "block";

    if (progressBar) progressBar.style.width = "100%";

    const maxScore = activeQuestions.length * 10;
    const percentage = Math.round((score / maxScore) * 100);

    if (finalScoreEl) {
      finalScoreEl.textContent = `${percentage}%`;
    }

    let rank = "Civilian";
    let desc = "You're just getting introduced to the multiverse. Time to rewatch Phase 1!";

    if (percentage >= 90) {
      rank = "Sorcerer Supreme / Living Tribunal";
      desc = "Supreme Omniscience! You possess mastery over every branch of the Sacred Timeline and know the MCU down to the nanosecond.";
    } else if (percentage >= 75) {
      rank = "Earth's Mightiest Avenger";
      desc = "Outstanding performance! Tony Stark and Steve Rogers would proudly fight alongside you in the Battle of Earth.";
    } else if (percentage >= 50) {
      rank = "S.H.I.E.L.D. Senior Agent";
      desc = "Level 7 Clearance achieved. You know your way through helicarriers and quantum tunnels with confidence.";
    } else if (percentage >= 25) {
      rank = "Rookie Recruit";
      desc = "Decent effort! You survived the snap, but the multiverse requires deeper reconnaissance.";
    }

    if (rankTitleEl) rankTitleEl.textContent = rank;
    if (rankDescEl) rankDescEl.textContent = desc;
  }

  // Retake Quiz
  if (retakeBtn) {
    retakeBtn.addEventListener("click", () => {
      resultScreen.style.display = "none";
      startScreen.style.display = "block";
    });
  }

  // Review Answers
  if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
      resultScreen.style.display = "none";
      reviewScreen.style.display = "block";

      if (reviewList) {
        reviewList.innerHTML = userAnswers
          .map(
            (ans, idx) => `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid ${ans.isCorrect ? "rgba(46, 204, 113, 0.4)" : "rgba(231, 76, 60, 0.4)"}; border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.2rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: 700; color: #fff;">Q${idx + 1}: ${ans.question}</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: ${ans.isCorrect ? "#2ECC71" : "#E74C3C"};">
                  ${ans.isCorrect ? "CORRECT (+10)" : "INCORRECT"}
                </span>
              </div>
              <div style="font-size: 0.9rem; color: #bbb; margin-bottom: 6px;">
                Your Answer: <strong style="color: ${ans.isCorrect ? "#2ECC71" : "#E74C3C"};">${ans.options[ans.selected] || "None"}</strong>
              </div>
              ${
                !ans.isCorrect
                  ? `<div style="font-size: 0.9rem; color: #2ECC71; margin-bottom: 6px;">Correct Answer: <strong>${ans.options[ans.correct]}</strong></div>`
                  : ""
              }
              <div style="font-size: 0.86rem; color: #999; border-top: 1px solid var(--border-subtle); padding-top: 6px; margin-top: 6px;">
                💡 <em>${ans.explanation}</em>
              </div>
            </div>
          `
          )
          .join("");
      }
    });
  }

  if (backToResultsBtn) {
    backToResultsBtn.addEventListener("click", () => {
      reviewScreen.style.display = "none";
      resultScreen.style.display = "block";
    });
  }
}

