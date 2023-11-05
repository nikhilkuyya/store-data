import * as csv from 'csvtojson';
import { Level } from 'level';

function createDB() {
  const fooDB = new Level('./foo.db',{valueEncoding: 'json'})
  fooDB.get('count',function(err,value) {
    const val = (value || 0) + 1;
    fooDB.put('count',val,function(err) {
      if(err) console.error(err);
      else console.log(val)
    })
  });
}
async function readFile(){
  const csvInstance = csv();
  const jsonArray =  await csvInstance.fromFile('./workout.csv');
  return jsonArray;
}
createDB()

console.log('promise',readFile().then(console.log));

