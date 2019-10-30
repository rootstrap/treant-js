const $ = require('jquery');

export const removeScriptTagsAndEvents = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }

  $(html).find('script').remove();

  // Removing all events from tags...
  html = html.replace(/ onw+="[^"]*"/g, '');

  return html;
};
