const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) {
  window.location.href = 'login.html';
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
});

document.getElementById('userInfo').innerHTML = `
  <p>Welcome, <strong>${user.name}</strong> (User ID: ${user.id})</p>
`;

const userLicenses = licenseAssignments.filter(a => a.userId === user.id);
const container = document.getElementById('showsContainer');

if (userLicenses.length === 0) {
  container.innerHTML = "<p>You currently have no licensed shows.</p>";
} else {
  userLicenses.forEach(lic => {
    const show = shows.find(s => s.id === lic.showId);
    const div = document.createElement('div');
    div.classList.add('show-card');
    div.innerHTML = `
      <h3>${show.title}</h3>
      <p>${show.description}</p>
      <p><strong>Expires:</strong> ${lic.expires}</p>
      <div class="downloads">
        ${show.files.map(f => `<a href="${f.url}" download>${f.name}</a>`).join("<br>")}
      </div>
    `;
    container.appendChild(div);
  });
}
