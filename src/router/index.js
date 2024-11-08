import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from "../pages"
import { Dashboard } from "../pages"
import { Profile } from "../pages"
import {Notification} from "../pages"
import { ControlDevices } from "../pages"
import App from "../App"



export const router = createBrowserRouter([
    { path: '/' , element: <App />},
    { path: '/profile' , element: <Profile />},
    { path: '/control-device' , element: <ControlDevices />},
    { path: '/notification' , element: <Notification />}
])