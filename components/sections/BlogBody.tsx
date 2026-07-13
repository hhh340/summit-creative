export function BlogBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\n+/);

  return (
    <div className="prose-custom space-y-6">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-2 text-xl font-semibold">
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {block}
          </p>
        );
      })}
    </div>
  );
}
