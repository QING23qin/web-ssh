export interface SavedPassword {
  id: string;
  name: string;
  content: string;
}

const STORAGE_KEY = "ternssh-saved-passwords";

function readAll(): SavedPassword[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedPassword[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.content === "string",
    );
  } catch {
    return [];
  }
}

function writeAll(passwords: SavedPassword[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(passwords));
}

export function listSavedPasswords(): SavedPassword[] {
  return readAll();
}

export function savePassword(name: string, content: string): SavedPassword {
  const trimmedName = name.trim() || "Password";
  const trimmedContent = content;
  const existing = readAll();
  const duplicate = existing.find((item) => item.content === trimmedContent);
  if (duplicate) {
    const updated = existing.map((item) =>
      item.id === duplicate.id ? { ...item, name: trimmedName } : item,
    );
    writeAll(updated);
    return { ...duplicate, name: trimmedName };
  }

  const entry: SavedPassword = {
    id: crypto.randomUUID(),
    name: trimmedName,
    content: trimmedContent,
  };
  writeAll([entry, ...existing]);
  return entry;
}

export function deleteSavedPassword(id: string): void {
  writeAll(readAll().filter((item) => item.id !== id));
}

export function maybeSavePassword(
  name: string,
  content: string,
  shouldSave: boolean,
): void {
  if (!shouldSave || !content) return;
  savePassword(name, content);
}
