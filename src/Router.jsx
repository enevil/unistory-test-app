import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import PostAddForm from "./components/Post/Post";
import MainLayout from "./MainLayout";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Blog />} />
				<Route path=":postId" element={<PostAddForm />} />
			</Route>
		</Routes>
	);
}

export default Router;
