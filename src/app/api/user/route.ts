import { DatabaseUser } from "../../type";
import { type NextRequest } from "next/server";

function fetchUserFromDatabase(id: string): DatabaseUser {
	return { id, name: "nanika", himitsu_password: "ra-men" };
}

// `/user?id=abc` へのアクセスとレスポンス
export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const id = searchParams.get("id");
	if (!id) {
		return Response.json({ error: "id is required" }, { status: 400 });
	}
	const user = fetchUserFromDatabase(id);
	return Response.json(user);
}
