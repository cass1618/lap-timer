import './Timer.css';
import { IonFab, IonFabButton } from '@ionic/react';
import { useEffect, useCallback, useState } from 'react';
import formattedTime from '../utility/formattedTime';

const Timer: React.FC = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState([0,0,0,0]);
    const [lapNumber, setLapNumber] = useState(0);

    // Need a function that will add 10 ms to the time elapsed every 10 ms
    const tick = useCallback(() => setTimeElapsed(timeElapsed + 10), [timeElapsed]);

    // This function will run every 10 milliseconds
    useEffect(() => {
        const timerId = isRunning
            ? setInterval(tick, 10)
            : undefined

        return () => timerId
            ? clearInterval(timerId)
            : undefined
    },
    // If this changes useEffect will run or stop running
    [isRunning, timeElapsed])

    const onClickingLap = () => {
        let newLapTimes = lapTimes;
        newLapTimes[lapNumber] = timeElapsed;
        setLapTimes(newLapTimes);
        console.log(lapTimes)
    }
    
    // const onClickingReset = () => {
    //     setTime(0);
    //     setLaps([]);
    //     setTimerOn(false);
    // }

    console.log(timeElapsed)
    return (
        <div>
            <IonFab vertical="center" horizontal="center" slot="fixed">
                <h1>{formattedTime(timeElapsed)}</h1>
                <IonFabButton onClick={() => setIsRunning(true)}>
                    START
                </IonFabButton>
                <IonFabButton onClick={() => setIsRunning(false)}>
                    STOP
                </IonFabButton>
                {/* <IonFabButton onClick={() => onClickingLap}>
                    LAP
                </IonFabButton>
                <IonFabButton onClick={() => setTimeElapsed(0)}>
                    RESET
                </IonFabButton> */}
            </IonFab>
        </div>
    )
}

export default Timer;