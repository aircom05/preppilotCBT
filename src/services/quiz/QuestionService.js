/**
 * Loads a question bank from the public folder.
 *
 * @param {string} fileName
 * @returns {Promise<Array>}
 */

export async function loadQuestionBank(fileName) {
  const response = await fetch(`/banks/${fileName}`);

  if (!response.ok) {
    throw new Error(`Unable to load question bank: ${fileName}`);
  }

  return await response.json();
}
