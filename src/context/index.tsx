import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";



export interface User {
    isSubsribed: boolean,
    name: string,
}

interface DemoProps{}

export default function Demo({}: DemoProps) {
    const [user] = useState<User>({
        isSubsribed: true,
        name: "John",
    });

    return (        
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}



