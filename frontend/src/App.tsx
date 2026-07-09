import { Routes, Route } from 'react-router-dom'
import Index from './pages/index.tsx'
import Projects from './pages/projects/addProjects.tsx'
import ControlPanel from './pages/controlPanel.tsx'
import AddType from './pages/projects/addType.tsx'
import AddStack from './pages/projects/addStack.tsx'
import AddSource from './pages/projects/addSource.tsx'
import EditProject from './pages/projects/editProjects.tsx'
import EditSource from './pages/projects/editSource.tsx'
import { WebRoute } from './routes/web.route.tsx'
import { Login, Register } from './pages/auth.tsx'
import AuthMiddleware from './pages/auth/auth.middleware.tsx'
import AddEducation from './pages/education/addEducation.tsx'
import AddExperience from './pages/experience/addExperience.tsx'
import AddTechStack from './pages/techStack/addTechStack.tsx'
export default function App() {
  return (
    <>
      <Routes>
        <Route path={WebRoute.HOME} element={<Index />} />
        <Route path={WebRoute.LOGIN} element={<Login />} />
        {/* Register */}
        <Route path={WebRoute.REGISTER} element={<Register />} />

        <Route element={<AuthMiddleware />}>

          {/* controlpanel */}
          <Route path={WebRoute.CONTROL_PANEL} element={<ControlPanel />} />

          {/* Projects */}
          <Route path={WebRoute.PROJECTS} element={<Projects />} />
          <Route path={WebRoute.EDIT_PROJECT} element={<EditProject />} />
          <Route path={WebRoute.EDIT_SOURCE} element={<EditSource />} />
          <Route path={WebRoute.ADD_PROJECT_TYPE} element={<AddType />} />
          <Route path={WebRoute.ADD_PROJECT_STACK} element={<AddStack />} />
          <Route path={WebRoute.ADD_PROJECT_SOURCE} element={<AddSource />} />

          {/* EDUCATION */}
          <Route path={WebRoute.ADD_EDUCATION} element={<AddEducation />} />

          {/* EXPERIENCE */}
          <Route path={WebRoute.ADD_EXPERIENCE} element={<AddExperience />} />

          <Route path={WebRoute.ADD_TECH_STACK} element={<AddTechStack />} />
        </Route>

      </Routes>
    </>
  )
}