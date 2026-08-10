/**
 * Cache loaded question banks in memory.
 * This prevents the same JSON file from being fetched
 * repeatedly during the user's session.
 */
const questionBankCache = new Map();

/**
 * Loads a question bank from the public folder.
 *
 * @param {string} fileName
 * @returns {Promise<Array>}
 */
export async function loadQuestionBank(fileName) {
  // Return the question bank if we've already loaded it
  if (questionBankCache.has(fileName)) {
    return questionBankCache.get(fileName);
  }

  // Fetch the question bank
  const response = await fetch(`/banks/${fileName}`);

  if (!response.ok) {
    throw new Error(`Unable to load question bank: ${fileName}`);
  }

  // Parse the JSON
  const data = await response.json();

  // Store only the questions in memory
  questionBankCache.set(fileName, data.questions);

  return data.questions;
}
