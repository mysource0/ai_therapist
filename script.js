document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const chatWindow = document.getElementById("chatWindow");
    const menuIcon = document.getElementById("menuIcon");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    const micIcon = document.getElementById("micIcon");

    // Problem-Solution Dataset
    const problems = [
        {
            main: "Anxiety",
            subs: [
              "I’m overwhelmed with worry that won’t turn off.",
              "My chest feels tight, and I can’t catch my breath.",
              "I’m jittery and feel like danger is lurking around every corner.",
              "My mind’s racing with thoughts I can’t control.",
              "I’m restless and can’t calm down no matter what I do."
            ],
            solutions: [
              "Practice deep breathing & mindfulness.",
              "Identify triggers and challenge negative thoughts.",
              "Engage in physical exercise."
            ]
          },
          {
            main: "Depression",
            subs: [
              "I’m hollow inside, like nothing has any point.",
              "I’m too tired to get out of bed or care about anything.",
              "I’m trapped in a dark hole with no way up.",
              "I’m crying all the time and don’t even know why.",
              "I’m cut off from the world, like I don’t belong anywhere."
            ],
            solutions: [
              "Maintain a daily routine.",
              "Stay socially connected.",
              "Seek therapy and consider medication if needed."
            ]
          },
          {
            main: "Stress",
            subs: [
              "I’m drowning under the weight of everything I have to do.",
              "I’m stretched thin trying to keep it all together.",
              "My brain’s buzzing, and I can’t think straight.",
              "I’m wound up tight and can’t loosen up.",
              "I’m one step away from breaking under the pressure."
            ],
            solutions: [
              "Use relaxation techniques (meditation, yoga).",
              "Organize tasks and set realistic goals.",
              "Take regular breaks and engage in hobbies."
            ]
          },
          {
            main: "Panic Attacks",
            subs: [
              "I’m hit with this sudden terror that I’m about to die.",
              "My heart’s pounding, and I can’t get enough air.",
              "I’m dizzy and feel like I’m floating outside myself.",
              "I’m shaking and sweating like I’m in a nightmare.",
              "I’m gripped by this urge to run away from everything."
            ],
            solutions: [
              "Use the 5-4-3-2-1 grounding technique.",
              "Practice slow, controlled breathing.",
              "Identify and address anxiety triggers."
            ]
          },
          {
            main: "Social Anxiety",
            subs: [
              "I’m terrified of people judging me when I’m around them.",
              "I’m sweating and stumbling over words when I talk.",
              "I’m awkward and can’t look anyone in the eye.",
              "I’m paranoid about what everyone thinks of me.",
              "I’m so uncomfortable I just want to hide from people."
            ],
            solutions: [
              "Gradually expose yourself to social situations.",
              "Challenge negative self-talk.",
              "Practice relaxation techniques before events."
            ]
          },
          {
            main: "Post-Traumatic Stress Disorder (PTSD)",
            subs: [
              "I’m reliving that awful moment like it’s happening now.",
              "I’m dodging anything that reminds me of what happened.",
              "I’m jumpy and on high alert all the time.",
              "I’m waking up from nightmares soaked in sweat.",
              "I’m numb and feel like I’m not really here."
            ],
            solutions: [
              "Seek trauma-focused therapy (CBT, EMDR).",
              "Use grounding techniques.",
              "Establish a strong support system."
            ]
          },
          {
            main: "Obsessive-Compulsive Disorder (OCD)",
            subs: [
              "I’m stuck with these thoughts I can’t shake off.",
              "I’m doing the same things over and over to feel okay.",
              "I’m fixated on keeping everything perfectly in order.",
              "I’m checking stuff nonstop to make sure it’s right.",
              "I’m trapped in routines that take over my day."
            ],
            solutions: [
              "Challenge intrusive thoughts.",
              "Gradually reduce compulsive behaviors (exposure therapy).",
              "Seek cognitive-behavioral therapy (CBT)."
            ]
          },
          {
            main: "Bipolar Disorder",
            subs: [
              "I’m buzzing with energy and feel unstoppable.",
              "I’m crashing hard and can’t get out of this slump.",
              "My moods flip like a switch, and I can’t predict it.",
              "I’m reckless and doing things I wouldn’t normally do.",
              "I’m spiraling and can’t find steady ground."
            ],
            solutions: [
              "Follow a stable routine.",
              "Stick to prescribed medication.",
              "Track mood changes and avoid triggers."
            ]
          },
          {
            main: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
            subs: [
              "I’m bouncing from one thing to another without finishing.",
              "I’m distracted by every little noise or thought.",
              "I’m fidgeting and can’t keep still for a second.",
              "I’m blurting things out and cutting people off.",
              "I’m losing track of time and forgetting everything."
            ],
            solutions: [
              "Use reminders and time management techniques.",
              "Break tasks into small steps.",
              "Engage in regular physical activity."
            ]
          },
          {
            main: "Eating Disorders",
            subs: [
              "I’m obsessed with how I look and what I weigh.",
              "I’m skipping meals to feel like I’m in charge.",
              "I’m eating way too much and hating myself after.",
              "I’m throwing up because I can’t stand the guilt.",
              "I’m caught in this messed-up cycle with food."
            ],
            solutions: [
              "Seek professional therapy.",
              "Develop a healthy relationship with food.",
              "Join support groups for accountability."
            ]
          },
          {
            main: "Insomnia",
            subs: [
              "I’m lying awake, exhausted but unable to sleep.",
              "I’m waking up every hour and can’t stay asleep.",
              "My mind’s spinning, keeping me up all night.",
              "I’m drained but my body won’t let me rest.",
              "My sleep’s all over the place, and I’m a wreck."
            ],
            solutions: [
              "Maintain a consistent sleep schedule.",
              "Avoid screens before bedtime.",
              "Create a relaxing bedtime routine."
            ]
          },
          {
            main: "Substance Abuse/Dependency",
            subs: [
              "I’m hooked and can’t quit even though I try.",
              "I’m chasing that high and needing more each time.",
              "I’m planning my whole day around getting it.",
              "I’m losing everything because of this habit.",
              "I’m powerless and it’s running my life."
            ],
            solutions: [
              "Seek professional detox or rehab.",
              "Identify triggers and replace habits.",
              "Join support groups (AA, NA)."
            ]
          },
          {
            main: "Borderline Personality Disorder (BPD)",
            subs: [
              "I’m an emotional rollercoaster, up and down fast.",
              "I’m terrified of being left and cling too hard.",
              "My relationships are a mess, and I don’t know why.",
              "I’m impulsive and doing things I regret later.",
              "I’m empty and don’t even know who I am."
            ],
            solutions: [
              "Practice emotional regulation skills (DBT therapy).",
              "Build stable relationships.",
              "Engage in self-soothing activities."
            ]
          },
          {
            main: "Schizophrenia",
            subs: [
              "I’m hearing voices whispering things to me.",
              "I’m seeing stuff that I know can’t be real.",
              "I’m convinced of things that don’t make sense.",
              "I’m slipping away from what’s real and what’s not.",
              "My thoughts are a jumbled mess I can’t sort out."
            ],
            solutions: [
              "Adhere to prescribed medication.",
              "Engage in structured therapy.",
              "Maintain a support network."
            ]
          },
          {
            main: "Self-Harm",
            subs: [
              "I’m hurting myself to deal with what’s inside.",
              "I’m cutting because it’s the only relief I get.",
              "I’m ashamed of the scars but keep doing it.",
              "I’m using pain to say what I can’t out loud.",
              "I’m stuck in this and don’t know how to stop."
            ],
            solutions: [
              "Use alternative coping methods (drawing, exercise).",
              "Reach out to a trusted person.",
              "Seek professional counseling."
            ]
          },
          {
            main: "Suicidal Ideation",
            subs: [
              "I’m thinking about ending it all the time.",
              "I’m so lost I feel like giving up is the only option.",
              "I’m planning how I’d do it in my head.",
              "I’m hopeless and can’t see tomorrow being better.",
              "I’m desperate for help but don’t know where to turn."
            ],
            solutions: [
              "Talk to someone you trust.",
              "Seek crisis intervention or therapy.",
              "Remove harmful objects from reach."
            ]
          },
          {
            main: "Grief and Bereavement",
            subs: [
              "I’m aching because they’re gone and it’s unbearable.",
              "I’m in denial that they’re really not coming back.",
              "I’m wandering through life without direction now.",
              "I’m torn between sweet memories and sharp pain.",
              "I’m struggling to make sense of a world without them."
            ],
            solutions: [
              "Allow yourself to feel emotions.",
              "Join support groups.",
              "Engage in memorializing activities."
            ]
          },
          {
            main: "Chronic Loneliness",
            subs: [
              "I’m lonely even when people are all around me.",
              "I’m starving for someone to really see me.",
              "I’m pushing everyone away and hating it.",
              "I’m invisible, like I don’t matter to anyone.",
              "I’m aching for a friend but too scared to try."
            ],
            solutions: [
              "Join social clubs or online communities.",
              "Engage in volunteer work.",
              "Strengthen existing relationships."
            ]
          },
          {
            main: "Low Self-Esteem",
            subs: [
              "I’m convinced I’m not good enough for anything.",
              "I’m always measuring myself against everyone else.",
              "I’m worthless and don’t deserve good things.",
              "I’m beating myself up over every little flaw.",
              "I’m brushing off praise because I don’t believe it."
            ],
            solutions: [
              "Practice self-affirmations.",
              "Focus on strengths and achievements.",
              "Avoid negative self-comparisons."
            ]
          },
          {
            main: "Perfectionism",
            subs: [
              "I’m setting goals so high I can’t ever reach them.",
              "I’m never happy with what I manage to do.",
              "I’m paralyzed by the thought of screwing up.",
              "I’m delaying things until they can be flawless.",
              "I’m tying my value to how perfect I can be."
            ],
            solutions: [
              "Set realistic goals.",
              "Learn to accept mistakes.",
              "Prioritize progress over perfection."
            ]
          },
          {
            main: "Anger Management Issues",
            subs: [
              "I’m snapping at people over the smallest stuff.",
              "I’m boiling with anger I can’t keep in check.",
              "I’m saying and doing things I wish I could take back.",
              "I’m furious and can’t cool off once I start.",
              "I’m driving people away with my temper."
            ],
            solutions: [
              "Use deep breathing techniques.",
              "Identify triggers and reframe thoughts.",
              "Take breaks to cool down before responding."
            ]
          },
          {
            main: "Agoraphobia",
            subs: [
              "I’m scared to step outside my house.",
              "I’m avoiding busy places because they overwhelm me.",
              "I’m panicking when I even think about going out.",
              "I’m stuck relying on others to handle things.",
              "I’m trapped in a tiny bubble I can’t escape."
            ],
            solutions: [
              "Gradual exposure therapy.",
              "Practice deep breathing techniques.",
              "Seek cognitive-behavioral therapy (CBT)."
            ]
          },
          {
            main: "Specific Phobias",
            subs: [
              "I’m petrified of spiders and can’t stand them near me.",
              "I’m dodging anything that might bring on my fear.",
              "I’m freaking out just imagining that thing.",
              "I’m irrational about it, but the panic’s real.",
              "I’m letting this fear mess up my normal routine."
            ],
            solutions: [
              "Exposure therapy in controlled steps.",
              "Practice relaxation techniques.",
              "Challenge irrational fears."
            ]
          },
          {
            main: "Seasonal Affective Disorder (SAD)",
            subs: [
              "I’m sinking into gloom when winter rolls around.",
              "I’m perking up as soon as the days get longer.",
              "I’m sluggish and sleeping too much in the cold.",
              "I’m craving junk food and piling on pounds.",
              "I’m feeling brighter with a bit of extra light."
            ],
            solutions: [
              "Increase light exposure.",
              "Engage in regular exercise.",
              "Consider light therapy."
            ]
          },
          {
            main: "Adjustment Disorder",
            subs: [
              "I’m floundering after this big change hit me.",
              "I’m swamped and can’t get my bearings.",
              "My feelings are a mess, and I don’t know why.",
              "I’m barely getting by since things shifted.",
              "I’m stuck and can’t move forward yet."
            ],
            solutions: [
              "Accept and process change.",
              "Seek support from friends or professionals.",
              "Develop coping strategies for stress."
            ]
          },
          {
            main: "Dissociative Disorders",
            subs: [
              "I’m floating outside my own body sometimes.",
              "I’m missing chunks of time I can’t explain.",
              "I’m watching myself like I’m in a movie.",
              "I’m all over the place and don’t feel whole.",
              "I’m zoning out and losing touch with reality."
            ],
            solutions: [
              "Grounding techniques (e.g., cold water, deep breathing).",
              "Work on trauma processing in therapy.",
              "Maintain a structured routine."
            ]
          },
          {
            main: "Impulse Control Disorders",
            subs: [
              "I’m acting out without a second thought.",
              "I’m giving in to urges I know I shouldn’t.",
              "I’m jumping into risky stuff headfirst.",
              "I’m relieved for a moment when I give in.",
              "I’m kicking myself after I do something dumb."
            ],
            solutions: [
              "Use delay techniques before acting on impulses.",
              "Identify and avoid triggers.",
              "Seek professional therapy (CBT, DBT)."
            ]
          },
          {
            main: "Somatic Symptom Disorder",
            subs: [
              "I’m fixated on every ache and pain I feel.",
              "I’m scared something’s horribly wrong with me.",
              "I’m running to the doctor over and over.",
              "I’m stressed out by symptoms I can’t ignore.",
              "I’m sure I’m sick even when tests say I’m fine."
            ],
            solutions: [
              "Recognize and reframe health anxieties.",
              "Focus on relaxation techniques.",
              "Seek therapy to address underlying stress."
            ]
          },
          {
            main: "Body Dysmorphic Disorder",
            subs: [
              "I’m obsessed with flaws I see in the mirror.",
              "I’m spending hours trying to fix how I look.",
              "I’m hiding from people because of my appearance.",
              "I’m dreaming of surgery to change my face.",
              "I’m hating myself for how I think I look."
            ],
            solutions: [
              "Limit mirror-checking behaviors.",
              "Challenge negative self-perceptions.",
              "Seek therapy focused on self-acceptance."
            ]
          },
          {
            main: "Health Anxiety (Hypochondria)",
            subs: [
              "I’m convinced I’ve got some deadly disease.",
              "I’m freaking out over every twinge in my body.",
              "I’m googling symptoms and begging for tests.",
              "I’m still anxious even when doctors say I’m okay.",
              "I’m consumed with worry about my health."
            ],
            solutions: [
              "Limit health-related internet searches.",
              "Focus on facts rather than fears.",
              "Engage in anxiety-reducing activities."
            ]
          },
          {
            main: "Compulsive Behaviors",
            subs: [
              "I’m repeating things to keep my anxiety at bay.",
              "I’m driven to do stuff I can’t resist.",
              "I’m wasting time on habits I can’t break.",
              "I’m aware it’s silly, but I keep going.",
              "I’m getting a quick fix that doesn’t last."
            ],
            solutions: [
              "Identify and challenge urges.",
              "Develop alternative coping mechanisms.",
              "Seek therapy for impulse control."
            ]
          },
          {
            main: "Gambling Addiction",
            subs: [
              "I’m betting even when I’m losing big.",
              "I’m throwing more money in to win it back.",
              "I’m hiding how much I gamble from everyone.",
              "I’m ruining my life over this habit.",
              "I’m antsy when I’m not at the table."
            ],
            solutions: [
              "Self-exclude from gambling platforms.",
              "Join support groups (GA).",
              "Replace gambling with positive hobbies."
            ]
          },
          {
            main: "Internet Addiction",
            subs: [
              "I’m online all the time and ignoring real life.",
              "I’m panicking if I can’t get on the web.",
              "I’m failing at cutting down my screen time.",
              "I’m tanking at work because of this.",
              "I’m escaping into the internet nonstop."
            ],
            solutions: [
              "Set screen time limits.",
              "Engage in offline activities.",
              "Use apps to track and limit internet usage."
            ]
          },
          {
            main: "Work-Related Stress",
            subs: [
              "I’m buried under work and can’t keep up.",
              "I’m stressed out trying to hit every deadline.",
              "I’m clashing with people at my job constantly.",
              "I’m carrying work tension home every night.",
              "I’m burning out from this workload."
            ],
            solutions: [
              "Set clear work-life boundaries.",
              "Prioritize self-care and breaks.",
              "Practice relaxation techniques."
            ]
          },
          {
            main: "Burnout",
            subs: [
              "I’m wiped out and can’t push anymore.",
              "I’m done caring about my job or goals.",
              "I’m bitter and checked out from everything.",
              "I’m slipping up because I’m so tired.",
              "I’m desperate for a break I can’t take."
            ],
            solutions: [
              "Take regular breaks and rest.",
              "Reduce workload if possible.",
              "Engage in stress-reducing activities."
            ]
          },
          {
            main: "Emotional Dysregulation",
            subs: [
              "I’m a mess with feelings I can’t handle.",
              "I’m swinging from high to low all day.",
              "I’m overreacting to the tiniest things.",
              "I’m struggling to settle down after I lose it.",
              "I’m wrecking things with people because of this."
            ],
            solutions: [
              "Practice mindfulness and DBT techniques.",
              "Keep a mood journal.",
              "Learn emotional regulation strategies."
            ]
          },
          {
            main: "Test Anxiety",
            subs: [
              "I’m blanking out when the test starts.",
              "I’m freaking out about flunking every time.",
              "I’m forgetting stuff I studied cold.",
              "I’m sweaty and sick before every exam.",
              "I’m bombing tests even when I’m prepared."
            ],
            solutions: [
              "Use positive affirmations.",
              "Practice relaxation techniques before exams.",
              "Prepare using active study methods."
            ]
          },
          {
            main: "Performance Anxiety",
            subs: [
              "I’m shaking before I have to perform.",
              "I’m terrified of screwing up in front of people.",
              "I’m trembling and my voice is cracking.",
              "I’m dodging any chance to step up.",
              "I’m holding myself back because of nerves."
            ],
            solutions: [
              "Visualize success.",
              "Practice under simulated conditions.",
              "Focus on preparation rather than fear."
            ]
          },
          {
            main: "Relationship Difficulties",
            subs: [
              "I’m failing at talking things out with my partner.",
              "I’m fighting with them all the time.",
              "I’m feeling unloved and distant lately.",
              "I’m doubting if we can trust each other.",
              "I’m thinking about walking away from this."
            ],
            solutions: [
              "Improve communication skills.",
              "Address conflicts constructively.",
              "Seek couples or individual therapy."
            ]
          },
          {
            main: "Family Conflict",
            subs: [
              "I’m clashing with my family nonstop.",
              "I’m at odds with my parents or siblings.",
              "I’m dreading every family get-together.",
              "I’m feeling like no one gets me at home.",
              "I’m haunted by old family grudges."
            ],
            solutions: [
              "Practice active listening.",
              "Set healthy boundaries.",
              "Seek mediation if necessary."
            ]
          },
          {
            main: "Chronic Fatigue Syndrome (Related Stress)",
            subs: [
              "I’m exhausted no matter how long I sleep.",
              "I’m too worn out to do anything anymore.",
              "I’m aching and foggy all the time.",
              "I’m frustrated because rest doesn’t help.",
              "I’m stuck feeling limited by my body."
            ],
            solutions: [
              "Prioritize sleep and nutrition.",
              "Engage in low-intensity physical activity.",
              "Manage stress levels effectively."
            ]
          },
          {
            main: "Existential Crisis",
            subs: [
              "I’m lost wondering what life’s even about.",
              "I’m adrift and can’t find my purpose.",
              "I’m wrestling with thoughts about death.",
              "I’m unmoored from what I used to believe.",
              "I’m hunting for meaning that’s out of reach."
            ],
            solutions: [
              "Reflect on personal values and goals.",
              "Engage in philosophical reading or discussions.",
              "Seek meaning in personal growth and relationships."
            ]
          },
          {
            main: "Identity Crisis",
            subs: [
              "I’m clueless about who I really am.",
              "I’m torn between different parts of myself.",
              "I’m fumbling to figure out what I stand for.",
              "I’m buckling under pressure to fit in.",
              "I’m trying on versions of me to see what sticks."
            ],
            solutions: [
              "Explore different aspects of your identity.",
              "Seek supportive communities.",
              "Give yourself time for self-discovery."
            ]
          },
          {
            main: "Postpartum Depression",
            subs: [
              "I’m overwhelmed and feel like a bad mom.",
              "I’m not connecting with my baby like I should.",
              "I’m crying and moody out of nowhere.",
              "I’m guilty for not loving this like I expected.",
              "I’m sinking and too ashamed to ask for help."
            ],
            solutions: [
              "Seek social and professional support.",
              "Prioritize rest and self-care.",
              "Engage in therapy if symptoms persist."
            ]
          },
          {
            main: "Social Isolation",
            subs: [
              "I’m alone with hardly anyone to turn to.",
              "I’m by myself more than I want to be.",
              "I’m cut off from the world around me.",
              "I’m aching to reach out but don’t know how.",
              "I’m lonely even in a room full of people."
            ],
            solutions: [
              "Reach out to old and new friends.",
              "Join clubs, groups, or activities.",
              "Volunteer to build connections."
            ]
          },
          {
            main: "Rejection Sensitivity",
            subs: [
              "I’m crushed by any hint of criticism.",
              "I’m scared everyone’s going to ditch me.",
              "I’m blowing up over little slights.",
              "I’m avoiding anything where I might get judged.",
              "I’m letting this tear down my confidence."
            ],
            solutions: [
              "Challenge negative interpretations.",
              "Practice self-compassion.",
              "Learn to accept constructive criticism."
            ]
          },
          {
            main: "Emotional Exhaustion",
            subs: [
              "I’m drained and have nothing left in me.",
              "I’m swamped by feelings I can’t escape.",
              "I’m desperate to rest but can’t find peace.",
              "I’m numb from being overwhelmed too long.",
              "I’m running on fumes and about to collapse."
            ],
            solutions: [
              "Take breaks and set boundaries.",
              "Engage in activities that bring joy.",
              "Seek emotional support."
            ]
          },
          {
            main: "Cognitive Decline (Mild Concerns)",
            subs: [
              "I’m forgetting stuff more than I used to.",
              "I’m fuzzy and can’t focus or decide things.",
              "My memory’s slipping, and it’s freaking me out.",
              "I’m anxious about my mind not working right.",
              "I’m mad at myself for these mental hiccups."
            ],
            solutions: [
              "Engage in brain-stimulating activities.",
              "Maintain an active and social lifestyle.",
              "Get adequate sleep and nutrition."
            ]
          },
          {
            main: "Adjustment to Major Life Changes",
            subs: [
              "I’m reeling from this huge shift in my life.",
              "I’m out of sorts and can’t find my rhythm.",
              "I’m thrown off by my old life disappearing.",
              "I’m mourning what I used to have.",
              "I’m fumbling to get steady again."
            ],
            solutions: [
              "Accept and process the change.",
              "Seek support from friends or professionals.",
              "Develop new routines for stability."
            ]
          },
          {
            main: "Chronic Worry",
            subs: [
              "I’m worrying about every little thing constantly.",
              "I’m stuck in a loop of ‘what if’ thoughts.",
              "I’m too wound up to just live in the moment.",
              "I’m losing sleep over stuff I can’t fix.",
              "I’m anxious nonstop, and it’s wearing me out."
            ],
            solutions: [
              "Use journaling to externalize worries.",
              "Practice mindfulness and meditation.",
              "Set 'worry time' to limit overthinking."
            ]
          }
        ];

    let recognition;
    let recognizing = false;

    // Speech Recognition Initialization
    if ("webkitSpeechRecognition" in window) {
        const SpeechRecognition = window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            sendMessage();
        };

        recognition.onerror = () => recognizing = false;
        recognition.onend = () => recognizing = false;
    } else {
        micIcon.style.display = "none";
    }

    // Toggle Sidebar
    menuIcon.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-visible");
        main.style.marginLeft = sidebar.classList.contains("sidebar-visible") ? "250px" : "0";
    });

    // Chat Functions
    function appendMessage(message, sender = "user") {
        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${sender}-msg`;
        
        if (sender === "bot") {
            const contentWrapper = document.createElement("div");
            contentWrapper.className = "bot-content-wrapper";
            
            // Message content
            const messageContent = document.createElement("div");
            messageContent.innerHTML = message;
            
            // Speaker controls
            const speakerContainer = document.createElement("div");
            speakerContainer.className = "speaker-container";
            
            const speakerIcon = document.createElement("i");
            speakerIcon.className = "fas fa-volume-up speaker-icon";
            
            const speakerText = document.createElement("span");
            speakerText.className = "speaker-text";
            speakerText.textContent = "Speak out";
            
            speakerContainer.appendChild(speakerIcon);
            speakerContainer.appendChild(speakerText);
            
            speakerContainer.addEventListener("click", () => {
                const utterance = new SpeechSynthesisUtterance(message.replace(/<[^>]*>/g, ''));
                speechSynthesis.speak(utterance);
            });

            contentWrapper.appendChild(messageContent);
            contentWrapper.appendChild(speakerContainer);
            bubble.appendChild(contentWrapper);
        } else {
            bubble.textContent = message;
        }

        chatWindow.appendChild(bubble);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function findMatch(userMessage) {
        const lowerMsg = userMessage.toLowerCase();
        return problems.find(problem => 
            lowerMsg.includes(problem.main.toLowerCase()) ||
            problem.subs.some(sub => lowerMsg.includes(sub.toLowerCase()))
        );
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        appendMessage(message, "user");
        userInput.value = "";

        setTimeout(() => {
            if (message.match(/hi|hello|hey/i)) {
                appendMessage("Hello! How can I help you with your mental health today?", "bot");
                return;
            }

            const problem = findMatch(message);
            if (problem) {
                const response = `<strong>${problem.main} Solutions:</strong><br>• ${problem.solutions.join("<br>• ")}`;
                appendMessage(response, "bot");
            } else {
                appendMessage("I'm still learning about this issue. For immediate help, please consult a licensed professional.", "bot");
            }
        }, 500);
    }

    // Event Listeners
    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", e => e.key === "Enter" && sendMessage());

    // Predefined Questions
    document.getElementById("showPredefinedBtn").addEventListener("click", () => {
        const output = document.getElementById("output_predef");
        const btn = document.getElementById("showPredefinedBtn");
        
        if (output.style.display === "none" || output.style.display === "") {
            output.style.display = "block";
            btn.textContent = "Close";
        } else {
            output.style.display = "none";
            btn.textContent = "Show Available Responses";
        }
        
        output.innerHTML = problems.map(p => `<div class="predef-item">${p.main}</div>`).join("");
        
        document.querySelectorAll(".predef-item").forEach(item => {
            item.onclick = () => {
                userInput.value = item.textContent;
                sendMessage();
            };
        });
    });

    // Voice Recognition
    micIcon.addEventListener("pointerdown", startRecognition);
    micIcon.addEventListener("pointerup", stopRecognition);

    function startRecognition() {
        if (!recognition || recognizing) return;
        recognizing = true;
        micIcon.classList.add("recording");
        recognition.start();
    }

    function stopRecognition() {
        if (!recognition || !recognizing) return;
        recognition.stop();
        micIcon.classList.remove("recording");
    }
});