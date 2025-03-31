"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";
import { CheckCircle, Clock, CalendarClock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestCount, setRequestCount] = useState<number | null>(null);
  const [isLoadingCount, setIsLoadingCount] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRequestCount = async () => {
      try {
        const count = await apiClient.getRequestCount();
        setRequestCount(count);
      } finally {
        setIsLoadingCount(false);
      }
    };

    fetchRequestCount();
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail.length > 0) {
      setIsEmailValid(validateEmail(newEmail));
    } else {
      setIsEmailValid(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate a minimum loading time for better UX
      await Promise.all([
        apiClient.subscribeForEarlyAccess(email),
        new Promise((resolve) => setTimeout(resolve, 1200)), // Minimum 1.2s loading time
      ]).then(([data]) => {
        if (data.count !== undefined) {
          setRequestCount(data.count);
        } else {
          setRequestCount((prevCount) =>
            prevCount !== null ? prevCount + 1 : 1
          );
        }

        toast({
          title: "Success!",
          description: "Thank you for your interest! We'll be in touch soon.",
        });

        setIsSubmitted(true);
        setEmail("");
        setIsEmailValid(null);
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Your request already exists",
        description: "Please check your email or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderRequestCount = () => {
    if (isLoadingCount) {
      return (
        <div className="text-sm text-[#48546d] mt-2 flex items-center justify-center gap-1">
          <Clock className="size-3 animate-pulse" />
          <span>Loading request count...</span>
        </div>
      );
    }

    if (requestCount !== null) {
      return (
        <div className="text-sm text-[#48546d] mt-2 flex items-center justify-center gap-1">
          <CheckCircle className="size-3 text-[#414ba4]" />
          <span>
            <span className="font-medium">{requestCount.toLocaleString()}</span>{" "}
            people have already requested early access
          </span>
        </div>
      );
    }

    return null;
  };

  // Animation variants for hero text
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Email input border color based on validation
  const getInputClassName = () => {
    const baseClass = "h-12 shadow-sm transition-all duration-300";

    if (isEmailValid === null) {
      return `${baseClass} border-[#d7dfee]`;
    } else if (isEmailValid) {
      return `${baseClass} border-green-500 focus-visible:ring-green-500`;
    } else {
      return `${baseClass} border-red-500 focus-visible:ring-red-500`;
    }
  };

  // Button animation variants
  const buttonVariants = {
    idle: {
      scale: 1,
      backgroundColor: "rgb(65, 75, 164)", // #414ba4
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgb(59, 68, 150)", // Slightly darker
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      backgroundColor: "rgb(52, 60, 133)", // Even darker for press effect
    },
    loading: {
      scale: 1,
      backgroundColor: "rgb(65, 75, 164)",
    },
  };

  // Loading spinner animation
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  return (
    <>
      {/* Minimal Header */}
      <header className="container py-4 border-b border-[#d7dfee]/30">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <CalendarClock className="text-[#414ba4] size-5" />
            <span className="font-medium text-[#414ba4]">CalendarIX</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm text-[#48546d] hover:text-[#414ba4] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm text-[#48546d] hover:text-[#414ba4] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#48546d] hover:text-[#414ba4] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex-1 flex flex-col justify-center py-4">
        {/* Hero Section with Animation */}
        <div className="text-center mb-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={item}
              className="text-[#d7dfee] inline-block"
            >
              The AI-Powered{" "}
            </motion.span>
            <motion.span
              variants={item}
              className="text-[#414ba4] inline-block"
            >
              Calendar
            </motion.span>
            <br />
            <motion.span
              variants={item}
              className="text-[#d7dfee] inline-block"
            >
              That{" "}
            </motion.span>
            <motion.span
              variants={item}
              className="text-[#414ba4] inline-block"
            >
              Transforms
            </motion.span>
            <motion.span
              variants={item}
              className="text-[#d7dfee] inline-block"
            >
              {" "}
              Your Life
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-[#48546d] text-lg max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Get personalized schedules, from daily tasks to monthly goals, all
            in one place.
          </motion.p>

          {/* Email Form */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                className="bg-white/80 rounded-lg p-4 text-center w-full max-w-md mx-auto shadow-sm border border-[#d7dfee]/30"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <div className="text-[#414ba4] font-bold text-xl mb-2 flex items-center justify-center gap-2">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2,
                      duration: 0.5,
                    }}
                  >
                    <CheckCircle className="size-5" />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    Thank you for your request!
                  </motion.span>
                </div>
                <motion.p
                  className="text-[#48546d]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  We'll be in touch soon with your early access details.
                </motion.p>
                {renderRequestCount()}
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex overflow-hidden rounded-md shadow-sm">
                    <Input
                      type="email"
                      placeholder="Email address"
                      className={`${getInputClassName()} rounded-r-none border-r-0`}
                      value={email}
                      onChange={handleEmailChange}
                      required
                      disabled={isSubmitting}
                    />
                    <motion.button
                      type="submit"
                      className="h-12 px-6 whitespace-nowrap text-white font-medium rounded-l-none flex items-center justify-center gap-2 overflow-hidden"
                      disabled={isSubmitting}
                      variants={buttonVariants}
                      initial="idle"
                      whileHover={isSubmitting ? "loading" : "hover"}
                      whileTap={isSubmitting ? "loading" : "tap"}
                      animate={isSubmitting ? "loading" : "idle"}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              variants={spinnerVariants}
                              animate="animate"
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>SUBMITTING...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <span>GET ACCESS</span>
                            <motion.div
                              initial={{ x: 0 }}
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <ArrowRight className="size-4" />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </form>
                {renderRequestCount()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Content with Images */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left Image */}
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/img1.png"
              alt="Before: Person overwhelmed with tasks"
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>

          {/* Middle Text */}
          <div className="md:col-span-1">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                <span className="text-[#d7dfee]">The </span>
                <span className="text-[#414ba4]">Smartest</span>
                <span className="text-[#d7dfee]"> Way to </span>
                <span className="text-[#414ba4]">Organize</span>
              </h2>

              <p className="text-[#48546d] text-sm">
                Our innovative calendar goes beyond basic scheduling. With
                customizable categories and AI-powered planning, you can
                effortlessly manage every aspect of your life.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/img2.png"
              alt="After: Organized calendar with AI assistant"
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
}
