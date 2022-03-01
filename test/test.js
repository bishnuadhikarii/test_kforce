let occupiedSlot = {}
let vacentSlot = {
    p1:10,
    p2:10,
    p3:10
}

const parkIn = (carInfo) => {
    if (vacentSlot.length == 0) {
        console.log("slots not avilable")
        return false
    } else {
        const { regNumber } = carInfo;
        vacentSlot = vacentSlot.slice(0);
        occupiedSlot[regNumber] = { ...carInfo, slotId: vacentSlot[0] }
    }
}

const parkOut = (carInfo) => {
    const { regNumber } = carInfo
    const { slotId } = occupiedSlot[regNumber]
    if (!slotId) {
        console.log("Invalid Reg numbers")
        return false
    }
    delete occupiedSlot[regNumber]
    vacentSlot[slotId] = slotId;
    console.log("Updated vacent slot is", vacentSlot)
}
