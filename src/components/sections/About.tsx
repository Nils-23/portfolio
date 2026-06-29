"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
    return (
        <section
            id="about"
            className="container mx-auto px-6 py-24 border-b border-border"
        >
            <div className="max-w-5xl grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                    <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest sticky top-24">
                        About
                    </h2>
                </div>
                <div className="grid gap-8 lg:gap-16 lg:grid-cols-[1fr_300px] items-start">
                    <div className="space-y-8">
                        {/* Intro statement (Large editorial typography) */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed text-balance"
                        >
                            {about.intro}
                        </motion.p>

                        {/* Substantive paragraphs / philosophy */}
                        <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                            {about.philosophy.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        {/* Bio Placeholder as requested */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: about.philosophy.length * 0.1 }}
                            className="rounded-lg border border-dashed border-border p-6 bg-card/30"
                        >
                            <h3 className="text-sm font-medium text-foreground mb-2">Looking Ahead</h3>
                            <p className="text-sm text-muted-foreground">
                                One project and one coffee at a time, I am committed to creating solutions and making the world an easier and better place to live.
                            </p>
                        </motion.div>
                    </div>

                    {/* Aesthetic Portrait Section */}
                    <div className="space-y-3 lg:sticky lg:top-24 mt-4 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative group aspect-square w-full max-w-[320px] mx-auto lg:max-w-none rounded-xl overflow-hidden border border-border bg-muted/40 shadow-sm"
                        >
                            <img
                                src="/images/profile.jpg"
                                alt="Akonkwa Lwambwa Nils Portrait"
                                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
