import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-gold mb-6">Error 404</p>
        <h1 className="font-display text-7xl text-foreground">Lost in transit</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          The page you're looking for has been moved or doesn't exist.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="eyebrow border-b border-gold pb-1 text-foreground hover:text-gold transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VibePKG — Premium Cannabis Packaging" },
      {
        name: "description",
        content:
          "VibePKG distributes premium packaging for the cannabis industry — boxes, mylar bags, glass, tins, labels and compliance solutions.",
      },
      { name: "author", content: "VibePKG" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "VibePKG — Premium Cannabis Packaging" },
      { name: "twitter:title", content: "VibePKG — Premium Cannabis Packaging" },
      { name: "description", content: "VibePKG Elevate is a sleek, minimal website for a cannabis packaging distributor." },
      { property: "og:description", content: "VibePKG Elevate is a sleek, minimal website for a cannabis packaging distributor." },
      { name: "twitter:description", content: "VibePKG Elevate is a sleek, minimal website for a cannabis packaging distributor." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/05a882bd-bd0b-4fc9-b755-4c66bb306c6e/id-preview-b3666b94--f350f83b-d722-4e7c-ad0e-f9b59d76195e.lovable.app-1777062860974.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/05a882bd-bd0b-4fc9-b755-4c66bb306c6e/id-preview-b3666b94--f350f83b-d722-4e7c-ad0e-f9b59d76195e.lovable.app-1777062860974.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
