interface Projector {
    turnOn(): void;
}

class LGProjector implements Projector {
    constructor() {}
    turnOn() {
        // do whatever and then turn on
        console.log("Turning on the LG Projector");
    }
}

class SamsungProjector {
    constructor() {}
    turnOnInAstrangeManner(): number {
        // do whatever to turn on and return the current timestamp 
        console.log("Turning on the Samsung Projector");
        return new Date().getTime();
    }
}

class SamsungProjectorAdapter implements Projector {
    private projector: SamsungProjector;

    constructor(projector: SamsungProjector) {
        this.projector = projector;
    }

    turnOn() {
        this.projector.turnOnInAstrangeManner()
    }
}

class ProjectorControl {
    
    private projector: Projector;

    constructor(projector: Projector) {
        this.projector = projector;
    }

    init() {
        this.projector.turnOn();
    }
}


const lgProjector = new LGProjector();
const projectorControl = new ProjectorControl(lgProjector);
projectorControl.init();



const samsungAdapter = new SamsungProjector()
const samsungProjector = new SamsungProjectorAdapter(samsungAdapter);
const projectorControlWithSamsung = new ProjectorControl(samsungProjector);
projectorControlWithSamsung.init();

