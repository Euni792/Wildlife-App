function showForm() {
  const form = document.getElementById("reportForm");
  form.style.display = "block";
  form.scrollIntoView({ behavior: "smooth" });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById("location").value = lat + ", " + lon;
    }, () => {
      alert("Failed to get location.");
    });
  } else {
    alert("Geolocation is not supported.");
  }
}

document.getElementById("crimeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // In a real app, this would send to a backend/email
  alert("Report submitted! This would be sent to vashetzariro@gmail.com.");

  // Optional: reset the form
  this.reset();
  document.getElementById("location").value = '';
});
