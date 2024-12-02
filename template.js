//calculateDemeritPoint
    function calculate(speed){
        const speedLimit=70;
        const kmPerSecond=5;

        if(speed <= speedLimit){
            console.log("Ok");
        } else {const demeritPoints = Math.floor((speed - speedLimit) / kmPerSecond);

            if (demeritPoints > 12) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${demeritPoints}`);
            }
        }
    }

        
        
    