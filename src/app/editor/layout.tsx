import EditorSidebar from "@/components/EditorSidebar/EditorSidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <EditorSidebar />

      {children}
    </section>
  );
}
