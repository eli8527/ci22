document.addEventListener('DOMContentLoaded', () => {
  const title = `${document.title} — `;
  position = 0;
  const scrolltitle = () => {
      document.title = title.substring(position, title.length) + title.substring(0, position);
      position++;
      if (position > title.length) position = 0;
      titleScroll = window.setTimeout(scrolltitle,170);
  }
  scrolltitle();
})
