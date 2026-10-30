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

  const renderFigure = ({ image, alt, caption }) => `<figure>
      <img src="${escapeHtml(image)}" alt="${escapeHtml(alt)}">
      ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
    </figure>`;

  // Figures come from a `figures:` list ("path | caption" per entry) or the single image/alt/caption fields.
  const collectFigures = (data, title) => {
    const figures = Array.isArray(data.figures)
      ? data.figures.map((entry) => {
          const [image, caption = ""] = entry.split("|").map((part) => part.trim());
          return { image, alt: caption || title, caption };
        })
      : [];
    if (figures.length === 0 && data.image) {
      figures.push({ image: data.image, alt: data.alt || title, caption: data.caption || "" });
    }
    return figures.filter((figure) => figure.image);
  };

  const renderProject = ({ data, body }) => {
    const title = data.title || "Untitled Research Project";
    const figures = collectFigures(data, title);

    const figureColumn = figures.length
      ? `<div class="project-figures">${figures.map(renderFigure).join("")}</div>`
      : "";

    return `<article class="project${figures.length ? "" : " no-figure"}">
      ${figureColumn}
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
      const indexResponse = await fetch(indexPath, { cache: "no-cache" });
      if (!indexResponse.ok) throw new Error(`Unable to load ${indexPath}`);
      const files = await indexResponse.json();

      const projects = await Promise.all(
        files.map(async (file) => {
          const response = await fetch(file, { cache: "no-cache" });
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
