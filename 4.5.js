class ElectricalConsumers
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn()
    {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    getPowerUsed()
    {
        return this.isPlugged ? this.power : 0;
    }
}

const lamp = new ElectricalConsumers('lamp', 50);
const tv = new ElectricalConsumers('TV', 100);

console.log(lamp.getPowerUsed() + tv.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed());