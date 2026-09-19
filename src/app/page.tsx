const stats = [
  {
    label: "Today's Revenue",
    value: "Rp 8.42M",
    change: "+12.8%",
    positive: true,
  },
  {
    label: "Orders",
    value: "184",
    change: "+8.4%",
    positive: true,
  },
  {
    label: "Average Order",
    value: "Rp 45.8K",
    change: "+4.2%",
    positive: true,
  },
  {
    label: "Customer Rating",
    value: "4.7",
    change: "+0.2",
    positive: true,
  },
];

const products = [
  { name: "Nasi Goreng Special", orders: 42, revenue: "Rp 1.68M" },
  { name: "Chicken Rice Bowl", orders: 36, revenue: "Rp 1.26M" },
  { name: "Iced Matcha Latte", orders: 29, revenue: "Rp 870K" },
  { name: "Beef Burger", orders: 24, revenue: "Rp 1.08M" },
];

const recentOrders = [
  { id: "#1048", table: "T-12", items: 3, total: "Rp 128K", status: "Completed" },
  { id: "#1047", table: "T-04", items: 2, total: "Rp 86K", status: "Preparing" },
  { id: "#1046", table: "T-08", items: 4, total: "Rp 174K", status: "Completed" },
  { id: "#1045", table: "T-02", items: 1, total: "Rp 42K", status: "Preparing" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-950">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white px-5 py-6 lg:block">
          <div className="mb-10 flex items-center gap-3 px-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
              F
            </div>
            <div>
              <p className="font-semibold tracking-tight">FNB-AI</p>
              <p className="text-xs text-zinc-500">Restaurant OS</p>
            </div>
          </div>

          <nav className="space-y-1">
            <NavItem label="Overview" active />
            <NavItem label="Orders" />
            <NavItem label="Menu" />
            <NavItem label="Customers" />
            <NavItem label="Reviews" />
            <NavItem label="Analytics" />
            <NavItem label="AI Insights" />
          </nav>

          <div className="mt-10 border-t border-zinc-200 pt-5">
            <p className="px-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Management
            </p>
            <div className="mt-3 space-y-1">
              <NavItem label="Tables & QR" />
              <NavItem label="Staff" />
              <NavItem label="Settings" />
            </div>
          </div>

          <div className="mt-auto pt-12">
            <div className="rounded-2xl bg-zinc-950 p-4 text-white">
              <p className="text-xs text-zinc-400">AI Status</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium">Systems operational</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Your restaurant data is being analyzed continuously.
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-5 lg:px-10">
            <div>
              <p className="text-sm text-zinc-500">Saturday, September 19, 2026</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                Good afternoon, Boss.
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50 sm:block">
                Export Report
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold">
                JS
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-10">
            {/* Restaurant selector */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-zinc-500">Restaurant</p>
                <div className="mt-1 flex items-center gap-2">
                  <h2 className="text-lg font-semibold">Kopi Senja</h2>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    Open
                  </span>
                </div>
              </div>

              <button className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-zinc-50">
                Today ▾
              </button>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-5"
                >
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="text-2xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                    <span className="text-xs font-medium text-emerald-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI insight */}
            <section className="rounded-2xl bg-zinc-950 p-6 text-white">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs">
                      AI
                    </span>
                    <p className="text-sm font-medium text-zinc-300">
                      FNB-AI Insight
                    </p>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    Your dinner traffic is increasing.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Orders between 18:00–20:00 are 21% higher than the
                    previous seven-day average. Iced Matcha Latte is also
                    frequently ordered with the Chicken Rice Bowl.
                  </p>
                </div>

                <button className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-100">
                  View analysis
                </button>
              </div>
            </section>

            {/* Two-column section */}
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Popular products */}
              <section className="rounded-2xl border border-zinc-200 bg-white">
                <div className="flex items-center justify-between border-b border-zinc-200 p-5">
                  <div>
                    <h3 className="font-semibold">Popular products</h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      Top products by order volume
                    </p>
                  </div>
                  <button className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
                    View menu
                  </button>
                </div>

                <div className="divide-y divide-zinc-100">
                  {products.map((product, index) => (
                    <div
                      key={product.name}
                      className="flex items-center justify-between p-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-sm font-semibold">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="mt-1 text-xs text-zinc-500">
                            {product.orders} orders
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-medium">{product.revenue}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recent orders */}
              <section className="rounded-2xl border border-zinc-200 bg-white">
                <div className="flex items-center justify-between border-b border-zinc-200 p-5">
                  <div>
                    <h3 className="font-semibold">Recent orders</h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      Live restaurant activity
                    </p>
                  </div>
                  <button className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
                    View all
                  </button>
                </div>

                <div className="divide-y divide-zinc-100">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between gap-4 p-5"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">{order.id}</p>
                          <span className="text-xs text-zinc-400">
                            {order.table}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-zinc-500">
                          {order.items} items
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-medium">{order.total}</p>
                        <p
                          className={`mt-1 text-xs ${
                            order.status === "Completed"
                              ? "text-emerald-600"
                              : "text-amber-600"
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Bottom action area */}
            <section className="grid gap-4 sm:grid-cols-3">
              <ActionCard
                title="Create QR codes"
                description="Generate table QR codes for ordering."
              />
              <ActionCard
                title="Review customers"
                description="Understand visits, preferences and feedback."
              />
              <ActionCard
                title="Ask FNB-AI"
                description="Ask questions about your restaurant data."
              />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function NavItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition ${
        active
          ? "bg-zinc-100 font-medium text-zinc-950"
          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"
      }`}
    >
      {label}
    </button>
  );
}

function ActionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button className="rounded-2xl border border-zinc-200 bg-white p-5 text-left transition hover:border-zinc-300 hover:shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="mt-2 text-sm leading-5 text-zinc-500">{description}</p>
      <p className="mt-4 text-sm font-medium">Open →</p>
    </button>
  );
}