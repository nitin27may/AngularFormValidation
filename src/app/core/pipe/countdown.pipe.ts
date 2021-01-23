import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: "countdown",
  pure: false,
})
export class CountdownPipe implements PipeTransform {
  transform(text: string, args: number) {
    const maxLength = args || 140;
    if (text) {
      const length = text.length;
      return maxLength - length;
    }
    return null;
  }
}
