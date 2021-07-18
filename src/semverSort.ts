export function semverSort(vers: string[]): string[] {
  return vers.sort((item: string, itemNext: string): number => {
    const itemSplitted = item.split(".");
    const itemNextSplitted = itemNext.split(".");
    for (let index = 0; index < itemSplitted.length; index += 1) {
      const num = Number(itemSplitted[index]);
      const numNext = Number(itemNextSplitted[index]);

      if (Number.isNaN(numNext) || num > numNext) {
        return 1;
      } if (num < numNext) {
        return -1;
      }
    }
    return -1;
  });
}
