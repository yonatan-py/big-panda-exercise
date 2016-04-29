var reader = require('./reader');
var writer = require('./writer')

reader.init();
writer.init();

function getWordsFromData(event) {
  if (event.data){
      return event.data.split(' ');
  }
  return [];
}

reader.onLine(function (data) {
  try {
    var event = JSON.parse(data);
    console.log(event);
    getWordsFromData(event).forEach(function (word) {
      writer.updateWord(word);
    })
    if(event.event_type) {
        writer.updateType(event.event_type);
    }
  }
  catch (error) {
    console.error(error);
  }
})
