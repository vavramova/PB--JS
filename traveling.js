function traveling(input){
        let index = 0;
        
        
        while (true) {
            let destination = input[index];
            index++
            
            if (destination === "End") {
                break;
            }
            
            let neededBudget = Number(input[index]);
            index++
            let totalSavings = 0;
            
            while (totalSavings < neededBudget) {
                totalSavings += Number(input[index]);
                index++
            }
            
            console.log(`Going to ${destination}!`);
        }
    
    

    
}
traveling(["Greece","1000","200","200","300","100","150","240",
"Spain","1200","300","500","193","423","End"])