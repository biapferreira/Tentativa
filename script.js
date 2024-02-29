const contentFiles = {
    'nunca1.txt': "nunca1.txt",
    'perguntas1.txt': "perguntas1.txt",
    'provavel1.txt': "provavel1.txt"
  };
  
  function selectOption(option) {
    document.getElementById("option-selector").style.display = "none";
    document.getElementById("content").style.display = "block";
    displayContent(option);
  }
  
  function displayContent(option) {
    const filename = contentFiles[option];
    if (!filename) return;
  
    console.log("Fetching content from:", filename); // Debugging statement
  
    fetch(filename)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log("Content fetched successfully:", data); // Debugging statement
        document.getElementById("content").innerHTML = data;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  
  
  
  
  