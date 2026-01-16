"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle, ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const popularLinks = siteConfig.navigationLinks.slice(0, 4);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-4">
              <AlertCircle className="w-10 h-10 text-red-500" aria-hidden="true" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleGoBack}
                variant="outline"
                className="flex items-center justify-center"
                aria-label="Go back to previous page"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
              <Link href="/">
                <Button
                  className="bg-primary-cta hover:bg-primary-cta-hover focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 flex items-center justify-center"
                  aria-label="Go back to homepage"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
            </div>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="w-full sm:w-auto sm:mx-auto"
              aria-label="Refresh the page"
            >
              Refresh Page
            </Button>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {popularLinks.map((link) => {
                const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                return (
                  <Link
                    key={link.href}
                    href={href}
                    className="text-sm text-primary-cta hover:text-primary-cta-hover hover:underline px-3 py-1.5 rounded-md hover:bg-primary-cta/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

