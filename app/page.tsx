"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Add state for request number
  const [requestCount, setRequestCount] = useState<number | null>(null);
  const [isLoadingCount, setIsLoadingCount] = useState(true);
  const { toast } = useToast();

  // Fetch the request count when the component mounts
  useEffect(() => {
    const fetchRequestCount = async () => {
      try {
        // Replace with your actual API endpoint for getting the count
        const response = await fetch("YOUR_COUNT_API_ENDPOINT");

        if (!response.ok) {
          throw new Error("Failed to fetch request count");
        }

        const data = await response.json();
        // Assuming your API returns an object with a count property
        setRequestCount(data.count);
      } catch (error) {
        console.error("Error fetching request count:", error);
      } finally {
        setIsLoadingCount(false);
      }
    };

    fetchRequestCount();
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace 'YOUR_API_ENDPOINT_URL' with your actual API endpoint
      const response = await fetch("YOUR_API_ENDPOINT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers your API requires
          // 'Authorization': 'Bearer YOUR_API_KEY',
        },
        body: JSON.stringify({
          email: email,
          userRequest: "early access request",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("API error:", errorData);
        throw new Error("Failed to submit");
      }

      const data = await response.json();
      console.log("API response:", data);

      // Update request count if the API returns an updated count
      if (data.count !== undefined) {
        setRequestCount(data.count);
      } else {
        // If the API doesn't return a count, increment the local count
        setRequestCount((prevCount) =>
          prevCount !== null ? prevCount + 1 : 1
        );
      }

      // Show success message
      toast({
        title: "Success!",
        description: "Thank you for your interest! We'll be in touch soon.",
      });

      // Set submission as successful
      setIsSubmitted(true);

      // Clear the form
      setEmail("");
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to render the request count
  const renderRequestCount = () => {
    if (isLoadingCount) {
      return (
        <div className="text-sm text-[#48546d] mt-4">
          Loading request count...
        </div>
      );
    }

    if (requestCount !== null) {
      return (
        <div className="text-sm text-[#48546d] mt-4">
          <span className="font-medium">{requestCount.toLocaleString()}</span>{" "}
          people have already requested early access
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f4e5c6]">
      <header className="w-full py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="" height={50} width={50} />
            <span className="text-2xl font-medium text-[#48546d]">
              Calendarix
            </span>
          </div>

          <Button className="bg-[#414ba4] hover:bg-[#414ba4]/90 text-white">
            GET EARLY ACCESS
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
              <span className="text-[#d7dfee]">The AI-Powered </span>
              <span className="text-[#414ba4]">Calendar</span>
              <br />
              <span className="text-[#d7dfee]">That </span>
              <span className="text-[#414ba4]">Transforms</span>
              <span className="text-[#d7dfee]"> Your Life</span>
            </h1>

            <p className="text-[#48546d] text-xl md:text-2xl max-w-2xl mx-auto mb-12">
              Get personalized schedules, from daily tasks to monthly goals, all
              in one place.
            </p>

            {isSubmitted ? (
              <div className="bg-white/80 rounded-lg p-6 text-center w-full max-w-md mx-auto">
                <div className="text-[#414ba4] font-bold text-xl mb-2">
                  Thank you for your request!
                </div>
                <p className="text-[#48546d]">
                  We'll be in touch soon with your early access details.
                </p>
                {renderRequestCount()}
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="bg-white border-0 h-12"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-[#414ba4] hover:bg-[#414ba4]/90 text-white h-12 px-6 whitespace-nowrap"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBMITTING..." : "GET EARLY ACCESS"}
                  </Button>
                </form>
                {renderRequestCount()}
              </div>
            )}
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <Image
                  src="/img1.png"
                  alt="Before: Person overwhelmed with tasks"
                  width={350}
                  height={350}
                  className="mx-auto"
                />
              </div>

              <div className="md:col-span-1 flex justify-center">
                <div className="text-4xl text-[#48546d]">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-[#d7dfee]">The </span>
                    <span className="text-[#414ba4]">Smartest</span>
                    <span className="text-[#d7dfee]"> Way to </span>
                    <span className="text-[#414ba4]">Organize</span>
                    <span className="text-[#d7dfee]">
                      {" "}
                      Your Life, Powered by{" "}
                    </span>
                    <span className="text-[#414ba4]">AI</span>
                  </h2>

                  <p className="text-[#48546d] text-lg">
                    Our innovative calendar goes beyond basic scheduling. With
                    customizable categories and AI-powered planning, you can
                    effortlessly manage every aspect of your life. From daily
                    tasks to long-term goals, experience a new level of
                    organization.
                  </p>
                </div>
              </div>

              <div className="md:col-span-1">
                <Image
                  src="/img2.png"
                  alt="After: Organized calendar with AI assistant"
                  width={350}
                  height={350}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 bg-[#f4e5c6]">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center space-x-4 mb-6">
            <Link
              href="#"
              className="h-10 w-10 rounded-full border border-[#8f9bb3] flex items-center justify-center text-[#8f9bb3] hover:text-[#414ba4] hover:border-[#414ba4]"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="h-10 w-10 rounded-full border border-[#8f9bb3] flex items-center justify-center text-[#8f9bb3] hover:text-[#414ba4] hover:border-[#414ba4]"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="h-10 w-10 rounded-full border border-[#8f9bb3] flex items-center justify-center text-[#8f9bb3] hover:text-[#414ba4] hover:border-[#414ba4]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="text-center text-[#8f9bb3] text-sm">
            © 2025 Copyright: Calendarix.pro
          </div>
        </div>
      </footer>
    </div>
  );
}
