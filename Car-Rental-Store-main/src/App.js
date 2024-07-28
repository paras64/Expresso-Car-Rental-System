import "./App.css";
import { Suspense, lazy } from "react";
import TestimonialComponent from "./component//TestimonialComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./component/Loader";
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const VehicalModels = lazy(() => import("./component/VehicalModels"));
const Login = lazy(() => import("./component/LoginRegistration/Login"));
const Registration = lazy(() =>
  import("./component/LoginRegistration/Registration")
);
const ForgotPassword = lazy(() =>
  import("./component/LoginRegistration/ForgotPassword")
);
const ConfirmPassword = lazy(() =>
  import("./component/LoginRegistration/ConfirmPassword")
);
const Orders = lazy(() => import("./component/Orders"));
const Contact = lazy(() => import("./component/Contact"));
const NotFound = lazy(() => import("./NotFound"));
const Ourteam = lazy(() => import("./component/Ourteam"));
const AdminLogin = lazy(() => import("./component/Admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./component/Admin/AdminDashboard"));
const AdminProvider = lazy(() => import("./component/Admin/AdminProvider"));
const AddProducts = lazy(() => import("./component/Admin/AddProducts"));
const UserProvider = lazy(() =>
  import("./component/LoginRegistration/UserProvider")
);
const ModifyProduct = lazy(() => import("./component/Admin/ModifyProduct"));
const ModifyFaq = lazy(() => import("./component/Admin/ModifyFaq"));
const FaqProvider = lazy(() => import("./component/Admin/FaqProvider"));
const AllUserProvider = lazy(() => import("./component/Admin/AllUserProvider"));
function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <AllUserProvider>
            <FaqProvider>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/about"
                  element={
                    <Suspense fallback={<Loader />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/testimonial"
                  element={
                    <Suspense fallback={<Loader />}>
                      <TestimonialComponent />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/vehicalsmodels"
                  element={
                    <Suspense fallback={<Loader />}>
                      <VehicalModels />
                    </Suspense>
                  }
                />

                <Route
                  exact
                  path="/ourteam"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Ourteam />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/support"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/login"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Login />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/register"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Registration />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/forgotpassword"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ForgotPassword />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/orders"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Orders />
                    </Suspense>
                  }
                />

                <Route
                  exact
                  path="/admin/login"
                  element={
                    <AdminProvider>
                      <Suspense fallback={<Loader />}>
                        <AdminLogin />
                      </Suspense>
                    </AdminProvider>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard"
                  element={
                    <AdminProvider>
                      <Suspense fallback={<Loader />}>
                        <AdminDashboard />
                      </Suspense>
                    </AdminProvider>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard/addproduct"
                  element={
                    <AdminProvider>
                      <Suspense fallback={<Loader />}>
                        <AddProducts />
                      </Suspense>
                    </AdminProvider>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard/modifyproduct"
                  element={
                    <AdminProvider>
                      <Suspense fallback={<Loader />}>
                        <ModifyProduct />
                      </Suspense>
                    </AdminProvider>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard/modifyfaq"
                  element={
                    <AdminProvider>
                      <Suspense fallback={<Loader />}>
                        <ModifyFaq />
                      </Suspense>
                    </AdminProvider>
                  }
                />

                <Route
                  exact
                  path="/confirmpassword/:userEmail"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ConfirmPassword />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="*"
                  element={
                    <Suspense fallback={<Loader />}>
                      <NotFound />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/loading"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Loader />
                    </Suspense>
                  }
                />
              </Routes>
            </FaqProvider>
          </AllUserProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
