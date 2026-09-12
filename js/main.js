/**
 * OPTIMIZELY — shared front-end behavior
 * Mobile nav toggle + job card rendering.
 * Uses the JOBS array from jobs-data.js (loaded before this file).
 */

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  initHeaderScrollState();
  renderJobCardsInto("[data-jobs-open]", "open");
  renderJobCardsInto("[data-jobs-closed]", "closed");
  renderJobCardsInto("[data-jobs-open-preview]", "open", 1);
});

function initHeaderScrollState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function updateHeaderState() {
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

function initNavToggle() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;
  toggle.addEventListener("click", function () {
    header.classList.toggle("nav-open");
    const expanded = header.classList.contains("nav-open");
    toggle.setAttribute("aria-expanded", String(expanded));
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : str;
  return div.innerHTML;
}

function jobCardHTML(job) {
  const isOpen = job.status === "open";
  const cardClasses = ["job-card"];
  if (isOpen) cardClasses.push("featured");
  if (!isOpen) cardClasses.push("is-closed");

  const statusPill = isOpen
    ? `<span class="pill pill-green">Open</span>`
    : `<span class="pill pill-dark">Closed</span>`;

  const reqs = (job.requirements || []).slice(0, 3);

  return `
    <article class="${cardClasses.join(" ")}">
      <div class="job-card-top">
        <h3>${escapeHtml(job.title)}</h3>
        ${statusPill}
      </div>
      <div class="job-meta">
        <span class="pill pill-muted">${escapeHtml(job.type)}</span>
        <span class="pill pill-muted">${escapeHtml(job.experience)}</span>
        ${job.eligibility && job.eligibility !== "Not specified" ? `<span class="pill pill-muted">${escapeHtml(job.eligibility)}</span>` : ""}
      </div>
      <p class="desc">${escapeHtml(job.shortDescription)}</p>
      ${
        reqs.length
          ? `<ul class="reqs">${reqs.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>`
          : ""
      }
      ${!isOpen ? `<p class="closed-note">Applications are no longer being accepted for this role.</p>` : ""}
      <div class="job-card-actions">
        <a class="btn btn-outline btn-sm" href="job-details.html?id=${encodeURIComponent(job.id)}">View Details</a>
        ${
          isOpen
            ? `<a class="btn btn-primary btn-sm" href="apply.html?id=${encodeURIComponent(job.id)}">Apply Now</a>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderJobCardsInto(selector, status, limit) {
  const container = document.querySelector(selector);
  if (!container || typeof JOBS === "undefined") return;
  let jobs = JOBS.filter((j) => j.status === status);
  if (limit) jobs = jobs.slice(0, limit);
  container.innerHTML = jobs.map(jobCardHTML).join("");
}
