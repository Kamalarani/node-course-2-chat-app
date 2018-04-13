var expect = require("expect");

var {generateMessage,generateLocationMessage} = require('./message');

describe("generateMessage", () => {
  it("Should generate correct message object",() => {
    var from = "vel";
    var text = "Some Message";
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage' , () => {
  it("Shold generate correct location object" , () => {
    var from = "hari";
    var latitude = 15;
    var longitude = 25;
    var url =  'https://www.google.com/maps?q=15,25';
    var message = generateLocationMessage(from,latitude,longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
