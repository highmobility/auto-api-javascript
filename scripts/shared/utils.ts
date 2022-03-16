import fs from 'fs';
import path from 'path';
import YAML from 'yamljs';

export function cleanOrCreateDirectory(dir: string) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) =>
      fs.rmSync(path.resolve(dir, file), { recursive: true, force: true }),
    );
  } else {
    fs.mkdirSync(dir);
  }
}

export function parseYmlFile<T = Record<string, unknown>>(filePath: string): T {
  const file = fs.readFileSync(filePath, 'utf8');
  return YAML.parse(file);
}

export function printSourceFile(filename: string, statements: string[]) {
  fs.writeFileSync(filename, statements.join('\n').concat('\n'));
}

export function resolve(...parts: string[]) {
  return path.resolve(__dirname, ...parts);
}
