import './Timer.css';
import { IonFab, IonFabButton } from '@ionic/react';
import { useEffect, useCallback, useState } from 'react';
import { msToClockString } from '../utility/printTime';


const Timer: React.FC = () => {

    const [msElapsed, setMs] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    //Need a function that will add 10 ms to the time elapsed every 10 ms
    const tick = useCallback(() => setMs(msElapsed + 10), [msElapsed])

    //This function will run every 10 milliseconds
    useEffect(() => {

        const timerId = isRunning
            ? setInterval(tick, 10)
            : undefined

        return () => timerId 
            ? clearInterval(timerId)
            : undefined
    }, 
    //If this changes useEffect will run or stop running
    [isRunning])

    return (
        <div>
            <IonFab vertical="center" horizontal="center" slot="fixed">
                <h1>{msToClockString(msElapsed)}</h1>
                <IonFabButton onClick={() => setIsRunning(true)}>
                    START
                </IonFabButton>
                <IonFabButton  onClick={() => setIsRunning(false)}>
                    STOP
                </IonFabButton>
            </IonFab>
        </div>
    );
};


export default Timer;