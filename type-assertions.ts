let message;
message = "Hello Zeynep!";

let count = (<string>message).length; //message değişkeni tipi en başta any olduğundan buna dikkattt!!!!
let length = (message as string).length;
