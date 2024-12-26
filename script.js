const questions = [
  {
    number: 1,
    question: "The plant leaves began to __________ under the harsh sun, lacking water.",
    options: ["flourish", "shrivel", "sprout", "thrive"],
    answer: 1,
    explanation: "答案是 'shrivel'，表示由于缺水导致植物干枯和皱缩，符合题意。",
  },
  {
    number: 2,
    question: "The new policy aims to ensure that all employees can __________ the changes in the industry and remain competitive.",
    options: ["weather", "avoid", "adapt", "adjust"],
    answer: 0,
    explanation: "答案是 'weather'，表示经受住或应对挑战，符合保持竞争力的目标。",
  },
  {
    number: 3,
    question: "Completing the project brought a __________ sense of achievement to the team, as they celebrated their hard work and the successful outcome of their efforts.",
    options: ["frustrating", "gratifying", "disappointing", "anxious"],
    answer: 1,
    explanation: "答案是 'gratifying'，表示令人满足或令人高兴，符合庆祝成功的语境。",
  },
  {
    number: 4,
    question: "She managed to __________ from making a hasty decision, despite the pressure from her colleagues.",
    options: ["indulge", "yield", "submit", "refrain"],
    answer: 3,
    explanation: "答案是 'refrain'，表示克制或避免做某事，符合避免仓促决定的语境。",
  },
  {
    number: 5,
    question: "The peaceful and __________ atmosphere of the countryside provided a welcome respite from the noise and stress of city life.",
    options: ["chaotic", "turbulent", "tranquil", "disturbing"],
    answer: 2,
    explanation: "答案是 'tranquil'，表示宁静或平和，符合乡村与城市喧嚣的对比。",
  },
  {
    number: 6,
    question: "The survivor shared her story of the __________ experience she endured during the conflict, detailing the fear, pain, and resilience that characterized her journey.",
    options: ["harrowing", "blissful", "peaceful", "serene"],
    answer: 0,
    explanation: "答案是 'harrowing'，表示令人痛苦或悲惨的经历，符合故事背景。",
  },
  {
    number: 7,
    question: "Despite the numerous challenges she faced, she was always looking forward and __________ to achieve her dreams, drawing inspiration from her inner strength and resilience.",
    options: ["aspired", "lamented", "hesitated", "procrastinated"],
    answer: 0,
    explanation: "答案是 'aspired'，表示有志于或渴望，实现梦想的积极态度。",
  },
  {
    number: 8,
    question: "The new policy aims to __________ all aspects of employee well-being, from physical health to mental and emotional support, ensuring a comprehensive approach to workplace wellness.",
    options: ["ignore", "encompass", "neglect", "bypass"],
    answer: 1,
    explanation: "答案是 'encompass'，表示涵盖所有方面，符合全面支持员工的语境。",
  },
  {
    number: 9,
    question: "Despite facing numerous __________, she never lost sight of her goals and continued to strive towards her dreams, even when the path seemed insurmountable.",
    options: ["opportunities", "adversities", "rewards", "benefits"],
    answer: 1,
    explanation: "答案是 'adversities'，表示困难或逆境，符合克服障碍的语境。",
  },
  {
    number: 10,
    question: "The intense and prolonged legal battle was an emotional __________ for the family, testing their resilience and unity to the limits.",
    options: ["triumph", "ordeal", "celebration", "festivity"],
    answer: 1,
    explanation: "答案是 'ordeal'，表示艰难或痛苦的经历，符合家庭所承受的考验。",
  },
  {
    number: 11,
    question: "The beauty of the moment was almost __________, beyond words, as the sunset painted the sky in vibrant hues and the gentle breeze whispered through the trees.",
    options: ["ineffable", "articulate", "eloquent", "resentful"],
    answer: 0,
    explanation: "答案是 'ineffable'，表示无法用语言表达，符合描写美丽瞬间的语境。",
  },
  {
    number: 12,
    question: "During his illness, he often experienced vivid __________ that were difficult to distinguish from reality, causing confusion and distress for both him and his caregivers.",
    options: ["dreams", "nightmares", "visions", "hallucinations"],
    answer: 3,
    explanation: "答案是 'hallucinations'，表示幻觉，与难以区分现实的描述一致。",
  },
  {
    number: 13,
    question: "Safety is the __________ concern when planning any event, whether it's a small gathering or a large-scale festival, ensuring that all participants are protected from potential hazards.",
    options: ["minor", "negligible", "paramount", "trivial"],
    answer: 2,
    explanation: "答案是 'paramount'，表示至关重要，符合以安全为首要的规划。",
  },
  {
    number: 14,
    question: "He was so __________ in his work that he didn't notice the time passing by.",
    options: ["distracted", "focused", "engrossed", "concentrated"],
    answer: 2,
    explanation: "答案是 'engrossed'，表示全神贯注，符合未注意时间流逝的语境。",
  },
  {
    number: 15,
    question: "After the storm, the community worked together to deal with the __________ left behind, including fallen trees, damaged homes, and disrupted infrastructure.",
    options: ["progress", "aftermath", "prosperity", "revival"],
    answer: 1,
    explanation: "答案是 'aftermath'，表示灾害后果，符合灾后恢复工作的语境。",
  },
  {
    number: 16,
    question: "She dedicated herself to advancing knowledge in her chosen academic __________, publishing several groundbreaking papers.",
    options: ["region", "territory", "scope", "province"],
    answer: 3,
    explanation: "答案是 'province'，表示学术领域，符合她专业研究的描述。",
  },
  {
    number: 17,
    question: "Throughout history, people have faced numerous __________ and challenges, yet many have found the strength to overcome them.",
    options: ["tribulations", "conveniences", "amenities", "luxuries"],
    answer: 0,
    explanation: "答案是 'tribulations'，表示磨难，与人们克服困难的历史一致。",
  },
  {
    number: 18,
    question: "The __________ provided insightful analysis of the game, highlighting key moments and player performances.",
    options: ["reporter", "analyst", "commentator", "reviewer"],
    answer: 2,
    explanation: "答案是 'commentator'，表示评论员，符合比赛实时分析的角色。",
  },
  {
    number: 19,
    question: "He tried to focus on his work, but his mind was __________ with thoughts of what had happened.",
    options: ["preoccupied", "disengaged", "indifferent", "apathetic"],
    answer: 0,
    explanation: "答案是 'preoccupied'，表示心神不宁，符合无法专注工作的语境。",
  },
  {
    number: 20,
    question: "The accident caused significant __________ for everyone involved, leaving deep emotional scars.",
    options: ["elation", "trauma", "therapy", "jubilation"],
    answer: 1,
    explanation: "答案是 'trauma'，表示创伤，符合事故造成情感伤害的描述。",
  },
  {
    number: 21,
    question: "The new product launch created a real __________ among consumers, generating widespread interest and media coverage.",
    options: ["boycott", "promotion", "sensation", "indignation"],
    answer: 2,
    explanation: "答案是 'sensation'，表示轰动效应，符合引发广泛关注和兴趣的语境。",
  },
  {
    number: 22,
    question: "The professor’s lecture was highly __________, requiring students to engage in deep and critical thinking about the complex concepts presented.",
    options: ["resourceful", "learned", "rational", "cerebral"],
    answer: 3,
    explanation: "答案是 'cerebral'，表示理性的或需要深度思考的，符合课程要求的复杂性。",
  },
  {
    number: 23,
    question: "The company’s latest __________ involves launching a new line of eco-friendly products, which is expected to boost its market share and reputation.",
    options: ["adventure", "projection", "undertaking", "mission"],
    answer: 2,
    explanation: "答案是 'undertaking'，表示一项任务或事业，符合推出新产品的语境。",
  },
  {
    number: 24,
    question: "Despite the high __________ involved in the project, including financial risks and potential reputational damage, the team remained confident and focused on their goal of delivering a groundbreaking product.",
    options: ["destruction", "stakes", "odds", "hazards"],
    answer: 1,
    explanation: "答案是 'stakes'，表示风险或利益相关性，符合项目涉及高风险的语境。",
  },
  {
    number: 25,
    question: "The relentless pursuit of perfection, involving countless rounds of testing and refinement, led to a product that was virtually __________ and met the highest standards of quality.",
    options: ["spotless", "flawless", "complete", "intact"],
    answer: 1,
    explanation: "答案是 'flawless'，表示无瑕疵的，符合高质量产品的描述。",
  },
  {
    number: 26,
    question: "The device was a technological __________, designed with innovative features to solve a specific problem in a unique and efficient way, setting it apart from existing solutions.",
    options: ["creature", "structure", "contrivance", "procedure"],
    answer: 2,
    explanation: "答案是 'contrivance'，表示精巧装置，符合描述设备创新性的语境。",
  },
  {
    number: 27,
    question: "Her __________ beauty, enhanced by her natural grace and elegance, caught everyone's attention at the event, making her the center of admiration and envy.",
    options: ["magnificent", "natural", "fetching", "elegant"],
    answer: 2,
    explanation: "答案是 'fetching'，表示迷人或吸引人的，符合引人注目的语境。",
  },
  {
    number: 28,
    question: "The old building began to __________ over time, its once grand and sturdy structure now reduced to ruins due to years of neglect and exposure to the elements.",
    options: ["compose", "contaminate", "disintegrate", "decline"],
    answer: 2,
    explanation: "答案是 'disintegrate'，表示分解或崩溃，符合描述建筑破败的语境。",
  },
  {
    number: 29,
    question: "The company’s marketing campaign generated a lot of __________, but despite the extensive media coverage and promotional activities, it failed to translate into increased sales.",
    options: ["hype", "propaganda", "promotion", "sentiment"],
    answer: 0,
    explanation: "答案是 'hype'，表示夸大的宣传，与未能带来销售增长的语境一致。",
  },
  {
    number: 30,
    question: "Despite the product’s many intrinsic qualities, such as durability and functionality, its __________ value was not fully recognized by consumers, leading to lower market penetration.",
    options: ["external", "extrinsic", "apparent", "outward"],
    answer: 1,
    explanation: "答案是 'extrinsic'，表示外在价值，符合产品未被充分认识的描述。",
  },
  {
    number: 31,
    question: "The basic design of the machine was quite __________, using simple and straightforward components, but it proved to be highly effective and reliable in practical applications.",
    options: ["simple", "primary", "minimal", "rudimentary"],
    answer: 3,
    explanation: "答案是 'rudimentary'，表示基本的或初级的，符合设计简单但有效的语境。",
  },
  {
    number: 32,
    question: "She was completely __________ by the unexpected question during the interview, unable to form a coherent response and feeling thoroughly unprepared for the challenge.",
    options: ["composed", "flummoxed", "poised", "serene"],
    answer: 1,
    explanation: "答案是 'flummoxed'，表示困惑或不知所措，符合面试意外问题的语境。",
  },
  {
    number: 33,
    question: "The company’s __________ efforts to improve customer service have resulted in a significant increase in customer satisfaction and loyalty.",
    options: ["active", "intermittent", "occasional", "relentless"],
    answer: 3,
    explanation: "答案是 'relentless'，表示不懈的，与持续改善服务的语境一致。",
  },
  {
    number: 34,
    question: "The artist's work commanded great __________ from the art community, inspiring many young painters and critics alike with its profound depth and artistic brilliance.",
    options: ["disrespect", "reverence", "despise", "regard"],
    answer: 1,
    explanation: "答案是 'reverence'，表示尊敬，与艺术作品受到高度赞扬的语境一致。",
  },
  {
    number: 35,
    question: "She was unexpectedly caught by a colleague while she was __________ on her boss's private phone conversation, which was taking place through an open door in the office.",
    options: ["eavesdropping", "listened", "overhearing", "intercepted"],
    answer: 0,
    explanation: "答案是 'eavesdropping'，表示偷听，与情境中秘密监听对话的行为一致。",
  },
  {
    number: 36,
    question: "The company’s financial __________ allowed it to survive the economic downturn.",
    options: ["perfection", "immunity", "incredibility", "invulnerability"],
    answer: 3,
    explanation: "答案是 'invulnerability'，表示不受影响，与经济低迷中生存的能力一致。",
  },
  {
    number: 37,
    question: "She spent hours __________ over the details of the contract, meticulously ensuring that every clause was accurate and fair to protect her interests and those of her clients.",
    options: ["inspecting", "examining", "poring", "studying"],
    answer: 2,
    explanation: "答案是 'poring'，表示专注地阅读，与对合同细节的仔细审查一致。",
  },
  {
    number: 38,
    question: "The __________ nature of the problem, involving complex interactions between multiple variables, made it difficult for the researchers to find a clear and effective solution.",
    options: ["detrimental", "abstruse", "mysterious", "critical"],
    answer: 1,
    explanation: "答案是 'abstruse'，表示难以理解的，与问题复杂性的描述一致。",
  },
  {
    number: 39,
    question: "To stay ahead in the competitive market, the company must __________ new strategies and technologies to enhance its products and services.",
    options: ["avoid", "weather", "implement", "navigate"],
    answer: 2,
    explanation: "答案是 'implement'，表示实施，与采取新策略的语境一致。",
  },
  {
    number: 40,
    question: "His public __________, carefully crafted to project a strong and charismatic image, was very different from his private self, leading many to question the authenticity of his public persona.",
    options: ["persona", "appearance", "face", "guise"],
    answer: 0,
    explanation: "答案是 'persona'，表示公众形象，与情境中形象与私下不一致的描述相符。",
  }

];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const nextButton = document.getElementById("next-button");
  const progressText = document.getElementById("progress");
  const progressBar = document.getElementById("progress-bar");

  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <h2>Question ${question.number}: ${question.question}</h2>
      ${question.options
        .map(
          (option, index) =>
            `<button class="option-button" data-index="${index}">${option}</button>`
        )
        .join("")}
      <div id="explanation" class="hidden"></div>
    `;
    document.querySelectorAll(".option-button").forEach((button) =>
      button.addEventListener("click", handleAnswer)
    );
    nextButton.disabled = true;
  }

  function handleAnswer(e) {
    const selectedIndex = parseInt(e.target.dataset.index);
    const question = questions[currentQuestionIndex];
    document.querySelectorAll(".option-button").forEach((button, index) => {
      if (index === question.answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
      }
      button.disabled = true;
    });
    if (selectedIndex === question.answer) {
      score++;
    }
    const explanationDiv = document.getElementById("explanation");
    explanationDiv.classList.remove("hidden");
    explanationDiv.innerHTML = `<p><strong>解析：</strong>${question.explanation}</p>`;
    nextButton.disabled = false;
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateProgressBar();
      loadQuestion();
      progressText.textContent = `进度: ${currentQuestionIndex + 1}/${questions.length}`;
    } else {
      questionContainer.innerHTML = `<h2>答题完成！</h2><p>正确率: ${(score / questions.length) * 100}%</p>`;
      nextButton.style.display = "none";
    }
  });

  function updateProgressBar() {
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  }

  loadQuestion();
  updateProgressBar();
  progressText.textContent = `进度: 1/${questions.length}`;
});
