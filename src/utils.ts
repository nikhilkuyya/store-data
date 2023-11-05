


function getCurrentISOValue(withTime: boolean):string  {
  var now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

  /* remove second/millisecond if needed - credit ref. https://stackoverflow.com/questions/24468518/html5-input-datetime-local-default-value-of-today-and-current-time#comment112871765_60884408 */
  now.setMilliseconds(null)
  now.setSeconds(null);
  if(!withTime){
    now.setHours(null);
    now.setMinutes(null);
  }
  return now.toISOString().slice(0,-1);
}
