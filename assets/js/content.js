(function () {
  const escapeHtml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const inlineMarkdown = (text) => {
    let html = escapeHtml(text);
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
    html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return html;
  };

  const renderMarkdown = (markdown, mode) => {
    const blocks = markdown.trim().split(/\n{2,}/);
    if (mode === "news") {
      let items = "";
      for (let index = 0; index < blocks.length; index += 2) {
        const heading = blocks[index].replace(/^##\s*/, "").trim();
        const body = blocks[index + 1] || "";
        items += `<article class="news-item"><span class="news-date">${inlineMarkdown(heading)}</span><p>${inlineMarkdown(body.replace(/\n/g, " "))}</p></article>`;
      }
      return items;
    }

    return blocks
      .map((block) => {
        if (/^##\s+/.test(block)) {
          return `<h2>${inlineMarkdown(block.replace(/^##\s+/, ""))}</h2>`;
        }
        if (/^#\s+/.test(block)) {
          return `<h1>${inlineMarkdown(block.replace(/^#\s+/, ""))}</h1>`;
        }
        return `<p>${inlineMarkdown(block.replace(/\n/g, " "))}</p>`;
      })
      .join("");
  };

  const parseFrontMatter = (source) => {
    if (!source.startsWith("---\n")) {
      return { data: {}, body: source };
    }

    const end = source.indexOf("\n---", 4);
    if (end === -1) {
      return { data: {}, body: source };
    }

    const rawFrontMatter = source.slice(4, end).split("\n");
    const body = source.slice(end + 4).replace(/^\n/, "");
    const data = {};
    let currentKey = "";

    rawFrontMatter.forEach((line) => {
      const listMatch = line.match(/^\s*-\s+(.+)$/);
      if (listMatch && currentKey) {
        if (!Array.isArray(data[currentKey])) data[currentKey] = [];
        data[currentKey].push(listMatch[1].trim());
        return;
      }

      const fieldMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (!fieldMatch) return;

      currentKey = fieldMatch[1];
      const value = fieldMatch[2].trim();
      data[currentKey] = value === "" ? [] : value;
    });

    return { data, body };
  };

  const loadMarkdown = async (slot) => {
    const source = slot.getAttribute("data-md");
    const mode = slot.getAttribute("data-md-mode") || "default";
    if (!source) return;

    try {
      const response = await fetch(source);
      if (!response.ok) throw new Error(`Unable to load ${source}`);
      const markdown = await response.text();
      const { body } = parseFrontMatter(markdown);
      slot.innerHTML = renderMarkdown(body, mode);
    } catch (error) {
      slot.innerHTML = `<p class="content-error">Content could not be loaded from ${escapeHtml(source)}.</p>`;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-md]").forEach(loadMarkdown);
  });

  window.siteContent = {
    escapeHtml,
    inlineMarkdown,
    loadMarkdown,
    parseFrontMatter,
    renderMarkdown,
  };
})();
