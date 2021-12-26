export function capitalize(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function snakeCaseToPascalCase(name: string) {
  return name.split('_').map(capitalize).join('');
}
