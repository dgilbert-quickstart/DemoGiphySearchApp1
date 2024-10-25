//const outputDiv = document.querySelector(".output");
//const outputDiv = document.querySelector("#output");
const outputDiv = document.getElementById("output");

async function page_load()
{
    
    try {
                    
        const msg = "## demo gihpy app 1 - page load"
        console.log(msg)

        if(outputDiv == null | outputDiv == undefined){       
            const msg = "## demo gihpy app 1 - output div not found"
            console.log(msg) 
            return false;
        }
    
        //outputDiv.innerText = msg;

    } catch (error) {

        console.log("## demo gihpy app 1 - error ")
        console.log(error)

        msg = "## demo gihpy app 1 - error ";
        outputDiv.innerText = msg;
    }
}


