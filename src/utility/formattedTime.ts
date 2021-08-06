const formattedTime = (timeInMs: number):string => {
    // convert ms to seconds

    let ms, s, m, h = 0;

    if(timeInMs < 36000) {
        ms = timeInMs % 100;
        s = Math.trunc(timeInMs / 600);
    } else if (timeInMs < 36000){
        console.log("<36000")
        m = Math.trunc(timeInMs / 360000)
        s = Math.trunc((timeInMs % 360000) / 600)
        ms = timeInMs % 100;
    } else {
        console.log("else")
        ms = timeInMs % 100;
        s = timeInMs % 600
        m = timeInMs % 360000
        h = Math.trunc(timeInMs / 3600000)
    }
    return `${h}:${m}:${s}:${ms}`;
}

export default formattedTime;