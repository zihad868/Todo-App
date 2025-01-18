import { Server } from "http";
import app from "./app";
import config from "./config";


let server: Server;

// Main function
function main(){
    try{
        server = app.listen(config.port, () => {
            console.log("Server running on port", config.port)
        })
    }catch(error){
        console.log(error)
    }
}


// Start Server
main()