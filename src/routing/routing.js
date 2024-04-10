import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Programmes from '../pages/Programmes/index'
import NewsStories from '../pages/NewsStories/index'
import ContactUs from '../pages/ContactUs/index'
import Layout from '../pages/Layout/index'
import History from '../pages/History/index';
import VisionMissionGoal from '../pages/VisionMissionGoal/index';
import Approach from '../pages/Approach/index';
import TheoryOfChange from '../pages/TheoryOfChange/index';
import LegalStatus from '../pages/LegalStatus/index';
import OurPresence from '../pages/OurPresence/index';
import OrganizationStructure from '../pages/OrganizationStructure/index';
import InstitutionBasedSupport from '../pages/InstitutionBasedSupport/index';
export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={< About />}></Route>
                    <Route path='/programmes' element={< Programmes />}></Route>
                    <Route path='/newsstories' element={< NewsStories />}></Route>
                    <Route path='/contactus' element={< ContactUs />}></Route>
                    <Route path='/history' element={< History />}></Route>
                    <Route path='/visionmissiongoal' element={< VisionMissionGoal />}></Route>
                    <Route path='/institutionbasedsupport' element={< InstitutionBasedSupport />}></Route>
                    <Route path='/approach' element={< Approach />}></Route>
                    <Route path='/theoryofchange' element={< TheoryOfChange />}></Route>
                    <Route path='/legalstatus' element={< LegalStatus />}></Route>
                    <Route path='/ourpresence' element={< OurPresence />}></Route>
                    <Route path='/organizationstructure' element={< OrganizationStructure />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
