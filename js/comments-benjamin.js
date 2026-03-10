const comments = [
  { username: "Thundery_Sad", content: "Hejsan markus", time: "3 nov, 2025 @ 11:31am", imgSrc: "img/img-profile_s/bamsepfp" },
  { username: "Microsoft Tech Support", content: "Kan jag få vara med i league laget", time: "4 nov, 2025 @ 2:15pm", imgSrc: "img/img-profile_s/benjamincommentspfp" },
  { username: "FEJA", content: "Adda mig Markus", time: "5 nov, 2025 @ 9:00am", imgSrc: "img/img-profile_s/filippfp" },
  { username: "Razorcrazy", content: "Kan du ge mig A?", time: "5 nov, 2025 @ 9:00am", imgSrc: "img/img-profile_s/filippfp" },
];

function createComment(username, content, time, imgSrc = "") {
  return `
    <div class="comments-personer">
      <img class="commentspfp-benjamin" src="img/img-profile_s/${imgSrc}.jpg" alt="">
      <div class="comments-content-upper-part">
        <div class="kommer-att-runka">
          <span class="comments-username-benjamin">${username}</span>
          <span class="comments-content">${content}</span>
        </div>
        <span class="comments-time">${time}</span>
      </div>
    </div>
  `;
}

function loadComments() {
  const container = document.querySelector(".comments-container");

  comments.forEach(c => {
    container.innerHTML += createComment(c.username, c.content, c.time, c.imgSrc);
  });
}

loadComments();