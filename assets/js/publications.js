(function () {
  const container = document.getElementById("bibbase-publications");
  if (!container) return;

  const normalizeSource = (value) => {
    if (!value) return "";
    const match = value.match(/src=["']([^"']+)["']/i);
    return match ? match[1] : value.trim();
  };

  const scriptSrc = normalizeSource(container.getAttribute("data-bibbase-src"));
  const iframeSrc = normalizeSource(container.getAttribute("data-bibbase-iframe-src"));

  if (!scriptSrc && !iframeSrc) return;

  container.innerHTML = "";

  if (scriptSrc) {
    const script = document.createElement("script");
    script.src = scriptSrc;
    container.appendChild(script);
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = iframeSrc;
  iframe.title = "Publications";
  iframe.loading = "lazy";
  iframe.className = "bibbase-iframe";
  container.appendChild(iframe);
})();
