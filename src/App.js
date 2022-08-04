// import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import BlogContextProvider from "./context/BlogContext";
import AppRouter from "./router/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <Toaster />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
