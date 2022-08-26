var messages = ['leave no stone unturned', 'if u dont fail u are not even trying',
 'Nothing in life is worthwhile unless u take risks... nothing', 'there is no Passion to be found playing small!',
 'Fall Forward', 'take chances', 'dont be afraid to Fail',
 'think outside the box', 'dreams without goals are just dreams...', 'to get something u never had u have to do something u never did !',
 'your life will never be a straight path', 




]

function randomMessages(){
    var randomNumber = Math.floor(Math.random() * (messages.length));
    document.getElementById('messagesDisplay').innerHTML=messages[randomNumber];
}
