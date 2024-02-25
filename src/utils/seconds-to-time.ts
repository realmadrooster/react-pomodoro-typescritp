export function secondsToTime(seconds: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');// padstart usa dois digitos sendo que se a string nao possuir 2 caracteres nesse caso acrescenta o '0'
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
