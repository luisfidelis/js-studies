interface Channel {
    send(message: string): void;
    receive(): string;
}

class TCPChannel implements Channel {
    
    // this property is used for simulating a message sent by this protocol
    private tmpMessage: string = ""

    constructor() {

    }
    send(message: string) {
        this.tmpMessage = message;
    }

    receive(): string {
        return this.tmpMessage;
    }
}

class UDPChannel implements Channel {
    // this property is used for simulating a message sent by this protocol
    private tmpMessage: string = ""

    constructor() {

    }
    send(message: string) {
        this.tmpMessage = message;
    }

    receive(): string {
        return this.tmpMessage;
    }
}

abstract class ChannelDecorator implements Channel {

    protected channel: Channel;

    constructor(channel: Channel) {
        this.channel = channel;
    }

    send(message: string) {
        this.channel.send(message)
    }

    receive() {
        return this.channel.receive()
    }
}

class Base64Decorator extends ChannelDecorator {
   
    constructor(c: Channel) {
        super(c)
    }

    send(message: string) {
        // Ziping the message before send it to the base class
        console.log("sending a base64 message");
        this.channel.send(Buffer.from(message).toString("base64"));
    }

    receive(): string {    
        const message = this.channel.receive()
        // Unzip the message before send it to the base class
        console.log("receiving a base64 message")
        return Buffer.from(message, "base64").toString()
    }
}

class HexDecorator extends ChannelDecorator {
   
    constructor(c: Channel) {
        super(c)
    }

    send(message: string) {
        // Buffering the message before send it to the base class
        console.log("sending a hex message");
        this.channel.send(Buffer.from(message).toString("hex"))
    }

    receive(): string {    
        const message = this.channel.receive()
        // Unzip the message before send it to the base class
        console.log("receiving a hex message")
        return Buffer.from(message, "hex").toString()
    }
}

const instance = new Base64Decorator(new HexDecorator(new TCPChannel()));

instance.send("test message");
console.log(instance.receive());