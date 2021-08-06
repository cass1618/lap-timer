## MVP
Your app should have these basic functions:
1. A 1/100th of a second timer (10 millisecond per tick)
1. User should be able to start/stop/reset the timer
1. User should be able to record time difference between laps


### TIMER
1. Need some sort of time import
1. 2 buttons: Start/stop, reset

### LAPS
* Save current elapsed time in a const, then start over the timer
* Might help to have a reset function

## LEADS

useState()
laps in an array

need to set useState() so it has a new thing at the end of the array

map the laps

take array in state and map in the dom


<ul>
        {
          printedLaps.map((lap, idx) => (
            <li key={idx}><span>Lap {idx + 1}: </span>{lap}</li>
          ))
        }
</ul>