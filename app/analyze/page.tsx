'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, Loader2 } from 'lucide-react';

export default function AnalyzePage() {
  const [targetUrl, setTargetUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!targetUrl) return;

    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: targetUrl }),
      });

      const data = await response.json();
      // Handle the response data
      console.log(data);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
            Website Analysis
          </h1>
          <p className="text-lg text-neutral-600">
            Enter your website URL below to begin the comprehensive analysis
          </p>
        </div>

        <Card className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <Input
                type="url"
                placeholder="Enter website URL (e.g., https://example.com)"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleAnalyze}
                disabled={!targetUrl || isAnalyzing}
                className="min-w-[120px]"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Analyze
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-neutral-500">
              We'll analyze your website's technology stack, security vulnerabilities, and provide migration recommendations.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}