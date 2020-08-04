let identifier;
class data {
   constructor() {
   this.Registration = {
       link: 'https://dev-91.digitalhealthunit.org/',
       username: 'superman',
       password: 'Admin123',
       patientID: 'NAHA150000000001',
       fees: '200',    
       date: '02012008',    
       makeid(length) {
           var result           = '';
           var characters       = 'ABCDEFGHIJKLMNOPRSTUVWZabcdefghijklmnoprstuvwz';
           var charactersLength = characters.length;
           for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result;
        }    
   };
}
}
module.exports = new data();
