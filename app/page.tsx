import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Legacy Websites
              <span className="text-blue-400"> Into Modern Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300 max-w-2xl">
              Most local websites are built with outdated technologies, creating security vulnerabilities and migration headaches. Our platform analyzes and modernizes your web presence.
            </p>
            <div className="mt-10">
              <Link href="/analyze">
                <Button size="lg" className="group">
                  Start Analysis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Security First</h3>
              <p className="mt-2 text-neutral-600">
                Identify vulnerabilities and outdated components in your WordPress site
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Modern Stack</h3>
              <p className="mt-2 text-neutral-600">
                Transform PHP-based sites into modern, performant web applications
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <RefreshCw className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Seamless Migration</h3>
              <p className="mt-2 text-neutral-600">
                Automated analysis and migration path recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}