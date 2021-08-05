export const msToClockString = (ms: number):string => {
    //convert ms to seconds
    const mSeconds = ms % 1000;
    const seconds = Math.trunc(ms / 1000);
    return `${seconds}:${mSeconds}`
}