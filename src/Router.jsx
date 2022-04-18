import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import PostAddForm from "./components/PostAddForm/PostAddForm";
import MainLayout from "./MainLayout";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Blog />} />
				<Route path="add" element={<PostAddForm />} />
				<Route path=":postId" element={<PostAddForm edit />} />
			</Route>
		</Routes>
	);
}

export default Router;
