# Decorator Pattern

Decorator attaches additional responsibilities to an object dynamically.
Decorator provide a flexible alternative to a class for extending functionality.


Decorator allows us to add functionalities or behaviors to a class without the need of modifying the code or creating a complex inheritance chain neither.

It follows the OO's MOTO "Composition rather than Inheritance".

Take a look at this example:

```
interace Channel {
    send(message: string): void;
    receive(): string;
}

class TCPChannel implements Channel {
    ...
}

class UDPChannel implements Channel {
    ...
}

```

Imagine that we have to add some behavior on how a message is sent by these channels, like encoding the message to a buffer or Zipping the message, before we
actually send it.

When we opt to use inheritance for this case, we would create a chunk of subclasses to combine all the possibilities of behaviors.

`ZipUDPChannel`, `ZipBufferUDPChannel`, `BufferUDPChannel`, `ZipBufferTCPChannel` and etc.

To mitigate this and ease the orchestration of these behaviors, it's a good moment to apply Decorators.

So, a Decorator looks like this:

```
class ChannelDecorator implements Channel {

    private channel: Channel;

    constructor(channel: Channel) {
        this.channel = channel;
    }

    send(message: string) {
        channel.send(message)
    }

    receive() {
        return channel.receive()
    }
}

class ZipDecorator extends ChannelDecorator {
   
    constructor(c: Channel) {
        super(c)
    }

    send(message: string) {
        // Ziping the message before send it to the base class
        this.channel.send(message)
    }

    receive(): string {    
        const message = this.channel.receive()
        // Unzip the message before send it to the base class
        return message
    }
}

class BufferDecorator extends ChannelDecorator {
   
    constructor(c: Channel) {
        super(c)
    }

    send(message: string) {
        // Buffering the message before send it to the base class
        this.channel.send(Buffer.from(message))
    }

    receive(): string {    
        const message = this.channel.receive()
        // Unzip the message before send it to the base class
        return Buffer.from(message).toString()
    }
}
```
Then, we can instantiate a decorate how follows:

```
const instance = new BufferDecorator(new ZipDecorator(new TCPChannel()));
const instance = new ZipDecorator(new BufferDecorator(new UDPChannel()));
```

Basically, a decorator HAS and IS something.