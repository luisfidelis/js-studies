# I - Interface Segregation Principle

It's a particular case of SRP, applied for Interfaces.

To create an interface that fits ISP, this one must be short and avoid features that aren't shared among 
all the clients that consume it. So, a developer should create many interfaces to accomplish different scenarios.

Example:


```
interface Vehicle {
    getSerialNumber(): string;
    getBatteryLevel(): number; // applied for Eletric Cars
    getFuelLevel(): number; // applied for fuel-based cars 
}
``` 

To accomplish ISP, this interface should be splited into three interfaces:


```

interface Vehicle {
    getSerialNumber(): string;
}

interface EletricVehicle extends Vehicle {
    getBatteryLevel(): number;
}

interface FuelVehicle extends Vehicle {
    getFuelLevel(): number;
}

```