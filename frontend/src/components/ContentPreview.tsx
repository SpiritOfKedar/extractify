interface ContentPreviewProps {
  children?: React.ReactNode;
  isEmpty?: boolean;
}

export default function ContentPreview({
  children,
  isEmpty = true,
}: ContentPreviewProps) {
  return (
    <div className="w-full max-w-[680px] min-h-[414px] rounded-[20px] border border-border bg-card overflow-hidden flex items-center justify-center">
      {isEmpty ? (
        <p className="text-muted text-base font-medium text-center px-4 max-w-[302px] leading-7">
          After the link is pasted it will showcase here what the user is
          downloading
        </p>
      ) : (
        children
      )}
    </div>
  );
}
