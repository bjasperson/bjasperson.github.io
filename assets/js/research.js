(function () {
  const container = document.getElementById("research-projects");
  if (!container || !window.siteContent) return;

  const { escapeHtml, parseFrontMatter, renderMarkdown } = window.siteContent;

  const renderTags = (tags) => {
    if (!Array.isArray(tags) || tags.length === 0) return "";
    return `<div class="tag-list">${tags
      .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
      .join("")}</div>`;
  };

  const renderProject = ({ data, body }) => {
    const title = data.title || "Untitled Research Project";
    const image = data.image || "";
    const alt = data.alt || title;
    const caption = data.caption || "";

    const figure = image
      ? `<figure>
          <img src="${escapeHtml(image)}" alt="${escapeHtml(alt)}">
          ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
        </figure>`
      : "";

    return `<article class="project">
      ${figure}
      <div>
        <h2>${escapeHtml(title)}</h2>
        <div>${renderMarkdown(body)}</div>
        ${renderTags(data.tags)}
      </div>
    </article>`;
  };

  const loadResearch = async () => {
    const indexPath = container.getAttribute("data-research-index");
    if (!indexPath) return;

    try {
      const indexResponse = await fetch(indexPath);
      if (!indexResponse.ok) throw new Error(`Unable to load ${indexPath}`);
      const files = await indexResponse.json();

      const projects = await Promise.all(
        files.map(async (file) => {
          const response = await fetch(file);
          if (!response.ok) throw new Error(`Unable to load ${file}`);
          const markdown = await response.text();
          const parsed = parseFrontMatter(markdown);
          return { ...parsed, source: file };
        })
      );

      projects.sort((a, b) => {
        const orderA = Number(a.data.order || 0);
        const orderB = Number(b.data.order || 0);
        if (orderA !== orderB) return orderA - orderB;
        return a.source.localeCompare(b.source);
      });

      container.innerHTML = projects.map(renderProject).join("");
    } catch (error) {
      container.innerHTML = '<p class="content-error">Research content could not be loaded.</p>';
    }
  };

  document.addEventListener("DOMContentLoaded", loadResearch);
})();
