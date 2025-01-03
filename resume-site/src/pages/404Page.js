import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
    <div className="flex flex-col gap-2">
            <div>404 Page Not Found: check your URL</div>
            <div><Link to='/'>Home</Link></div>
    </div>
    );
}