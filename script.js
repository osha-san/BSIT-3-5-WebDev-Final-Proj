function showPopup() {
  const name = document.getElementById("name").value;
  if (name) {
    alert(`Hello, ${name}! Thank you for filing out the form! Have a nice day`);
  } else {
    alert("Please enter your name before submitting.");
  }
}