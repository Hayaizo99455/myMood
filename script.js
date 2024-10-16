document.getElementById("mood-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let mood = document.getElementById("mood").value;
  let thoughts = document.getElementById("thoughts").value;
  let date = new Date().toLocaleString();
  
  console.log("Mood:", mood);
  console.log("Thoughts:", thoughts);
  console.log("Date:", date);

  alert("Mood recorded successfully!");
  
  // 可以把数据存储在浏览器的localStorage中
  let moodRecord = {
    mood: mood,
    thoughts: thoughts,
    date: date
  };
  
  let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
  moodHistory.push(moodRecord);
  localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
});
