const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) window.location.href = 'login.html';

const userLicenses = licenseAssignments.filter(a => a.userId === user.id);
const container = document.getElementById('showsContainer');

if (userLicenses.length === 0) {
  container.innerHTML = "<p>No licensed shows.</p>";
} else {
  userLicenses.forEach(lic => {
    const show = shows.find(s => s.id === lic.showId);
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${show.title}</h3>
      <p>${show.description}</p>
      <p><strong>Expires:</strong> ${lic.expires}</p>
    `;
    container.appendChild(div);
  });
}
