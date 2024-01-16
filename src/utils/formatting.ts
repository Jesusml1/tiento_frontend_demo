/**
 * Cut discord message when is longer
 * than 300 characters, else return same message
 * @param {string}  message - Message to be shorten
 * @returns {string} Short message if necessary
 */
export function formatLongDiscordMessageContent(message: string): string {
  if (message.length > 299) {
    return message.slice(0, 300) + "...💬";
  }
  return message;
}
