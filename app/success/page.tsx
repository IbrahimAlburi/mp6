async function getUser(token: string) {
  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  const token = params.token;

  if (!token) {
    return (
      <main className="container">
        <h1>Error</h1>
        <p>No token provided.</p>
      </main>
    );
  }

  const user = await getUser(token);

  return (
    <main className="container">
      <h1>You logged in! 🎉</h1>

      <img src={user.avatar_url} alt="avatar" className="avatar" />

      <p><strong>Name:</strong> {user.name || "N/A"}</p>
      <p><strong>Username:</strong> {user.login}</p>
      <p><strong>Email:</strong> {user.email || "Private"}</p>
    </main>
  );
}