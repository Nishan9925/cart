import React, { useContext } from 'react';
import { User } from '.';
import { DashboardContext, useUserContext } from './context';

interface SidebarProps {
    // user: User;
}

export function Sidebar({}:SidebarProps) {
    const user = useUserContext();
    return (
        <div>
            <div>{user.name}</div>
            <div>Subs status{user.isSubsribed}</div>
        </div>
    )
}

interface ProfileProps {
    // user: User
}

export function Profile({}: ProfileProps) {
    const user = useUserContext();
    return (
        <div>{user.name}</div>
    )
}