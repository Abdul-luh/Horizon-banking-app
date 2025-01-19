export default function RightSideBar({
  user,
  banks,
  transactions,
}: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl text-blue-500 font-bold">
              {user.firstName[0]}
            </span>
          </div>
        </div>
      </section>
    </aside>
  );
}
