const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");  // Assuming you added the stop button
const output = document.getElementById("user-input");

let recognition;

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.running = false;

  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    output.value = transcript;
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };

  recognition.onend = () => {
    recognition.running = false;
    startBtn.disabled = false;
  };

  startBtn.onclick = () => {
    recognition.start();
    recognition.running = true;
    startBtn.disabled = true;
  };

/*  stopBtn.onclick = () => {
    recognition.stop();
  };*/
} else {
  alert("Speech Recognition is not supported in your browser. Try Chrome.");
  startBtn.disabled = true;
  stopBtn.disabled = true;
}

function sendMessage() {
  // Stop recognition if running
  if (recognition && recognition.running) {
    recognition.stop();
  }

  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("user", message);
  showTyping();
  
  setTimeout(() => respondTo(message.toLowerCase()), 1000);
  userInput.value = "";
}

// Quick list button
function sendQuickMessage(message) {
  addMessage("user", message);
  showTyping();
  setTimeout(() => respondTo(message.toLowerCase()), 1000);
}

// Add message bubble
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  msg.style.opacity = 0;
  chatBox.appendChild(msg);

  // fade-in animation
  setTimeout(() => {
    msg.style.opacity = 1;
    msg.style.transition = "opacity 0.4s ease";
  }, 50);

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show "typing..." animation
function showTyping() {
  const blinking =document.createElement("span");
  blinking.innerHTML="<span class='bllink'>.<span>";
  blinking.id ="blinking";
    chatBox.appendChild(blinking);
  chatBox.scrollTop = chatBox.scrollHeight;
  const typing = document.createElement("div");
  typing.className = "message bot typing";
  typing.innerHTML = "Bot is typing<span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
  typing.id = "typing";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Replace typing with actual response
function respondTo(input) {
  let response = "Sorry, I don't understand that.";

  if (input.includes("hello") || input.includes("hi") || input.includes("helo")) {
    response = "Welcome to 'CMR Institute of Technology' 👋\nHow can I help you about our college?";
  }
 else if (input.includes("timings") || input.includes("time") || input.includes("start") ) {
    response =" ⏰College hours are from 9:10 AM to 4:5 PM , Monday to Saturday:\n 9.10 am to 11.10 am classes\n 11.10am to 11.20 am interval \n 1.20pm lunch break\n 4.5pm gates open";
  } 
   else if (input.includes("affilicated") || input.includes("recognized") || input.includes("autonomous")) {
    response ="Affiliated to a recognized university or autonomous with updated curriculum. it is approved by UGC/ACITE (in India) or the respective Authority , has NAAC/NBA accreditation...";
  }
       else if (input.includes("course") || input.includes("specialization") ) {
    response = " 📚The college has a branch(e.g: AI &ML , CSE ,ECE ,etc.) with good labs and updated syllabus";
  }
    else if (input.includes("syllabus")) {
    response = " 📝Every 2–3 years, aligned with industry needs (AI, ML, Data Science, etc.).";
  }
    else if (input.includes("staff") || input.includes("faculty")  || input.includes("teachers") || input.includes("lecturers") || input.includes("professors")) {
    response ="👩‍🏫Professor have phDs or industry Experience ,approchable for doubt clearing ,and Supportive for Project";
  }
 else if (input.includes("facilities") || input.includes("facility") ) {
    response = "Wi-Fi enabled campus, computer labs, digital libraby,hostals,sport,facilities,healthcare,and student clubs..";
  }
   else if (input.includes("fee") || input.includes("fee Structure") ) {
    response = "we have college merit seats of ts Emcet and 8L for b.tech degree 1.4L for MBA and M.tech";
  }
     else if (input.includes(" research") || input.includes("project") || input.includes("projects")) {
    response = "Yes, with funded projects, research centers, and faculty guidance.";
  }
       else if (input.includes("convenient") || input.includes("Transport")) {
    response = "College is ccessible by public transport ,near industry hubs , and in a safe area...";
  }
     else if (input.includes("labs") || input.includes("modern")) {
    response = "Yes, with updated computers, internet, robotics/AI/IoT labs.\n 1) ML lab \n 2)fSWD lab \n 3)java oops lab \n 4)AIML lab.";
  }
    else if (input.includes("mentoring") || input.includes(" guidance")) {
    response = "Yes, faculty mentors assigned to every student for career and personal guidance.\n 5- ratio - 1 staff";
  }
    else if (input.includes("extracurricular clubs") || input.includes("clubs") || input.includes("events")) {
    response = "Yes, coding clubs, cultural clubs, NSS, sports, and annual fests.";
  }
    else if (input.includes("scholarships")) {
    response = "Yes, government and private scholarships, plus merit-based fee waivers.";
  }
    else if (input.includes("college offer educational loan") || input.includes("educational loan") || input.includes("loan")) {
     response = " Yes, tie-ups with banks for easy loan processing.";
  }
    else if (input.includes("career guidance") || input.includes("counseling cell")) {
    response = "Yes, for placements, higher studies, and entrepreneurship.";
  }
     else if (input.includes("higher education") || input.includes("MS/MBA abroad")) {
    response = "Yes, with GRE/GMAT/GATE coaching and counseling.";
  }
       else if (input.includes("package")) {
    response = "Highest  🏢 package is attractive, average is consistent and better than nearby colleges.";
  }
    else if (input.includes("internship")) {
    response = "Yes, 💼mandatory internships with assistance in finding companies.";
  }
   else if (input.includes("entrepreneurship") || input.includes("startups") || input.includes("startup")) {
    response = " Yes, with incubation centers and startup funding guidance.with alumni in top MNCs providing mentorship and networking.";
  }
  else if (input.includes("location") || input.includes("address") || input.includes("located")) {
    response = " 📍 The college is located at kandla koya medchal Hyderabad , Telangana ,India,501401.";
  } else if (input.includes("hostel")) {
    response = "we have , hostels are available for both boys and girls.Safe hostels with Wi-Fi, mess, and good hygiene.";
  }
   else if (input.includes("placement record") || input.includes("percentage")|| input.includes("placement percentage")) {
    response = "Placement percentage is high(70-80 %) 📈 ,with reputed companies like infosys ,TCS,Accenture ,product-based firms,and average salary is decent..";
  } 
  else if (input.includes("placement") || input.includes("companies") || input.includes("placements")) {
    response = "Top IT firms (TCS, Infosys, Wipro, Accenture) + product companies (Microsoft, Amazon, Google if possible).";
  }
  else if (input.includes("ragging-free") || input.includes("ragging") || input.includes("recial")) {
    response = "our cumpus ragging free, 🚫 strict anti-ragging cell and disciplinary committee.";
  }
  // remove typing
     const blinking = document.getElementById("blinking");
  if (blinking) blinking.remove();
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
 

  // show response
  setTimeout(() => addMessage("bot", response), 200);
}
window.onload = () => {
  showTyping();
  setTimeout(() => {
    const typing = document.getElementById("typing");
    if (typing) typing.remove();

    addMessage("bot", "👋 Hello! How can I help you about our college?");
  }, 100);
};
 // show response
  setTimeout(() => addMessage("bot", response), 200);
}
window.onload = () => {
  showTyping();
  setTimeout(() => {
    const typing = document.getElementById("typing");
    if (typing) typing.remove();

    addMessage("bot", "👋 Hello! How can I help you about our college?");
  }, 100);
};
// if you have api add this
async function sendMessage() {
  if (recognition && recognition.running) {
    recognition.stop();
  }

  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("user", message);
  showTyping();

  userInput.value = "";

  try {
    const res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message })
    });

    const data = await res.json();

    removeTyping();
    addMessage("bot", data.response);

  } catch (error) {
    removeTyping();
    addMessage("bot", "⚠️ Server error. Try again.");
  }
}
// helper function
function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();

  const blinking = document.getElementById("blinking");
  if (blinking) blinking.remove();
}
//update function
function sendQuickMessage(message) {
  userInput.value = message;
  sendMessage();
}
