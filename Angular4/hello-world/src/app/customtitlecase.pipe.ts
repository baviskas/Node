import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customTitleCase'
})
export class CustomtitlecasePipe implements PipeTransform {
  transform(value: string, args?: any) {
    if (!value) { return null; }
    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }
  private toTitleCase(word: string): string {
    return word.substr(0, 1).toLocaleUpperCase() + word.substr(1, word.length).toLowerCase();
  }
  private isPreposition(word: string): boolean {
    const prePositions = ['of', 'the'];
    return prePositions.includes(word.toLowerCase());
  }
}
